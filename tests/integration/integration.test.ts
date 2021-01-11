import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';

const executeCypress = (
  testName: string,
  args: string,
): Promise<{ exitCode: number; output: string }> => {
  return new Promise((resolve) => {
    const bin = path.resolve(__dirname, '..', '..', 'bin', 'skills17-cypress');

    // execute cypress in the subdirectory
    const cmd = exec(`${bin} ${args}`, {
      cwd: path.resolve(__dirname, testName),
      env: { ...process.env, FORCE_COLOR: '0' },
    });

    // catch output
    let output = '';
    cmd.stdout?.on('data', (data) => {
      output += data;
    });
    cmd.stderr?.on('data', (data) => {
      // some cypress versions have a bug with an internal memory leak
      if (
        data.includes('MaxListenersExceededWarning: Possible EventEmitter memory leak detected.')
      ) {
        return;
      }

      output += data;
    });

    // wait until the process finishes
    cmd.on('exit', (code: number) => resolve({ exitCode: code, output }));
  });
};

describe('integration tests', () => {
  // get all integration tests
  const integrationTests = fs.readdirSync(__dirname).filter((file) => {
    const fileInfo = fs.statSync(path.resolve(__dirname, file));
    return fileInfo.isDirectory();
  });

  it.each(integrationTests)(
    '%s - console reporter',
    async (test) => {
      // execute cypress in the subdirectory
      const { output } = await executeCypress(test, 'run --quiet');

      // update expected output if required
      if (process.env.UPDATE_EXPECTED_OUTPUT === '1') {
        fs.writeFileSync(path.resolve(__dirname, test, 'expected.txt'), output);
      }

      // read expected output
      const expectedOutput = fs.readFileSync(path.resolve(__dirname, test, 'expected.txt'));

      expect(output.trim()).toEqual(expectedOutput.toString().trim());
    },
    60000,
  );

  it.each(integrationTests)(
    '%s - json reporter',
    async (test) => {
      // execute cypress in the subdirectory
      const { output } = await executeCypress(test, 'run --quiet --json');

      // update expected output if required
      if (process.env.UPDATE_EXPECTED_OUTPUT === '1') {
        fs.writeFileSync(path.resolve(__dirname, test, 'expected.json'), output);
      }

      // read expected output
      const expectedOutput = fs.readFileSync(path.resolve(__dirname, test, 'expected.json'));

      expect(output.trim()).toEqual(expectedOutput.toString().trim());
    },
    60000,
  );
});

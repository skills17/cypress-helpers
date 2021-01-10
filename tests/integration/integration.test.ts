import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';

describe('integration tests', () => {
  // get all integration tests
  const integrationTests = fs.readdirSync(__dirname).filter((file) => {
    const fileInfo = fs.statSync(path.resolve(__dirname, file));
    return fileInfo.isDirectory();
  });

  const bin = path.resolve(__dirname, '..', '..', 'bin', 'skills17-cypress');

  it.each(integrationTests)(
    '%s',
    async (test) => {
      // execute cypress in the subdirectory
      const cmd = exec(`${bin} run --quiet`, {
        cwd: path.resolve(__dirname, test),
        env: { ...process.env, FORCE_COLOR: '0' },
      });

      // catch output
      let output = '';
      cmd.stdout?.on('data', (data) => {
        output += data;
      });
      cmd.stderr?.on('data', (data) => {
        output += data;
      });

      // wait until the process finishes
      const exitPromise = new Promise((resolve) => {
        cmd.on('exit', (code) => resolve(code));
      });
      const exitCode = await exitPromise;

      // update expected output if required
      if (process.env.UPDATE_EXPECTED_OUTPUT === '1') {
        fs.writeFileSync(path.resolve(__dirname, test, 'expected.txt'), output);
      }

      // read expected output
      const expectedOutput = fs.readFileSync(path.resolve(__dirname, test, 'expected.txt'));

      expect(exitCode).toEqual(0);
      expect(output.trim()).toEqual(expectedOutput.toString().trim());
    },
    60000,
  );
});

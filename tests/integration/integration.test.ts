import fs from 'fs';
import path from 'path';
import executeCypress from './execute-cypress';

describe('integration tests', () => {
  // get all integration tests
  const integrationTests = fs.readdirSync(__dirname).filter((file) => {
    const fileInfo = fs.statSync(path.resolve(__dirname, file));
    return fileInfo.isDirectory() && !file.startsWith('timezone-');
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
        fs.writeFileSync(path.resolve(__dirname, test, 'expected.json'), output.trim());
      }

      // read expected output
      const expectedOutput = fs.readFileSync(path.resolve(__dirname, test, 'expected.json'));

      expect(output.trim()).toEqual(expectedOutput.toString().trim());
    },
    60000,
  );
});

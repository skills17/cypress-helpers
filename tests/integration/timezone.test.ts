import path from 'path';
import fs from 'fs';
import executeCypress from './execute-cypress';

describe('timezone', () => {
  it('does not override timezone from env', async () => {
    // execute cypress in the subdirectory
    const { output } = await executeCypress('timezone-from-env', 'run --quiet --json', {
      TZ: 'Etc/UTC',
    });

    // read expected output
    const expectedOutput = fs.readFileSync(
      path.resolve(__dirname, 'timezone-from-env', 'expected.json'),
    );

    expect(output.trim()).toEqual(expectedOutput.toString().trim());
  }, 60000);

  it('uses timezone specified in command arguments', async () => {
    // execute cypress in the subdirectory
    const { output } = await executeCypress(
      'timezone-from-args',
      'run --quiet --json --timezone America/Vancouver',
    );

    // read expected output
    const expectedOutput = fs.readFileSync(
      path.resolve(__dirname, 'timezone-from-args', 'expected.json'),
    );

    expect(output.trim()).toEqual(expectedOutput.toString().trim());
  }, 60000);
});

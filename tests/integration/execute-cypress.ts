import path from 'path';
import { exec } from 'child_process';

const executeCypress = (
  testName: string,
  args: string,
  env?: Record<string, unknown>,
): Promise<{ exitCode: number; output: string }> => {
  return new Promise((resolve) => {
    const bin = path.resolve(__dirname, '..', '..', 'bin', 'skills17-cypress');

    // execute cypress in the subdirectory
    const cmd = exec(`${bin} ${args}`, {
      cwd: path.resolve(__dirname, testName),
      env: { ...process.env, FORCE_COLOR: '0', ...env },
    });

    // catch output
    let output = '';
    cmd.stdout?.on('data', (data) => {
      output += data;
    });
    cmd.stderr?.on('data', (data) => {
      // some cypress versions have a bug with an internal memory leak
      if (
        data.includes('MaxListenersExceededWarning: Possible EventEmitter memory leak detected.') ||
        data.includes('Failed to connect to the bus:') ||
        data.includes('Passthrough is not supported,') ||
        data.includes('Browserslist: caniuse-lite is outdated. Please run:') ||
        data.includes('npx browserslist@latest --update-db') ||
        data.includes('Why you should do it regularly:') ||
        data.includes('https://github.com/browserslist/browserslist') ||
        data.includes('InitializeSandbox()  called with multiple threads in process gpu-process') ||
        data.includes('dri3 extension not supported')
      ) {
        return;
      }

      output += data;
    });

    // wait until the process finishes
    cmd.on('exit', (code: number) => resolve({ exitCode: code, output }));
  });
};

export default executeCypress;

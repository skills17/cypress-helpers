import { exec } from 'child_process';
import shellEscape from 'shell-escape';
import TaskConfig from '@skills17/task-config';
import TaskServer from '@skills17/static-task-server';

export default class CommandWrapper {
  private config: TaskConfig;

  constructor(private argv: string[]) {
    this.config = new TaskConfig();
  }

  /**
   * Run cypress
   */
  private runCypress(): Promise<number> {
    return new Promise((resolve) => {
      const command = `$(npm bin)/cypress ${shellEscape(this.argv)}`;

      // execute cypress
      const cypress = exec(command, {
        cwd: this.config.getProjectRoot(),
        env: { FORCE_COLOR: '1', ...process.env },
      });

      cypress.on('exit', (code) => resolve(code ?? 1));
      cypress.stdout?.pipe(process.stdout);
      cypress.stderr?.pipe(process.stderr);
    });
  }

  /**
   * Processes the command
   */
  public async process(): Promise<void> {
    // load config
    await this.config.loadFromFile();

    // start task server
    let server;
    if (this.config.getServe().enabled) {
      server = new TaskServer(this.config);
      await server.serve();
      console.log(); // eslint-disable-line no-console
    }

    // run cypress
    const exitCode = await this.runCypress();

    if (server) {
      await server.stop();
    }

    process.exit(exitCode);
  }
}

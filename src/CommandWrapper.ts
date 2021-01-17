import path from 'path';
import spawn from 'cross-spawn';
import npmRunPath from 'npm-run-path';
import TaskConfig from '@skills17/task-config';
import TaskServer from '@skills17/static-task-server';

export default class CommandWrapper {
  private config: TaskConfig;

  private server?: TaskServer;

  constructor(private argv: string[]) {
    this.config = new TaskConfig();
  }

  /**
   * Returns whether the output is json or not
   */
  private isJson(): boolean {
    return this.argv.includes('--json');
  }

  /**
   * Returns whether the cypress output is supressed or not
   */
  private isCypressQuiet(): boolean {
    return this.argv.includes('--quiet') || this.argv.includes('-q');
  }

  /**
   * Returns whether the current command is a help command or not
   */
  private isHelpCommand(): boolean {
    return this.argv.includes('--help') || this.argv.includes('-h');
  }

  /**
   * Builds arguments that will be passed to the cypress command
   */
  private buildCypressArgs(): string[] {
    const args = [...this.argv.filter((arg) => arg !== '--json')];

    // set base url
    if (this.server && args.length > 0) {
      args.push('--config');
      args.push(`baseUrl=${this.server.getHost()}`);
    }

    // add custom reporter
    if (
      !args.includes('--reporter') &&
      !args.includes('-r') &&
      args.length > 0 &&
      args[0].trim() !== 'open'
    ) {
      args.push('--reporter');
      args.push(
        path.resolve(
          __dirname,
          'Reporters',
          this.isJson() ? 'JsonReporter.js' : 'ConsoleReporter.js',
        ),
      );
    }

    return args;
  }

  /**
   * Run cypress
   */
  private runCypress(): Promise<number> {
    return new Promise((resolve) => {
      // execute cypress
      const cypress = spawn('cypress', this.buildCypressArgs(), {
        cwd: this.config.getProjectRoot(),
        env: {
          FORCE_COLOR: '1',
          CYPRESS_QUIET: this.isCypressQuiet() ? '1' : '0',
          ...npmRunPath.env(process.env),
        },
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
    if (this.config.getServe().enabled && !this.isHelpCommand()) {
      this.server = new TaskServer(this.config);
      await this.server.serve(!this.isJson());
      console.log(); // eslint-disable-line no-console
    }

    // run cypress
    const exitCode = await this.runCypress();

    if (this.server) {
      await this.server.stop();
    }

    process.exit(exitCode);
  }
}

import ConsoleReporter from './ConsoleReporter';

export default class JsonReporter extends ConsoleReporter {
  public onRunEnd(): void {
    // eslint-disable-next-line no-console
    console.log(JSON.stringify(this.getTestRun(), undefined, 2));
  }
}

module.exports = JsonReporter;

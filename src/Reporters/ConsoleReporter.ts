import Mocha from 'mocha'; // eslint-disable-line import/no-extraneous-dependencies
import TaskConfig from '@skills17/task-config';
import TestResultPrinter from '@skills17/test-result-printer';
import { TestRun } from '@skills17/test-result';

const { EVENT_TEST_END } = Mocha.Runner.constants;

export default class ConsoleReporter {
  private static testRun: TestRun;

  private static displayPoints = true;

  constructor(runner: Mocha.Runner) {
    // cypress starts a completely new test run per spec file.
    // so we have to store the test run in a static variable and listen on the `beforeExit` event
    // of the process to output the result before the process finishes.
    if (!ConsoleReporter.testRun) {
      const config = new TaskConfig();
      config.loadFromFileSync();
      ConsoleReporter.testRun = config.createTestRun();
      ConsoleReporter.displayPoints = config.arePointsDisplayed();

      process.on('exit', this.onRunEnd.bind(this));
    }

    runner.on(EVENT_TEST_END, this.onTestEnd.bind(this));
  }

  // eslint-disable-next-line class-methods-use-this
  public getTestRun(): TestRun {
    return ConsoleReporter.testRun;
  }

  public onTestEnd(test: Mocha.Test): void {
    const titlePath = test.titlePath();
    const titlePathWithoutExtra = titlePath.filter(
      (title) => title !== 'extra' && title !== 'Extra',
    );

    this.getTestRun().recordTest(
      titlePathWithoutExtra.join(' > '),
      titlePathWithoutExtra.slice(1).join(' > '),
      titlePath.includes('extra') || titlePath.includes('Extra'),
      test.isPassed(),
    );
  }

  public onRunEnd(): void {
    const printer = new TestResultPrinter(this.getTestRun());
    console.log(); // eslint-disable-line no-console
    printer.print({
      printFooter: process.env.CYPRESS_QUIET !== '1',
      printPoints: ConsoleReporter.displayPoints,
    });
  }
}

module.exports = ConsoleReporter;

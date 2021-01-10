import Mocha from 'mocha'; // eslint-disable-line import/no-extraneous-dependencies
import TaskConfig from '@skills17/task-config';
import TestResultPrinter from '@skills17/test-result-printer';
import { TestRun } from '@skills17/test-result'; // eslint-disable-line import/no-extraneous-dependencies

const { EVENT_RUN_BEGIN, EVENT_RUN_END, EVENT_TEST_END } = Mocha.Runner.constants;

export default class ConsoleReporter {
  protected testRun?: TestRun;

  constructor(runner: Mocha.Runner) {
    const config = new TaskConfig();
    config.loadFromFileSync();

    runner
      .once(EVENT_RUN_BEGIN, () => {
        this.testRun = config.createTestRun();
      })
      .on(EVENT_TEST_END, this.onTestEnd.bind(this))
      .on(EVENT_RUN_END, this.onRunEnd.bind(this));
  }

  public onTestEnd(test: Mocha.Test): void {
    this.testRun?.recordTest(test.titlePath().join(' > '), false, test.isPassed());
  }

  public onRunEnd(): void {
    const printer = new TestResultPrinter(this.testRun as TestRun);
    printer.print({ printFooter: false });
  }
}

module.exports = ConsoleReporter;

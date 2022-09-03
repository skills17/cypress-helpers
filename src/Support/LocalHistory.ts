// once all tests have been executed, save the result to a history file
// eslint-disable-next-line
// @ts-ignore
after(() => {
  if (Cypress.env('LOCAL_HISTORY') !== 1) {
    return;
  }

  // collect all executed tests
  const tests: [string, string, boolean, boolean][] = [];
  const runnable = (cy as any).state('runnable') as Mocha.Test; // eslint-disable-line

  const processSuite = (suite: Mocha.Suite) => {
    // add all tests from this suite
    if (suite.tests && suite.tests.length > 0) {
      suite.tests.forEach((test) => {
        const titlePath = test.titlePath();
        const titlePathWithoutExtra = titlePath.filter(
          (title) => title !== 'extra' && title !== 'Extra',
        );

        tests.push([
          titlePathWithoutExtra.join(' > '),
          titlePathWithoutExtra.slice(1).join(' > '),
          titlePath.includes('extra') || titlePath.includes('Extra'),
          test.isPassed(),
        ]);
      });
    }

    // process nested suites
    if (suite.suites && suite.suites.length > 0) {
      suite.suites.forEach(processSuite);
    }
  };

  runnable.parent?.suites.forEach(processSuite);

  // store the results
  cy.task('storeLocalHistory', tests, { log: false });
});

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
  runnable.parent?.suites.forEach((suite) => {
    suite.tests.forEach((test) => {
      const titlePath = test.titlePath();
      tests.push([
        titlePath.filter((title) => title !== 'extra' && title !== 'Extra').join(' > '),
        test.title,
        titlePath.includes('extra') || titlePath.includes('Extra'),
        test.isPassed(),
      ]);
    });
  });

  // store the results
  cy.task('storeLocalHistory', tests, { log: false });
});

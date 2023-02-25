context('Timezone', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('from args', () => {
    cy.get('.time').should(
      'have.text',
      'Fri Oct 01 2021 03:35:01 GMT-0700 (Pacific Daylight Time)',
    );
  });
});

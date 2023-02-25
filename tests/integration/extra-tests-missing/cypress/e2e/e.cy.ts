context('E', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  /**
   * This test does not have an extra test and should trigger a warning.
   */
  it('Foo', () => {
    cy.get('h1').should('have.text', 'Extra Tests Missing');
  });

  it('Bar', () => {
    cy.get('h1').should('have.text', 'fail');
  });
});

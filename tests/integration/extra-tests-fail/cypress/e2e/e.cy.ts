context('E', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  /**
   * The extra test for this one fails and should trigger a warning.
   */
  it('Foo', () => {
    cy.get('h1').should('have.text', 'Extra Tests Fail');
  });

  it('Bar', () => {
    cy.get('h1').should('have.text', 'Extra Tests Fail');
  });
});

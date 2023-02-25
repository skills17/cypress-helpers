/**
 * Group F
 * Should result in 2/2
 */
context('F', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Foo', () => {
    cy.get('h1').should('have.text', 'Strategy Deduct');
  });

  it('Bar', () => {
    cy.get('h1').should('have.text', 'Strategy Deduct');
  });
});

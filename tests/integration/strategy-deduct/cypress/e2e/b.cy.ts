/**
 * Group B
 * Should result in 1/2 as BBar deducts 1 point and max is set to 2
 */
context('B', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Foo', () => {
    cy.get('h1').should('have.text', 'Strategy Deduct');
  });

  it('Bar', () => {
    cy.get('h1').should('have.text', 'fail');
  });

  it('Baz', () => {
    cy.get('h1').should('have.text', 'Strategy Deduct');
  });
});

/**
 * Group A
 * Should result in 2/3 as ABar deducts 1 point
 */
context('A', () => {
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

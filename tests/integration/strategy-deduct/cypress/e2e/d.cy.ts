/**
 * Group D
 * Should result in 1/1.5 as default points is 0.5
 */
context('D', () => {
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

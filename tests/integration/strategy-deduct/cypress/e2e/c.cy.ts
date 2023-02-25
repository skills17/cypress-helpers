/**
 * Group C
 * Should result in 0/2 as a value below 0 is not possible
 */
context('C', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Foo', () => {
    cy.get('h1').should('have.text', 'fail');
  });

  it('Bar', () => {
    cy.get('h1').should('have.text', 'fail');
  });

  it('Baz', () => {
    cy.get('h1').should('have.text', 'fail');
  });
});

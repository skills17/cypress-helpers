/**
 * Group E
 * Should result in 0.5/2 as one test deducts more points
 */
context('E', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Foo', () => {
    cy.get('h1').should('have.text', 'Strategy Deduct');
  });

  it('MorePoints', () => {
    cy.get('h1').should('have.text', 'fail');
  });

  it('Bar', () => {
    cy.get('h1').should('have.text', 'fail');
  });

  it('Baz', () => {
    cy.get('h1').should('have.text', 'Strategy Deduct');
  });
});

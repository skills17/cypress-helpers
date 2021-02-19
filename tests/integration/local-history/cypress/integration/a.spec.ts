context('A', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Foo', () => {
    cy.get('h1').should('have.text', 'Local History');
  });

  it('Bar', () => {
    cy.get('h1').should('have.text', 'fail');
  });
});

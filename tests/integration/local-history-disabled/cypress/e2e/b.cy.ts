context('B', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Foo', () => {
    cy.get('h1').should('have.text', 'Local History Disabled');
  });

  it('Bar', () => {
    cy.get('h1').should('have.text', 'fail');
  });
});

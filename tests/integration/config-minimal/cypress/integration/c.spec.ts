context('C', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Foo', () => {
    cy.get('h1').should('have.text', 'Config Minimal');
  });

  it('Bar', () => {
    cy.get('h1').should('have.text', 'Config Minimal');
  });
});

context('B', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Foo', () => {
    cy.get('h1').should('have.text', 'Config Minimal');
  });

  it('Bar', () => {
    cy.get('h1').should('have.text', 'Config Minimal');
  });

  it('Baz', () => {
    cy.get('h1').should('have.text', 'fail');
  });
});

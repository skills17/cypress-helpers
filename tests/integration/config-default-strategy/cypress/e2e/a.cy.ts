context('A', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Foo', () => {
    cy.get('h1').should('have.text', 'Config Default Strategy');
  });

  it('Bar', () => {
    cy.get('h1').should('have.text', 'Config Default Strategy');
  });

  it('Baz', () => {
    cy.get('h1').should('have.text', 'fail');
  });
});

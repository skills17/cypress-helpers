context('B', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Foo', () => {
    cy.get('h1').should('have.text', 'Extra Tests');
  });

  it('Bar', () => {
    cy.get('h1').should('have.text', 'Extra Tests');
  });

  it('Baz', () => {
    cy.get('h1').should('have.text', 'fail');
  });
});

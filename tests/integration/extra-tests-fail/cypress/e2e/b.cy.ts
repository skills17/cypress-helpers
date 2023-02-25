context('B', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Foo', () => {
    cy.get('h1').should('have.text', 'Extra Tests Fail');
  });

  it('Bar', () => {
    cy.get('h1').should('have.text', 'Extra Tests Fail');
  });

  it('Baz', () => {
    cy.get('h1').should('have.text', 'fail');
  });
});

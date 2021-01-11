context('A', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Foo', () => {
    cy.get('h1').should('have.text', 'Extra Tests Missing');
  });
});

context('B', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Foo', () => {
    cy.get('h1').should('have.text', 'Ungrouped Tests');
  });

  it('Bar', () => {
    cy.get('h1').should('have.text', 'Ungrouped Tests');
  });
});

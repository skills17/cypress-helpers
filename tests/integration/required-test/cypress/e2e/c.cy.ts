context('C', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Foo', () => {
    cy.get('h1').should('have.text', 'Required Test');
  });

  it('Required', () => {
    cy.get('h1').should('have.text', 'Required Test');
  });
});

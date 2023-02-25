context('Sets Base Url', () => {
  beforeEach(() => {
    cy.visit('/src');
  });

  it('automatically sets the correct base url', () => {
    cy.get('h1').should('have.text', 'Sets Base Url');
    cy.url().should('equal', 'http://localhost:4321/src/');
  });
});

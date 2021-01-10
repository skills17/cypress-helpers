context('Basic Functionality', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('serves the html file', () => {
    cy.get('h1').should('have.text', 'Basic Functionality');
  });
});

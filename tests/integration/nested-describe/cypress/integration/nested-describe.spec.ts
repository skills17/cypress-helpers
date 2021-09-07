context('Nested Describe', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  describe('describe 1', () => {
    it('serves the html file', () => {
      cy.get('h1').should('have.text', 'Nested Describe');
    });
  });

  describe('describe 2', () => {
    it('serves the html file', () => {
      cy.get('h1').should('have.text', 'Nested Describe');
    });
  });
});

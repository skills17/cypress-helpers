context('extra', () => {
  context('E', () => {
    beforeEach(() => {
      cy.visit('/');
    });

    it('Bar', () => {
      cy.get('h1').should('have.text', 'Extra Tests Missing');
    });
  });
});

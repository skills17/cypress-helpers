context('extra', () => {
  context('E', () => {
    beforeEach(() => {
      cy.visit('/');
    });

    it('Foo', () => {
      cy.get('h1').should('have.text', 'Main Tests Missing');
    });

    it('Bar', () => {
      cy.get('h1').should('have.text', 'Main Tests Missing');
    });
  });
});

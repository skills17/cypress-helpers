context('Extra', () => {
  context('C', () => {
    beforeEach(() => {
      cy.visit('/');
    });

    it('Foo', () => {
      cy.get('h1').should('have.text', 'Main Tests Missing');
    });

    /**
     * This test does not have a main test and should trigger a warning.
     */
    it('Bar', () => {
      cy.get('h1').should('have.text', 'Main Tests Missing');
    });
  });
});

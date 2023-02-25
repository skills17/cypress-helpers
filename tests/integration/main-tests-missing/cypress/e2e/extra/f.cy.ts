context('extra', () => {
  context('F', () => {
    beforeEach(() => {
      cy.visit('/');
    });

    it('Foo', () => {
      cy.get('h1').should('have.text', 'Main Tests Missing');
    });

    it('Bar', () => {
      cy.get('h1').should('have.text', 'fail');
    });
  });
});

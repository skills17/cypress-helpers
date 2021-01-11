context('Extra', () => {
  context('C', () => {
    beforeEach(() => {
      cy.visit('/');
    });

    it('Foo', () => {
      cy.get('h1').should('have.text', 'Extra Tests Fail');
    });

    it('Bar', () => {
      cy.get('h1').should('have.text', 'Extra Tests Fail');
    });
  });
});

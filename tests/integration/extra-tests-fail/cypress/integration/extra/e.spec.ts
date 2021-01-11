context('extra', () => {
  context('E', () => {
    beforeEach(() => {
      cy.visit('/');
    });

    it('Foo', () => {
      cy.get('h1').should('have.text', 'fail');
    });

    it('Bar', () => {
      cy.get('h1').should('have.text', 'Extra Tests Fail');
    });
  });
});

context('C', () => {
  context('D', () => {
    beforeEach(() => {
      cy.visit('/');
    });

    it('Foo', () => {
      cy.get('h1').should('have.text', 'Nested Context');
    });
  });
});

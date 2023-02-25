context('extra', () => {
  context('B', () => {
    beforeEach(() => {
      cy.visit('/');
    });

    it('Foo', () => {
      cy.get('h1').should('have.text', 'Main Tests Missing');
    });

    it('Bar', () => {
      cy.get('h1').should('have.text', 'Main Tests Missing');
    });

    it('Baz', () => {
      cy.get('h1').should('have.text', 'fail');
    });
  });
});

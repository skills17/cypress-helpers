context('extra', () => {
  context('E', () => {
    beforeEach(() => {
      cy.visit('/');
    });

    it('Foo', () => {
      cy.get('h1').should('have.text', 'Extra Tests Strategy Deduct');
    });

    it('MorePoints', () => {
      cy.get('h1').should('have.text', 'Extra Tests Strategy Deduct');
    });

    it('Bar', () => {
      cy.get('h1').should('have.text', 'Extra Tests Strategy Deduct');
    });

    it('Baz', () => {
      cy.get('h1').should('have.text', 'Extra Tests Strategy Deduct');
    });
  });
});

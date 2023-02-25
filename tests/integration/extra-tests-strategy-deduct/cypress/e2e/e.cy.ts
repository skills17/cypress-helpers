context('E', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Foo', () => {
    cy.get('h1').should('have.text', 'Extra Tests Strategy Deduct');
  });

  it('MorePoints', () => {
    cy.get('h1').should('have.text', 'fail');
  });

  it('Bar', () => {
    cy.get('h1').should('have.text', 'fail');
  });

  it('Baz', () => {
    cy.get('h1').should('have.text', 'Extra Tests Strategy Deduct');
  });
});

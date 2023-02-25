context('D', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Foo', () => {
    cy.get('h1').should('have.text', 'Config Default Points');
  });

  it('MorePoints', () => {
    cy.get('h1').should('have.text', 'Config Default Points');
  });

  it('Baz', () => {
    cy.get('h1').should('have.text', 'fail');
  });
});

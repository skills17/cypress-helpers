context('B', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Foo', () => {
    cy.get('h1').should('have.text', 'Required Test');
  });

  it('Bar', () => {
    cy.get('h1').should('have.text', 'Required Test');
  });

  // Because this test fails and is required, group B should award 0 points
  it('Required', () => {
    cy.get('h1').should('have.text', 'fail');
  });
});

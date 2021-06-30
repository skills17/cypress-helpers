context('Timezone', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('from env not overridden', () => {
    cy.get('.time').should(
      'have.text',
      'Fri Oct 01 2021 10:35:01 GMT+0000 (Coordinated Universal Time)',
    );
  });
});

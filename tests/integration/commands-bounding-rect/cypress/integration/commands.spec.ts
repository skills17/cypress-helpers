// eslint-disable-next-line
/// <reference path="../../../../../commands.d.ts" />

context('Commands', () => {
  context('Bounding Rect', () => {
    beforeEach(() => {
      cy.visit('/');
    });

    it('returns the correct width', () => {
      cy.get('.box').width().should('equal', 300);
    });

    it('returns the correct height', () => {
      cy.get('.box').height().should('equal', 150);
    });

    it('returns the correct left position', () => {
      cy.get('.box').left().should('equal', 30);
    });

    it('returns the correct top position', () => {
      cy.get('.box').top().should('equal', 100);
    });

    it('returns the correct right position', () => {
      cy.get('.box').right().should('equal', 330);
    });

    it('returns the correct bottom position', () => {
      cy.get('.box').bottom().should('equal', 250);
    });
  });
});

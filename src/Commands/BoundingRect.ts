Cypress.Commands.add('width', { prevSubject: true }, (subject) => {
  return subject[0].getBoundingClientRect().width;
});

Cypress.Commands.add('height', { prevSubject: true }, (subject) => {
  return subject[0].getBoundingClientRect().height;
});

Cypress.Commands.add('top', { prevSubject: true }, (subject) => {
  return subject[0].getBoundingClientRect().top;
});

Cypress.Commands.add('left', { prevSubject: true }, (subject) => {
  return subject[0].getBoundingClientRect().left;
});

Cypress.Commands.add('bottom', { prevSubject: true }, (subject) => {
  return subject[0].getBoundingClientRect().bottom;
});

Cypress.Commands.add('right', { prevSubject: true }, (subject) => {
  return subject[0].getBoundingClientRect().right;
});

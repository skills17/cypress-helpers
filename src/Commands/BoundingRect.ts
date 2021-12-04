/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore published types for custom commands are wrong
Cypress.Commands.add('width', { prevSubject: true }, (subject) => {
  return subject[0].getBoundingClientRect().width;
});

// @ts-ignore published types for custom commands are wrong
Cypress.Commands.add('height', { prevSubject: true }, (subject) => {
  return subject[0].getBoundingClientRect().height;
});

// @ts-ignore published types for custom commands are wrong
Cypress.Commands.add('top', { prevSubject: true }, (subject) => {
  return subject[0].getBoundingClientRect().top;
});

// @ts-ignore published types for custom commands are wrong
Cypress.Commands.add('left', { prevSubject: true }, (subject) => {
  return subject[0].getBoundingClientRect().left;
});

// @ts-ignore published types for custom commands are wrong
Cypress.Commands.add('bottom', { prevSubject: true }, (subject) => {
  return subject[0].getBoundingClientRect().bottom;
});

// @ts-ignore published types for custom commands are wrong
Cypress.Commands.add('right', { prevSubject: true }, (subject) => {
  return subject[0].getBoundingClientRect().right;
});

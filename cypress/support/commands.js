// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login', () => {
  cy.visit('https://www.demoblaze.com/');
  cy.get('#login2').click();
  cy.fixture('user_data.json').then((user) => {
    cy.get('#logInModal').should('be.visible');
    cy.wait(1000); 
    cy.get('#loginusername').type(user.username);
    cy.get('#loginpassword').type(user.password);
  });
  cy.get('button[onclick="logIn()"]').click();
});
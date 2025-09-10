// fail_test.cy.js

describe('Teste que deve falhar', () => {
  it('deve verificar o texto que está incorreto', () => {
    cy.visit('https://www.demoblaze.com/');
    cy.get('h1.navbar-brand').should('contain.text', 'Texto Incorreto');
  });
});
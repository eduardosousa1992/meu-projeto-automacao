// login.cy.js

describe('Fluxo de login no Demoblaze', () => {

  it('deve fazer login com um usuário válido', () => {
    cy.task('log', 'Iniciando o teste de login...');

    // Chama o comando reutilizável
    cy.login();

    cy.task('log', 'Verificando se o login foi bem-sucedido.');
    cy.get('#nameofuser').should('be.visible').and('contain.text', 'Welcome eduardo_teste');

    cy.task('log', 'Teste de login concluído com sucesso!');
  });

});
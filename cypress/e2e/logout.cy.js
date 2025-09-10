// logout.cy.js

describe('Fluxo de logout do usuário', () => {

  beforeEach(() => {
    cy.task('log', 'Executando o comando de login antes do teste...');
    cy.login();
    cy.get('#nameofuser').should('be.visible'); // Garante que o login foi bem-sucedido
    cy.task('log', 'Login realizado com sucesso.');
  });

  it('deve fazer logout com sucesso', () => {
    
    cy.task('log', 'Passo 1: Clicando em "Log out".');
    cy.get('#logout2').click();

    cy.task('log', 'Passo 2: Verificando se o logout foi bem-sucedido.');
    cy.get('#login2').should('be.visible'); // Verifica se o link "Log in" está visível
    
    cy.task('log', 'Teste de logout concluído com sucesso!');
  });

});
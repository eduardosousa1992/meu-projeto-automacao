// login.cy.js

describe('Fluxo de login no Demoblaze', () => {

  it('deve fazer login com um usuário válido', () => {
    // 1. Acessa a página principal
    cy.log('Navegando para a página de login...');
    cy.visit('https://www.demoblaze.com/');

    // 2. Clica no botão "Log in" para abrir o modal
    cy.log('Clicando no botão "Log in" para abrir o modal...');
    cy.get('#login2').click();

    // 3. Preenche as credenciais e submete o formulário
    cy.log('Preenchendo as credenciais e submetendo o formulário...');
    cy.get('#logInModal').should('be.visible');
    cy.wait(1000); 
    cy.get('#loginusername').type('seu_nome_de_usuario_aqui');
    cy.get('#loginpassword').type('sua_senha_aqui');
    cy.get('button[onclick="logIn()"]').click();

    // 4. Verifica o login bem-sucedido
    cy.log('Verificando se o login foi bem-sucedido...');
    cy.get('#nameofuser').should('be.visible').and('contain.text', 'Welcome seu_nome_de_usuario_aqui');

    cy.log('Teste de login concluído com sucesso!');
  });

});
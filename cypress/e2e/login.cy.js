// login.cy.js

describe('Fluxo de login no Demoblaze', () => {

  it('deve fazer login com um usuário válido', () => {
    
    cy.task('log', 'Iniciando o teste de login...');

    // 1. Acessar a página principal
    cy.task('log', 'Passo 1: Navegando para a página de login.');
    cy.visit('https://www.demoblaze.com/');

    // 2. Clicar no botão "Log in" para abrir o modal
    cy.task('log', 'Passo 2: Clicando no botão "Log in".');
    cy.get('#login2').click();

    // 3. Preencher o nome de usuário no modal
    cy.task('log', 'Passo 3: Preenchendo as credenciais do usuário.');
    cy.get('#logInModal').should('be.visible');
    cy.wait(1000); 
    cy.get('#loginusername').type('eduardo_teste');

    // 4. Preencher a senha
    cy.get('#loginpassword').type('cypress_password');

    // 5. Clicar no botão "Log in" do modal
    cy.task('log', 'Passo 4: Clicando em "Log in" para submeter.');
    cy.get('button[onclick="logIn()"]').click();

    // 6. Verificar se o login foi bem-sucedido
    cy.task('log', 'Passo 5: Validando o login bem-sucedido.');
    cy.get('#nameofuser').should('be.visible').and('contain.text', 'Welcome eduardo_teste');

    cy.task('log', 'Teste de login concluído com sucesso!');
  });

});
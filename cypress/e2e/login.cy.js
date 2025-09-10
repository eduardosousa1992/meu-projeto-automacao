// login.cy.js

describe('Fluxo de login no Demoblaze', () => {

  it('deve fazer login com um usuário válido', () => {
    // 1. Acessar a página principal
    cy.visit('https://www.demoblaze.com/');

    // 2. Clicar no botão "Log in" para abrir o modal de login
    cy.get('#login2').click();

    // 3. Esperar que o modal de login esteja visível
    cy.get('#logInModal').should('be.visible');

    // 4. Adicionar um pequeno atraso para a página carregar
    cy.wait(1000); 

    // 5. Preencher o nome de usuário no modal
    cy.get('#loginusername').type('eduardo_teste');

    // 6. Preencher a senha
    cy.get('#loginpassword').type('cypress_password');

    // 7. Clicar no botão "Log in" do modal
    cy.get('button[onclick="logIn()"]').click();

    // 8. Verificar se o login foi bem-sucedido
    // A verificação é feita checando se o elemento que mostra o nome do usuário está visível
    cy.get('#nameofuser').should('be.visible').and('contain.text', 'Welcome eduardo_teste');
  });

});
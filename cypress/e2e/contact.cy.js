// contact.cy.js

describe('Fluxo do formulário de contato', () => {

  it('deve enviar uma mensagem de contato com sucesso', () => {
    
    cy.task('log', 'Iniciando o teste do formulário de contato...');

    // Acessa a página principal
    cy.task('log', 'Passo 1: Navegando para a página principal.');
    cy.visit('https://www.demoblaze.com/');

    // Clica no link "Contact"
    cy.task('log', 'Passo 2: Clicando em "Contact".');
    cy.get('a[data-target="#exampleModal"]').contains('Contact').click();

    // Preenche o formulário de contato
    cy.task('log', 'Passo 3: Preenchendo o formulário de contato.');
    cy.get('#recipient-email').type('teste@email.com');
    cy.get('#recipient-name').type('Eduardo Contato');
    cy.get('#message-text').type('Esta é uma mensagem de teste automatizada.');

    // Clica em "Send message"
    cy.task('log', 'Passo 4: Clicando em "Send message".');
    cy.get('button').contains('Send message').click();

    // Valida o alerta de sucesso
    cy.task('log', 'Passo 5: Validando o alerta de sucesso.');
    cy.on('window:alert', (text) => {
      expect(text).to.eq('Thanks for the message!!');
    });
    
    cy.task('log', 'Teste do formulário de contato concluído com sucesso!');
  });
});
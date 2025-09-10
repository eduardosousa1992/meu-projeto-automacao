// purchase.cy.js

describe('Fluxo de compra de um produto', () => {
  
  // Antes de cada teste,realiza o login
  beforeEach(() => {
    cy.login();
  });

  it('deve finalizar a compra com sucesso', () => {
    
    cy.task('log', 'Iniciando o teste de compra...');

    // Acessa a página principal e adiciona um item ao carrinho
    cy.task('log', 'Passo 1: Adicionando um produto ao carrinho.');
    cy.visit('https://www.demoblaze.com/');
    cy.get('.list-group-item').contains('Phones').click();
    cy.get('a[class="hrefch"]').contains('Samsung galaxy s6').click();
    cy.get('.btn-success').contains('Add to cart').click();
    cy.on('window:alert', (text) => {
      expect(text).to.eq('Product added');
    });

    // Navega para o carrinho
    cy.task('log', 'Passo 2: Navegando para a página do carrinho.');
    cy.get('#cartur').click();

    // Clica no botão "Place Order"
    cy.task('log', 'Passo 3: Clicando em "Place Order".');
    cy.get('.btn-success').contains('Place Order').click();

    // Preenche o formulário de compra
    cy.task('log', 'Passo 4: Preenchendo os dados do formulário.');
    cy.get('#name').type('Eduardo Sousa');
    cy.get('#country').type('Brazil');
    cy.get('#city').type('Sao Paulo');
    cy.get('#card').type('1234567890123456');
    cy.get('#month').type('12');
    cy.get('#year').type('2025');

    // Clica no botão "Purchase"
    cy.task('log', 'Passo 5: Clicando em "Purchase".');
    cy.get('button').contains('Purchase').click();

    // Valida a mensagem de sucesso
    cy.task('log', 'Passo 6: Verificando a mensagem de sucesso e o ID da compra.');
    cy.get('h2').should('be.visible').and('contain.text', 'Thank you for your purchase!');
    cy.contains('Id:').should('be.visible');

    // Clica em "OK" para fechar o modal de sucesso
    cy.task('log', 'Passo 7: Fechando o modal de sucesso.');
    cy.get('.confirm').contains('OK').click();
    
    cy.task('log', 'Teste de compra concluído com sucesso!');
  });
});
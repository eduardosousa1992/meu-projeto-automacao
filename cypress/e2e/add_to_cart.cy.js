// add_to_cart.cy.js

describe('Fluxo de adicionar um produto ao carrinho', () => {

  // Antes de cada teste, vamos fazer o login
  beforeEach(() => {
    cy.login();
  });

  it('deve adicionar um telefone ao carrinho com sucesso', () => {
    
    cy.task('log', 'Iniciando o teste de adicionar ao carrinho...');

    // Acessa a página principal
    cy.task('log', 'Passo 1: Navegando para a página principal.');
    cy.visit('https://www.demoblaze.com/');

    // Clica na categoria "Phones"
    cy.task('log', 'Passo 2: Clicando na categoria "Phones".');
    cy.get('.list-group-item').contains('Phones').click();

    // Clica no primeiro produto da lista (por exemplo, "Samsung galaxy s6")
    cy.task('log', 'Passo 3: Selecionando o "Samsung galaxy s6".');
    cy.get('a[class="hrefch"]').contains('Samsung galaxy s6').click();

    // Clica no botão "Add to cart"
    cy.task('log', 'Passo 4: Clicando no botão "Add to cart".');
    cy.get('.btn-success').contains('Add to cart').click();

    // Valida o alerta de sucesso
    cy.task('log', 'Passo 5: Validando o alerta de sucesso.');
    cy.on('window:alert', (text) => {
      expect(text).to.eq('Product added');
    });

    cy.task('log', 'Teste de adicionar ao carrinho concluído com sucesso!');
  });
});
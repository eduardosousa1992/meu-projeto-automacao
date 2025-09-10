const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implementa listeners de eventos Node.js aqui
      on('task', {
        log(message) {
          console.log(message);
          return null; // O Cypress exige que um valor nulo seja retornado
        }
      });
    },
  },
});
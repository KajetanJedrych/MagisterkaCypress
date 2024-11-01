const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Optionally configure more plugins here
    },
    baseUrl: 'https://the-internet.herokuapp.com',
    chromeWebSecurity: false
  },
  browser: 'chrome', // default browser
  retries: {
    runMode: 2, // retry twice in CI mode
    openMode: 0 // no retries locally
  }
});
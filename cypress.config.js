const { defineConfig } = require('cypress');
const { downloadFile } = require('cypress-downloadfile');


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Register the downloadFile task
      on('task', {
        downloadFile: downloadFile,
      });
      return config;
    },
    baseUrl: 'https://the-internet.herokuapp.com',
    chromeWebSecurity: false
  },
  browser: 'chrome', // default browser
  retries: {
    runMode: 2, // retry twice in CI mode
    openMode: 0 // no retries locally
  },
});
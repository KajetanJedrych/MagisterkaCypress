const { defineConfig } = require('cypress');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implement download task
      on('task', {
        async downloadFile({ url, directory, filename }) {
          try {
            const response = await axios({
              method: 'get',
              url: url,
              responseType: 'stream'
            });

            // Ensure directory exists
            if (!fs.existsSync(directory)) {
              fs.mkdirSync(directory, { recursive: true });
            }

            const filePath = path.join(directory, filename);
            const writer = fs.createWriteStream(filePath);

            response.data.pipe(writer);

            return new Promise((resolve, reject) => {
              writer.on('finish', () => resolve(filePath));
              writer.on('error', (err) => reject(err));
            });
          } catch (error) {
            throw new Error(`Failed to download file: ${error.message}`);
          }
        }
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
// Custom login command
Cypress.Commands.add('login', (username, password) => {
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
});

// Import necessary plugins
import 'cypress-file-upload';
import 'cypress-xpath';
import '@4tw/cypress-drag-drop';

// For file download
const axios = require('axios');
const fs = require('fs');
const path = require('path');
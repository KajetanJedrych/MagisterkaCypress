class LoginPage {
    navigate() {
        cy.visit('/login');
    }

    enterUsername(username) {
        cy.get('input[name="username"]').type(username);
    }

    enterPassword(password) {
        cy.get('input[name="password"]').type(password);
    }

    submit() {
        cy.get('button[type="submit"]').click();
    }

    getSuccessMessage() {
        return cy.get('.flash.success');
    }

    getErrorMessage() {
        return cy.get('.flash.error');
    }
}

export default new LoginPage();

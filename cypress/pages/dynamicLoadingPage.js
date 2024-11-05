class DynamicLoadingPage {
    navigate() {
        cy.visit('/dynamic_loading/2');
    }

    startLoading() {
        cy.get('#start button').click();
    }

    getLoadedMessage() {
        cy.get('#finish', { timeout: 10000 }).should('be.visible');
        return cy.get('#finish');
    }
}

export default new DynamicLoadingPage();

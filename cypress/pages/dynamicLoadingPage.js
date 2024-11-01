class DynamicLoadingPage {
    navigate() {
        cy.visit('/dynamic_loading/2');
    }

    startLoading() {
        cy.get('#start button').click();
    }

    getLoadedMessage() {
        cy.get('#finish h4').should('be.visible');
        return cy.get('#finish h4');
    }
}

export default new DynamicLoadingPage();

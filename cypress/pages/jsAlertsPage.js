class JSAlertsPage {
    navigate() {
        cy.visit('/javascript_alerts');
    }

    triggerAlert() {
        cy.contains('button', 'Click for JS Alert').click();
    }

    triggerConfirm() {
        cy.contains('button', 'Click for JS Confirm').click();
    }

    triggerPrompt(promptText) {
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns(promptText);
            cy.contains('button', 'Click for JS Prompt').click();
        });
    }

    getResultText() {
        return cy.get('#result');
    }
}

export default new JSAlertsPage();

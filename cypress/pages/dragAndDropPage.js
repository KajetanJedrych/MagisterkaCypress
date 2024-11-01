class DragAndDropPage {
    navigate() {
        cy.visit('/drag_and_drop');
    }

    dragElementAToElementB() {
        cy.get('#column-a').drag('#column-b');
    }

    getColumnText(columnId) {
        return cy.get(columnId).invoke('text');
    }
}

export default new DragAndDropPage();

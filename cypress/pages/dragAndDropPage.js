class DragAndDropPage {
    navigate() {
        cy.visit('/drag_and_drop');
    }

    dragElementAToElementB() {
        // Use force to ensure dragging works
        cy.get('#column-a').trigger('mousedown', { which: 1 })
          .get('#column-b')
          .trigger('mousemove')
          .trigger('mouseup', { force: true });
    }

    getColumnText(columnId) {
        return cy.get(columnId).invoke('text');
    }
}

export default new DragAndDropPage();
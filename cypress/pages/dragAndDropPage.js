class DragAndDropPage {
    constructor() {
        this.columnA = '#column-a';
        this.columnB = '#column-b';
        this.dragAndDropLink = 'a[href="/drag_and_drop"]';
    }

    navigate() {
        cy.visit('https://the-internet.herokuapp.com/');
    }

    goToDragAndDrop() {
        cy.get(this.dragAndDropLink).click();
    }

    dragElementAToElementB() {
        cy.get(this.columnA)
            .trigger('mousedown', { which: 1 })
            .trigger('dragstart', { dataTransfer: new DataTransfer() }) // Start dragging
            .wait(500) // Simulate user holding the drag
            .trigger('mousemove', { pageX: 250, pageY: 200 }) // Move towards target
            .wait(500)
            .get(this.columnB)
            .trigger('dragover', { dataTransfer: new DataTransfer() }) // Hover over target
            .wait(500)
            .trigger('drop', { dataTransfer: new DataTransfer() }) // Drop into place
            .wait(500)
            .trigger('dragend'); // Ensure drag sequence completes
    }

    getColumnText(columnId) {
        return cy.get(columnId).invoke('text');
    }
}

export default new DragAndDropPage();
import '@4tw/cypress-drag-drop';

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
        cy.get(this.columnA).drag(this.columnB);
    }

    getColumnText(columnId) {
        return cy.get(columnId).invoke('text');
    }
}

export default new DragAndDropPage();

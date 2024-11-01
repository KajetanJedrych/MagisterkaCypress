class DownloadPage {
    navigate() {
        cy.visit('/download');
    }

    downloadFile(fileName) {
        cy.contains(fileName).click();
    }
}

export default new DownloadPage();

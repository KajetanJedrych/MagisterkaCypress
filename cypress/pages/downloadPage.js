class DownloadPage {
    constructor() {
        this.fileDownloadLink = 'a[href="download/webdriverIO.png"]';
        this.fileDownloadMenu = 'a[href="/download"]';
    }

    navigate() {
        cy.visit('https://the-internet.herokuapp.com/');
    }

    goToFileDownload() {
        cy.get(this.fileDownloadMenu).click();
    }

    downloadFile() {
        cy.get(this.fileDownloadLink).click();
    }
}

export default new DownloadPage();

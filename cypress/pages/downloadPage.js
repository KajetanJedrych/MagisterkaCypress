export class DownloadPage {
    fileDownloadLink = '//*[@id="content"]/ul/li[17]/a';
    downloadFileLink = '.example a[href="download/webdriverIO.png"]';

    navigate() {
        cy.visit('https://the-internet.herokuapp.com/');
    }

    goToFileDownload() {
        cy.xpath(this.fileDownloadLink).click();
    }

    downloadFile(fileName) {
        const downloadUrl = `https://the-internet.herokuapp.com/download/${fileName}`;
        cy.task('downloadFile', { url: downloadUrl, directory: 'cypress/downloads', filename: fileName });
    }
}
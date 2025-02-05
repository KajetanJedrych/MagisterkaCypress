class FileUploadPage {
    static navigate() {
        cy.visit('/');
    }

    static goToFileUpload() {
        cy.contains('File Upload').click();
    }

    static uploadFile(filePath) {
        cy.get('input#file-upload').attachFile(filePath);
        cy.get('input#file-submit').click();
    }

    static getUploadMessage() {
        return cy.get('h3').invoke('text');
    }
}

export default FileUploadPage;
class FileUploadPage {
    navigate() {
        cy.visit('/upload');
    }

    uploadFile(fileName) {
        cy.get('input[type="file"]').attachFile(fileName);
    }

    getUploadMessage() {
        return cy.get('#uploaded-files');
    }
}

export default new FileUploadPage();

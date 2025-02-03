import 'cypress-file-upload';

class FileUploadPage {
    static fileUploadLink = 'text=File Upload';
    static chooseFileInput = 'input#file-upload'; // File input field
    static uploadButton = 'input#file-submit'; // Upload button
    static uploadMessage = 'h3'; // Success message

    static navigate() {
        cy.visit('https://the-internet.herokuapp.com/');
    }

    static goToFileUpload() {
        cy.contains('File Upload').click();
    }

    static uploadFile(filePath) {
        // Requires cypress-file-upload plugin
        cy.get(this.chooseFileInput).attachFile(filePath);
        cy.get(this.uploadButton).click();
    }

    static getUploadMessage() {
        return cy.get(this.uploadMessage).invoke('text');
    }

}
export default new FileUploadPage();

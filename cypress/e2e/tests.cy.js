import loginPage from '../pages/loginPage';
import dynamicLoadingPage from '../pages/dynamicLoadingPage';
import FileUploadPage from '../pages/fileUploadPage';
import jsAlertsPage from '../pages/jsAlertsPage';
import dragAndDropPage from '../pages/dragAndDropPage';
import DownloadPage from '../pages/downloadPage';
import credentials from '../fixtures/credentials.json';

describe('UI Tests', () => {
    describe('Login Page Tests', () => {
        beforeEach(() => {
            loginPage.navigate();
        });

        it('Should log in with valid credentials', () => {
            cy.login(credentials.validUsername, credentials.validPassword);
            loginPage.getSuccessMessage().should('contain', 'You logged into a secure area!');
        });

        it('Should show an error for invalid login', () => {
            cy.login(credentials.invalidUsername, credentials.invalidPassword);
            loginPage.getErrorMessage().should('contain', 'Your username is invalid!');
        });
    });

    describe('Dynamic Loading Tests', () => {
        it('Should load dynamic content', () => {
            dynamicLoadingPage.navigate();
            dynamicLoadingPage.startLoading();
            dynamicLoadingPage.getLoadedMessage().should('contain', 'Hello World!');
        });
    });

    describe('File Upload Tests', () => {
        it('Should upload a file', () => {
            FileUploadPage.navigate();
            FileUploadPage.goToFileUpload();
            FileUploadPage.uploadFile('sampleFile.txt');
            FileUploadPage.getUploadMessage().should('contain', 'File Uploaded!');
        });
    });

    describe('JavaScript Alerts Tests', () => {
        beforeEach(() => {
            jsAlertsPage.navigate();
        });

        it('Should handle JS alert', () => {
            cy.on('window:alert', (str) => {
                expect(str).to.equal('I am a JS Alert');
            });
            jsAlertsPage.triggerAlert();
        });

        it('Should handle JS confirm alert', () => {
            cy.on('window:confirm', () => true);
            jsAlertsPage.triggerConfirm();
            jsAlertsPage.getResultText().should('contain', 'You clicked: Ok');
        });

        it('Should handle JS prompt', () => {
            const promptText = 'Test Prompt';
            jsAlertsPage.triggerPrompt(promptText);
            jsAlertsPage.getResultText().should('contain', `You entered: ${promptText}`);
        });
    });

    describe('Drag and Drop Tests', () => {
        it('Should drag element A to element B', () => {
            dragAndDropPage.navigate();
            dragAndDropPage.getColumnText('#column-a').then((textA) => {
                dragAndDropPage.getColumnText('#column-b').then((textB) => {
                    dragAndDropPage.dragElementAToElementB();
                    dragAndDropPage.getColumnText('#column-a').should('equal', textB);
                    dragAndDropPage.getColumnText('#column-b').should('equal', textA);
                });
            });
        });
    });

    describe('File Download Tests', () => {
        const fileName = 'webdriverIO.png';
    
        it('Test Case 6.1 – Pobieranie pliku', () => {
            DownloadPage.navigate();
            DownloadPage.goToFileDownload();
            DownloadPage.downloadFile(fileName);
    
            const filePath = `cypress/downloads/${fileName}`;
            cy.readFile(filePath).should('exist');
            cy.readFile(filePath).should('not.be.empty');
        });
    });
});

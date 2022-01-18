import LoginPage from '../pages/LoginPage.po'    

describe ('Login testing', () => {
    //Tests for Desktop resolution
    context('Desktop resolution', () => {
        beforeEach(() => {
            cy.viewport(1920, 1080)
            LoginPage.goToPage()
        })
        //positive test
        it ('login test with valid input data', () => {
            LoginPage.inputCredentials()   
        });

        //negative tests
        it ('login tests with invalid input data', () => {
            LoginPage.inputWrongCredentials()
        });
    })
     
    // Tests for Tablet resolution
    context ('Tablet resolution', () => {
        beforeEach(() => {
            cy.viewport(1024, 768)
            LoginPage.goToPage()
        })
        //positive test
        it ('login test with valid input data', () => {
            LoginPage.inputCredentials()
        });

        //negative tests
        it ('login tests with invalid input data', () => {
            LoginPage.inputWrongCredentials()
        })
    })

    //Tests for Mobile resolution
    context ('Mobile resolution', () => {
        beforeEach(() => {
            cy.viewport(414, 896)
            LoginPage.goToPage()
        })
        //positive test
        it ('login test with valid input data', () => {
            LoginPage.inputCredentials()
        });

        //negative tests
        it ('login tests with invalid input data', () => {
            LoginPage.inputWrongCredentials()
        })
    })

});
let baseURL = 'https://opensource-demo.orangehrmlive.com/'
let userName = '#txtUsername'
let password = '#txtPassword'
let wrongPass = 'admin1234'
let loginButton = '#btnLogin'
let errorMessage = '#spanMessage'
let randomEmail = require('random-email')

class LoginPage {

    static goToPage(){
        cy.visit(baseURL)
    }

    //Function for success case
    static inputCredentials() {
        //correct user credentials from JSON file
        cy.fixture('users').then(users => {
           cy.get(userName).type(users.login)
           cy.get(password).type(users.Pass) 
        })
        cy.get(loginButton).click()
        cy.get(errorMessage)
            .should('not.exist')
    }

    //Function for negative cases
    static inputWrongCredentials() {
        cy.get(loginButton).click()
        cy.get(errorMessage)
            .should('contain', 'Username cannot be empty')
        //Using random-email library    
        cy.get(userName).type(randomEmail())
        cy.get(password).type(wrongPass)
        cy.get(loginButton).click()
        cy.get(errorMessage)
            .should('exist')
    }
}
export default LoginPage
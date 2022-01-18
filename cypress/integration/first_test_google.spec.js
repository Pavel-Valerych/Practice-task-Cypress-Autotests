describe ('Testing something in Google', () => {
    // search for something
    it ('I can search something', () => {
        cy.visit('https://google.com');
        cy.get("input[title='Пошук']").type('first auto-test').type('{enter}')
        cy.contains('https://www.guru99.com')
        cy.contains('https://docs.servicenow.com')
        cy.contains('Зображення').click() 
    });


    // Go on the demo HRM-system
    // log in as admin
    // go to user list
    // add new user
    // check user added or not
    it.only ('login test', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('#txtUsername').type('Admin')
        cy.get('#txtPassword').type('admin123')
        cy.get('#btnLogin').click()
        cy.get('#menu_admin_viewAdminModule').click()
        //cy.get('#menu_admin_UserManagement').click()
        cy.get('#menu_admin_viewSystemUsers')
        cy.get('#btnAdd').click()
        cy.get('#systemUser_employeeName_empName').type('Ehioze Ebo')
        cy.get('#systemUser_userName').type('pavlo1')
        cy.get('#systemUser_password').type('pavlo123')
        cy.get('#systemUser_confirmPassword').type('pavlo123')
        cy.get('#btnSave').click()
            .should('contains', 'pavlo1')
    });
});
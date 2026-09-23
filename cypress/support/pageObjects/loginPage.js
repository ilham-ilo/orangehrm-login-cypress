class loginPage{
    visitPage(){
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    }
    inputUsername(username){
        cy.get("input[placeholder='Username']").type(username)
    }
    inputPassword(password){
        cy.get("input[placeholder='Password']").type(password)
    }
    clickBtnLogin(){
        cy.get("button[type='submit']").should('be.visible').click()
    }
    assertionLogin(){
        cy.get('.oxd-topbar-header-title').should('have.text' , 'Dashboard')
    }
    assertionInvalidLogin(){
        cy.get('.oxd-alert-content.oxd-alert-content--error').should('be.visible')
    }
    interceptLogin(){
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary').as('actionSummary')
    }
    interceptInvalidLogin(){
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages').as('messages')
    }
    waitLogin(){
        cy.wait('@actionSummary').its('response.statusCode').should('eq', 200)
    }
    waitInvalidLogin(){
        cy.wait('@messages').its('response.statusCode').should('eq', 304)
    }
}

export default new loginPage()
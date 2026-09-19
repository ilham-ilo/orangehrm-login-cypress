describe ('Skenario Verifikasi Fungsi Login', () => {

    it('TC-001 Verify that the user can log in using a valid username and password', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('.orangehrm-login-title').should('be.visible')
        cy.get("img[alt='company-branding']").should('be.visible')
        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get("button[type='submit']").click()
        cy.get('.oxd-topbar-header-title').should('have.text' , 'Dashboard')
    })

    it('TC-002 Verify login using an invalid username and valid password', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('.orangehrm-login-title').should('be.visible')
        cy.get("img[alt='company-branding']").should('be.visible')
        cy.get("input[placeholder='Username']").type('InvalidUsername')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get("button[type='submit']").click()
        cy.get('.oxd-alert-content.oxd-alert-content--error').should('be.visible')
    })

    it('TC-003 Verify login using a valid username and invalid password', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('.orangehrm-login-title').should('be.visible')
        cy.get("img[alt='company-branding']").should('be.visible')
        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Password']").type('wrong123')
        cy.get("button[type='submit']").click()
        cy.get('.oxd-alert-content.oxd-alert-content--error').should('be.visible')
    })

    it('TC-004 Verify login using an invalid username and invalid password', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('.orangehrm-login-title').should('be.visible')
        cy.get("img[alt='company-branding']").should('be.visible')
        cy.get("input[placeholder='Username']").type('InvalidUsername')
        cy.get("input[placeholder='Password']").type('wrong123')
        cy.get("button[type='submit']").click()
        cy.get('.oxd-alert-content.oxd-alert-content--error').should('be.visible')
    })

    it('TC-005 Verify login when both username and password fields are empty', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('.orangehrm-login-title').should('be.visible')
        cy.get("img[alt='company-branding']").should('be.visible')
        cy.get("button[type='submit']").click()
        cy.get(':nth-child(2) > .oxd-input-group > .oxd-text').should('have.text' , 'Required')
        cy.get(':nth-child(3) > .oxd-input-group > .oxd-text').should('have.text' , 'Required')
    })

    it('TC-006 Verify login when the username field is empty', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('.orangehrm-login-title').should('be.visible')
        cy.get("img[alt='company-branding']").should('be.visible')
        cy.get("button[type='submit']").click()
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get(':nth-child(2) > .oxd-input-group > .oxd-text').should('have.text' , 'Required')
    })

    it('TC-007 Verify login when the password field is empty', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('.orangehrm-login-title').should('be.visible')
        cy.get("img[alt='company-branding']").should('be.visible')
        cy.get("button[type='submit']").click()
        cy.get("input[placeholder='Username']").type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > .oxd-text').should('have.text' , 'Required')
    })

    it('TC-008 Verify login using spaces only in the username and password fields', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('.orangehrm-login-title').should('be.visible')
        cy.get("img[alt='company-branding']").should('be.visible')
        cy.get("input[placeholder='Username']").type(" ")
        cy.get("input[placeholder='Password']").type(" ")
        cy.get("button[type='submit']").click()
        cy.get(':nth-child(2) > .oxd-input-group > .oxd-text').should('have.text' , 'Required')
        cy.get(':nth-child(3) > .oxd-input-group > .oxd-text').should('have.text' , 'Required')
    })

    it('TC-009 Verify login using valid credentials with leading and trailing spaces', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('.orangehrm-login-title').should('be.visible')
        cy.get("img[alt='company-branding']").should('be.visible')
        cy.get("input[placeholder='Username']").type(' Admin ')
        cy.get("input[placeholder='Password']").type(' admin123 ')
        cy.get("button[type='submit']").click()
        cy.get('.oxd-alert-content.oxd-alert-content--error').should('be.visible')
    })

    it('TC-010 Verify login using a valid username with different letter capitalization', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('.orangehrm-login-title').should('be.visible')
        cy.get("img[alt='company-branding']").should('be.visible')
        cy.get("input[placeholder='Username']").type('aDmin')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get("button[type='submit']").click()
        cy.get('.oxd-topbar-header-title').should('have.text' , 'Dashboard')
    })

    it('TC-011 Verify login using a valid password with different letter capitalization', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('.orangehrm-login-title').should('be.visible')
        cy.get("img[alt='company-branding']").should('be.visible')
        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Password']").type('aDmin123')
        cy.get("button[type='submit']").click()
        cy.get('.oxd-alert-content.oxd-alert-content--error').should('be.visible')
    })

    it('TC-012 Verify that characters entered in the password field are masked', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('.orangehrm-login-title').should('be.visible')
        cy.get("img[alt='company-branding']").should('be.visible')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get('input[name="password"]').should('have.attr', 'type', 'password')
    })
})
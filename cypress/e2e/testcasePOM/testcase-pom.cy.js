import loginPage from "../../support/pageObjects/loginPage.js"
import loginData from "../../fixtures/loginData.json"

describe ('Skenario Verifikasi Fungsi Login', () => {

    it('TC-001 Verify that the user can log in using a valid username and password', () => {
        loginPage.visitPage()
        loginPage.inputUsername(loginData.validUsername)
        loginPage.inputPassword(loginData.validPassword)
        
        loginPage.interceptLogin()
        loginPage.clickBtnLogin()
        
        loginPage.waitLogin()
        loginPage.assertionLogin()
    })

    it('TC-002 Verify login using an invalid username and valid password', () => {
        loginPage.visitPage()
        loginPage.inputUsername(loginData.invalidUsername)
        loginPage.inputPassword(loginData.validPassword)
        
        loginPage.interceptInvalidLogin()
        loginPage.clickBtnLogin()
        
        loginPage.waitInvalidLogin()
        loginPage.assertionInvalidLogin()
    })

    it('TC-003 Verify login using a valid username and invalid password', () => {
        loginPage.visitPage()
        loginPage.inputUsername(loginData.validUsername)
        loginPage.inputPassword(loginData.invalidPassword)
        
        loginPage.interceptInvalidLogin()
        loginPage.clickBtnLogin()
        
        loginPage.waitInvalidLogin()
        loginPage.assertionInvalidLogin()
    })

    it('TC-004 Verify login using an invalid username and invalid password', () => {
        loginPage.visitPage()
        loginPage.inputUsername(loginData.invalidUsername)
        loginPage.inputPassword(loginData.invalidPassword)
        
        loginPage.interceptInvalidLogin()
        loginPage.clickBtnLogin()
        
        loginPage.waitInvalidLogin()
        loginPage.assertionInvalidLogin()
    })

    it('TC-008 Verify login using special characters in username and password', () => {
        loginPage.visitPage()
        loginPage.inputUsername(loginData.specialUsername)
        loginPage.inputPassword(loginData.specialPassword)
        
        loginPage.interceptInvalidLogin()
        loginPage.clickBtnLogin()
        
        loginPage.waitInvalidLogin()
        loginPage.assertionInvalidLogin()
    })

    it('TC-009 Verify login using valid credentials with leading and trailing spaces', () => {
        loginPage.visitPage()
        loginPage.inputUsername(loginData.trailingUsername)
        loginPage.inputPassword(loginData.trailingPassword)
        
        loginPage.interceptInvalidLogin()
        loginPage.clickBtnLogin()
        
        loginPage.waitInvalidLogin()
        loginPage.assertionInvalidLogin()
    })

    it('TC-010 Verify login using a valid username with different letter capitalization', () => {
        loginPage.visitPage()
        loginPage.inputUsername(loginData.capitalizedUsername)
        loginPage.inputPassword(loginData.validPassword)
        
        loginPage.interceptLogin()
        loginPage.clickBtnLogin()
        
        loginPage.waitLogin()
        loginPage.assertionLogin()
    })

    it('TC-011 Verify login using a valid password with different letter capitalization', () => {
        loginPage.visitPage()
        loginPage.inputUsername(loginData.validUsername)
        loginPage.inputPassword(loginData.capitalizedPassword)
        
        loginPage.interceptInvalidLogin()
        loginPage.clickBtnLogin()
        
        loginPage.waitInvalidLogin()
        loginPage.assertionInvalidLogin()
    })
})

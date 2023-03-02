/// <reference types="cypress" />

import loginPage from "../shopDemoQaPageObjects/shopDemoQaLoginPage.cy.js"
import registrationPage from "../shopDemoQaPageObjects/shopDemoQaRegistrationPage.cy.js"

context('Firsttest', () => {

    beforeEach(() => {

        cy.visit('https://shop.demoqa.com/my-account/')
        loginPage.urlAssertion()
      })

    it('Register with valid credentials', () => {
    
        registrationPage.usernameType()
        registrationPage.emailType()
        registrationPage.passwordType()
        registrationPage.registerButtonClick()
        registrationPage.successfulRegistrationAssert()
    })
    
    it('Login with username', () => {
    
        loginPage.usernameType()
        loginPage.passwordType()
        loginPage.loginButtonClick()
        loginPage.successfulLoginAssert()
    })

    it('Login with email', () => {
    
        loginPage.emailType()
        loginPage.passwordType()
        loginPage.loginButtonClick()
        loginPage.successfulLoginAssert()
    })
})
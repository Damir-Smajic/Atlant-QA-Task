import shopDemoQa from '../../../fixtures/shopDemoQa.json'

class RegistrationPage 

{

    // LOCATORS 

    username = () => cy.get('#reg_username')
    email = () => cy.get('#reg_email')
    password = () => cy.get('#reg_password')
    registerButton = () => cy.get('[name="register"]')

    // ACTIONS

    usernameType () {
        this.username().type(shopDemoQa.username)
    }

    emailType () {
        this.email().type(shopDemoQa.email)
    }

    passwordType () {
        this.password().type(shopDemoQa.password)
    }

    registerButtonClick () {
        this.registerButton().click()
    }

    // ASSERTIONS

    successfulRegistrationAssert () {
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Hello')
    }
}

const registrationPage = new RegistrationPage ()

export default registrationPage
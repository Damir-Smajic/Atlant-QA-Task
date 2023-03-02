import shopDemoQa from '../../../fixtures/shopDemoQa.json'

class LoginPage

{

    // LOCATORS 

    username = () => cy.get('#username')
    email = () => cy.get('#username')
    password = () => cy.get('#password')
    loginButton = () => cy.get('[name="login"]')

    // ACTIONS 

    usernameType () {
        this.username().type(shopDemoQa.username)
    }

    emailType () {
        this.email().type(shopDemoQa.email)
    }

    passwordType() {
        this.password().type(shopDemoQa.password)
    }

    loginButtonClick () {
        this.loginButton().click()
    }

    // ASSERTIONS 

    urlAssertion () {
        cy.url('https://shop.demoqa.com/my-account/').should('contain', 'https://shop.demoqa.com/my-account/')
    }

    successfulLoginAssert () {
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Hello')
    }


}

const loginPage = new LoginPage ()

export default loginPage
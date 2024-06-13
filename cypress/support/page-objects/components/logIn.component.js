class LogInComponents {
    get usernameField() {
        return cy.get('#username');
    }
    get passwordField() {
        return cy.get('#password');
    }
    get loginButton() {
        return cy.get('#doLogin');
    }
}
module.exports = LogInComponents;
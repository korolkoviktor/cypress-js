class SendMessageComponent {

    get nameField() {
        return cy.get('#name');
    }
    get emailField() {
        return cy.get('#email');
    }
    get phoneField() {
        return cy.get('#phone');
    }
    get subjectField() {
        return cy.get('#subject');
    }
    get descriptionField() {
        return cy.get('#description');
    }
    get submitButton() {
        return cy.get('#submitContact');
    }
    get successInfo() {
        return cy.get('.col-sm-5:nth-child(2)>div>h2');
    }
    get warningInfo() {
        return cy.get('.alert-danger>p');
    }
}
module.exports = SendMessageComponent;
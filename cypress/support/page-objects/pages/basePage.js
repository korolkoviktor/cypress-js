class BasePage {

    navigate(path) {
        cy.visit(path);
    }
}
module.exports = BasePage;
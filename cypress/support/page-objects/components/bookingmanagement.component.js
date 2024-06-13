class BookingManagementComponents {
    get roomsCountField() {
        return cy.get('#roomName');
    }
    get roomsTypeField() {
        return cy.get('#type');
    }
    get accessibleField() {
        return cy.get('#accessible');
    }
    get roomPriceField() {
        return cy.get('#roomPrice');
    }
    get wifiCheckbox() {
        return cy.get('#wifiCheckbox');
    }
    get tvCheckbox() {
        return cy.get('#tvCheckbox');
    }
    get radioCheckbox() {
        return cy.get('#radioCheckbox');
    }
    get createRoomButton() {
        return cy.get('#createRoom');
    }
    get errorInfo() {
        return cy.get('.alert-danger p');
    }
    get frontpageLink() {
        return cy.get('#frontPageLink');
    }
}
module.exports = BookingManagementComponents;
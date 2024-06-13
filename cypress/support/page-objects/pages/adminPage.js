const LogInComponents = require("../components/logIn.component");
const BookingManagementComponents = require('../components/bookingmanagement.component');
const BasePage = require("./basePage");

class AdminPage extends BasePage {
    constructor() {
        super()
        this.loginform = new LogInComponents;
        this.bookingform = new BookingManagementComponents()
    }
    login(data) {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        this.loginform.usernameField.type(data.username);
        this.loginform.passwordField.type(data.password);
        this.loginform.loginButton.click();
    }
    createRoom(data) {
        this.bookingform.roomsCountField.type(data.roomscount);
        this.bookingform.roomsTypeField.select(data.type);
        this.bookingform.accessibleField.select(data.accessible);
        this.bookingform.roomPriceField.type(data.price);
        this.bookingform.wifiCheckbox.click();
        this.bookingform.tvCheckbox.click();
        this.bookingform.radioCheckbox.click();
        this.bookingform.createRoomButton.click();
    }
}
module.exports = AdminPage;
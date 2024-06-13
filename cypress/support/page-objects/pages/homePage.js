const BasePage = require('./basePage')
const SendMessageComponent = require('../components/sendmessage.component');
const RoomsComponents = require('../components/rooms.components');

class HomePage extends BasePage {
    constructor() {
        super();
        this.message = new SendMessageComponent;
        this.rooms = new RoomsComponents;
    }

    sendMessage(data) {
        this.message.nameField.type(data.name);
        this.message.emailField.type(data.email);
        this.message.phoneField.type(data.phone);
        this.message.subjectField.type(data.subject);
        this.message.descriptionField.type(data.description);
        this.message.submitButton.click();
    }
    calculateQuantity(element) {
        let list = element;
        return list.count()
    }
}
module.exports = HomePage;
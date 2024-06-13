const credentials = require('../support/testdata/credentials.json');
const testRooms = require('../support/testdata/testRooms.json')
const constants = require('../support/helpers/constants');
const { page } = require('../support/page-objects/pages/index');

describe('Records creation in the Booking Management Form', () => {
    beforeEach(() => {
        page('main').navigate(constants.url.adminpage);
    })
    it('Create a correct record', () => {
        page('admin').login(credentials.validuser);
        page('admin').bookingform.frontpageLink.click();
        let roomscount //variable for calculating quantity of Rooms
        page('main').rooms.roomRecord.then($elements => {
            roomscount = $elements.length;
        }).then(() => {
            cy.go('back');
            page('admin').createRoom(testRooms.validRoom01);
            page('admin').bookingform.frontpageLink.click();
            page('main').rooms.roomRecord.should('have.length', roomscount + 1);
        })
    })
    it('Creation empty recordshould return a warning', () => {
        page('admin').login(credentials.validuser);
        page('admin').bookingform.createRoomButton.click();
        page('admin').bookingform.errorInfo.should(
            'contain.text',
            constants.info.warning.createrecord.price
        );
    })
})
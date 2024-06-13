const { page } = require('../support/page-objects/pages/index');
const constants = require('../support/helpers/constants')
const testData = require('../support/testdata/testMessages.json')

describe('Sending message', () => {
  beforeEach(() => {
    page('main').navigate(constants.url.homepage);
  })
  it('correct message', () => {
    page('main').sendMessage(testData.validMessage01);
    page('main').message.successInfo.should('contain.text', constants.info.success);
  })
  it('message with incorrect phone number', () => {
    page('main').sendMessage(testData.invalidMessage01);
    page('main').message.warningInfo.should('contain.text', constants.info.warning.phone);
  })
})
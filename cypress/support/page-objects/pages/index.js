const MainPage = require('./homePage')
const AdminPage = require('./adminPage')

function page(name) {
    const items = {
        main: new MainPage(),
        admin: new AdminPage(),
    };
    return items[name];
}
module.exports = {
    page
};
var user = require('../controllers/user.controller');

module.exports = function(app) {

    app.route('/')
        .get(user.mydefault);
        
    app.route('/')
        .post(user.mypost);
        
    app.route('/users')
        .get(user.list)
        .post(user.changeName, user.create);

    app.route('/users/:userID')
        .get(user.read);

    app.param('userID', user.getUserByID);
};

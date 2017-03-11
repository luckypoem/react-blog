const user = require('../model').User;

exports.checkUser = function (name, password) {
    return user.find({
        'name': name,
        'password': password
    }).exec()
};
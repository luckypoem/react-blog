/*
*
* admin router is used by api.js.
* /api/admin/*
*
* */

const router = require('koa-router')(),
    user = require('../lib').user;

router.get('/', function *() {
    if (this.session.isNew) {       // not logged in
        this.body = {
            'loggedIn': false
        }
    }
    else {
        this.body = {
            'loggedIn': true
        }
    }
});

router.post('/', function *() {
    let userName = this.request.body.user,
        password = this.request.body.password;
    let result = yield user.checkUser(userName, password).then((result) => {
        if (result.length !== 1) {
            return false;
        } else {
            return true;
        }
    });
    if (result) {
        this.body = {passed: true};
    } else {
        this.body = {passed: false};
    }
});




module.exports = router;


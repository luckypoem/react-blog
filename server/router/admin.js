/*
*
* admin router is used by api.js.
* /api/admin/*
*
* */

const router = require('koa-router')(),
    lib = require('../lib');

const userLib = lib.user,
    postLib = lib.post;


// router.get('/', function *() {
//     if (this.session.isNew) {       // not logged in
//         this.body = {
//             'loggedIn': false
//         }
//     }
//     else {
//         this.body = {
//             'loggedIn': true
//         }
//     }
// });

router.post('/', function *() {
    let userName = this.request.body.user,
        password = this.request.body.password;
    let result = yield userLib.checkUser(userName, password).then((result) => {
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

router.post('/post/new_post', function *() {
    let author = this.request.body.author,
        title = this.request.body.title,
        post = this.request.body.post;

    let result = yield postLib.addPost({
        author: author,
        title: title,
        content: post
    }).then(()=>{return true;}, ()=>{return false;});

    if(result) {
        this.body = {success: true};
    } else {
        this.body = {success: false};
    }
});




module.exports = router;


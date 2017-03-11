const router = require('koa-router')(),
    post = require('../lib').post;

const admin = require('./admin');

router.get('/post_list', function *() {
    let part = this.query.p || 1;
    this.body = yield post.getPostsList(part);
});

router.get('/post_id/:postID', function *() {
    let postID = this.params.postID;
    this.body = yield post.getPostById(postID);
});

router.get('/post_name/:postName', function *() {
    let postName = this.params.postName;
    this.body = yield post.getPostByName(postName);
});



router.use('/admin', admin.routes(), admin.allowedMethods());
module.exports = router;
const router = require('koa-router')(),
    post = require('../lib').post;

router.get('/post_list', function *(next) {
    let part = this.query.p || 1;
    this.body = yield post.getPostsList(part);
})

module.exports = router;
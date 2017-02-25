const router = require('koa-router')(),
    post = require('../lib').post,
    send = require('koa-send');

router.get('/', function *(next) {
    yield send(this, 'public/index.html');
    yield next;
});

module.exports = router;
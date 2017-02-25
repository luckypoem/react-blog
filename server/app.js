const app = require('koa')(),
    router = require('koa-router')(),
    bodyParser = require('koa-bodyparser'),
    koaStatic = require('koa-static');

const routes = require('./router');

app.use(koaStatic('./public'));
app.use(routes.routes()).use(routes.allowedMethods());
app.use(bodyParser());

app.listen(3000);

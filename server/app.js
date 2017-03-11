const app = require('koa')(),
    router = require('koa-router')(),
    bodyParser = require('koa-bodyparser'),
    session = require('koa-generic-session'),
    koaStatic = require('koa-static');

const indexRoutes = require('./router/main'),
    apiRoutes = require('./router');

app.use(bodyParser());

app.use(koaStatic('./public'));

app.keys = ['secrets make secret'];
app.use(session(app));

app.use(apiRoutes.routes()).use(apiRoutes.allowedMethods());
app.use(indexRoutes.routes()).use(indexRoutes.allowedMethods());





app.listen(3000);

const app = require('koa')(),
    router = require('koa-router')(),
    bodyParser = require('koa-bodyparser'),
    koaStatic = require('koa-static');

const indexRoutes = require('./router/main'),
    apiRoutes = require('./router');

app.use(koaStatic('./public'));

app.use(apiRoutes.routes()).use(apiRoutes.allowedMethods());
app.use(indexRoutes.routes()).use(indexRoutes.allowedMethods());



app.use(bodyParser());

app.listen(3000);

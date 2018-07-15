const Koa = require('koa');
const app = new Koa();
const cors = require('@koa/cors');

app.use(async ctx => {
    if (ctx.request.method === 'GET') {
        // todo

    }
    ctx.body = 'Hello World';
});

app.use(cors({
    'Access-Control-Allow-Origin': '*'
}));

app.listen(3000);

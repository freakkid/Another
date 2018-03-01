const Koa = require('koa');
const app = new Koa();
const json = require('koa-json');
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');

const router = require('./routes/index')

app.use(bodyparser({
    enableTypes: ['json', 'form', 'text']
}));
app.use(json());
app.use(logger());

// logger
app.use(function* (next){
    const start = new Date();
    yield next;
    const ms = new Date() - start;
    console.log(`${this.method} ${this.url} - ${ms}ms`);
});

// router
app.use(router.routes());

module.exports = app;
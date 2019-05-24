const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  global.console.log(ctx.cookies.get('pid'));
  ctx.cookies.set('pid',Math.random());
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json',
    cookie: ctx.cookies.get('pid')
  }
})

router.get('/textasync', async (ctx) => {
  global.console.log('navygook:'+ new Date().getTime());
  const a = await new Promise((resolve,reject) => {
    setTimeout(function () {
      global.console.log('navydemoA:'+new Date().getTime());
      resolve('navya');
    },1000);
  })
  const b = await new Promise((resolve,reject) => {
    global.console.log('navydemoB:'+ new Date().getTime());
    resolve(123);
  });
  const c = await new Promise((resolve,reject) => {
    setTimeout(function () {
      global.console.log('navydemoC:'+new Date().getTime());
      resolve('ccccc');
    },1000);
  })
  ctx.body = {
    a,
    b,
    c
  }
})

module.exports = router

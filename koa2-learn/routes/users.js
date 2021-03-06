const router = require('koa-router')()
const redis = require('koa-redis')
const Person = require('../dbs/models/person')

const Store = new redis().client

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users responsesss!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.get('/fix', async function (ctx) {
  const ct = await Store.hset('fix','name', Math.random());
  ctx.body={
    code:0
  }
})

//存库
router.post('/addPerson', async function(ctx) {
  const person = new Person({name: ctx.request.body.name, age: ctx.request.body.age})
  let code
  try {
    await person.save()
    code = 0
  } catch (e) {
    code = -1
  }
  ctx.body = {
    code: code
  }
})

//读取数据

router.post('/getPerson', async function(ctx , next) {
  const result = await Person.findOne({name:ctx.request.body.name});
  const results = await Person.find({name:ctx.request.body.name});

  ctx.body = {
    code: 0,
    result,
    results
  }
})

//更新数据
router.post('/updatePerson', async function(ctx,next){
  const result = await Person.where({
    name:ctx.request.body.name
  }).update({
    age:ctx.request.body.age
  });

  ctx.body = {
    code:0
  }
})

//删除数据
router.post('/removePerson', async function(ctx,next){
  const result = await Person.where({
    name:ctx.request.body.name
  }).remove();

  ctx.body = {
    code: 0
  }
})

module.exports = router

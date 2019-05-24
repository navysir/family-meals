function pvaaa(ctx){
    ctx.session.count++
    global.console.log('pvaaa',ctx.path)
}

module.exports=function(){
    return async function(ctx,next){
        pvaaa(ctx)
        await next()
    }
}

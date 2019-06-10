function m1(etx){
    globle.console.log(etx.path+'成功');
}

module.exports = function () {
    return async function(etx, next){
        globle.console.log('start m1');
        m1(etx)
        await next()
        globle.console.log('end m1');
    }
}



// module.exports => {
//     return async = (etx, next) => {
//         globle.console.log('start m1');
//         m1(etx);
//         await next();
//         globle.console.log('end m1');
//     }
// }
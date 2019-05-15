<!--1.首先在input上绑定一个 v–model 绑定一个变量
2.用watch 做一个监听,当变量发生变化时，会有两个参数,一个是新的，一个是旧的
3.判断化学元素可以在watch里实现，因为每次变量变化watch都会执行
4.然后通过空格拆分v–model绑定的值，拆分成数组，数组长度大于1就是有空格的，直接省一步判断
5.然后用es6的set方法去重复值
6.做一遍循环比对是否是元素值，如果是，在那两个方块里绑定变量，给变量赋值-->
<template>
    <div class="content">
        <input maxlength="40" v-model="message" placeholder="edit me">
        <!--<p>Message is: {{ message }}</p>-->

        <div class="info">
            <div class="else-con">
                <div class="top-con">
                    <div class="left-info">23</div>
                    <div v-if="item1" class="center">
                        <div class="elements-one">{{message}}</div>
                    </div>
                    <div class="right-info">234</div>
                </div>

                <div class="bottom-con">
                    <div class="left-info">324</div>
                    <div v-if="item2" class="center">
                        <div class="elements-two">C</div>
                    </div>
                    <div class="right-info">sdfs</div>
                </div>
            </div>


        </div>
    </div>

</template>

<script>
    export default {
        name: "templates",
        data(){
            return{
                message: 'Hello Vue!',
                item1:false,
                item2:false,
            }
        },
        props:['age'],
        watch:{
            message(val,oldval){
                const elemensJson = ['O','ME','N'];
                var replaceBefore='程序员：123';
                var reg=/\d/;
                var replaceAfter=reg.test(replaceBefore);
                // console.log(replaceAfter);
                console.log(val)
                console.log(oldval)

            }
        }
    }
</script>

<style scoped>
    input {
        color: #000;
        width: 400px;
        height: 30px;
        line-height: 30px;
        font-size: 20px;
        padding:0 10px;
        background: #beffea;
        margin-bottom:20px;
    }
    .info{
        position: relative;
        width: 100%;
        height: 500px;
        border: 1px solid #1fed5e;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    *{
        color: #fff;
    }
     .else-con{
         position: relative;
         width: 100%;
         height: 200px;
     }

    .top-con, .bottom-con{
        width: 100%;
        height: 100px;
        display: grid;
        grid-template-rows: 100px;
        grid-template-columns: auto 100px auto;
    }
    .top-con .center, .bottom-con .center{
        width: 100%;
        height: 100px;
    }
    .bottom-con .center .elements-two{
        float: right;
    }

    .elements-one, .elements-two{
        box-sizing: border-box;
        width: 100px;
        height: 100px;
        border: 2px solid #fff;
        font-size: 30px;
        font-weight: bold;
        line-height: 100px;
        color: #fff;
        text-align: center;
    }
    .left-info, .right-info{
        width: 100%;
        height: 100px;
        line-height: 100px;
        font-size: 18px;
        color: #fff;
        text-align: right;
    }
    .right-info{
        text-align: left;
    }
    .top-con .left-info, .top-con .center, .top-con .right-info{
        margin-left:-50px;
    }
    .bottom-con .right-info, .bottom-con .center, .bottom-con .left-info{
        margin-left: 50px;
    }




</style>
<template>
    <div>
        <h1 style="color: #1fed5e;">------event-------</h1>
        <button :class="msg"></button>
        <br>

        <h2>事件修饰符</h2>
        <div>
            <div @keyup.enter="prent">1212</div>
            <input @keyup.alt.67="prent">
            <div @click="prent">1212</div>
            <div @click="prent">
                <div @click.stop="clild">3333</div>
            </div>
        </div>

        <br>

        <h2>监听事件</h2>
        <button @click="accumulate += 1">Add 1</button>
        <span>{{accumulate}}</span>
        <br>

        <h2>事件处理方法</h2>
        <button @click="event1">点击后得到button调用的方法</button>
        <br>




    </div>

</template>

<script>
    export default {
        name: "event",
        props:{},
        data(){
            return{
                accumulate:1,
                name:'hello event!',
            }
        },
        methods:{
            msg:function (a,b) {
                window.console.log(Math.random()+a,b);
            },
            clild:function () {
                console.log('child');
            },
            prent:function () {
                console.log('prent');
            },
            event1:function (event) {
                alert(this.name);
                if(event){
                    alert(event.target.tagName);
                }
            }

        }

    }
</script>

<style scoped>

</style>
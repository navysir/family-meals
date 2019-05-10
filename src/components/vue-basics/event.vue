<template>
    <div>
        <h1 style="color: #1fed5e;">------event-------</h1>
        <button :class="msg"></button>
        <div>
            <div @click="prent">1212</div>
            <div @click="prent">1212</div>
            <div @click="prent">
                <div @click.stop="clild">3333</div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "event",
        props:{},
        data(){
            return{

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
            }

        }

    }
</script>

<style scoped>

</style>
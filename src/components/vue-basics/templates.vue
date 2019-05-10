<template>
    <div>
        <slot name="a"></slot>
        <h1 style="color: #1fed5e;">------template-------</h1>
        我今年{{age}}
        <button @click="$emit('patch')">点击发送数据</button>
        <slot name="b"></slot>
    </div>
</template>

<script>
    export default {
        name: "templates",
        data(){
            return{

            }
        },
        props:['age']
    }
</script>

<style scoped>

</style>
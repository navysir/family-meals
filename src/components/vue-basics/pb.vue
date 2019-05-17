<template>
    <div>
        我现的在数字是{{$store.state.count.count}},你呢？
        <br/>
        <button type="button" name="button" @click="add(10)">增加</button>
        <button @click="reduce">减少</button>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        name: "pa",
        methods: mapActions('count',['add','reduce'])
    }
</script>

<style scoped>

</style>
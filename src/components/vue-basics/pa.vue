<template>
    <div>
        我手里还有{{$store.state.money.money}}块钱，你给我添点呗，我现在有{{$store.state.money.money}}块钱！
        <br/>
        <button type="button" name="button" @click="add">给给给</button>
        <button @click="reduce">减你100</button>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        name: "pa",
        methods: mapActions('money',['add','reduce'])
    }
</script>

<style scoped>

</style>
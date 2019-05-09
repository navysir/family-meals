<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!--<HelloWorld msg="kwg kwg kwg kwg wg"/>-->
    <!--<countProperty></countProperty>-->
    <!--<name aaa='name'/>-->
    <event></event>
    <!--<cube-button>这是一个按钮</cube-button>-->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import  drictives from './components/drictives.js'
import  name from './components/name.vue'
import  event from './components/event.vue'
// import  countProperty from './components/countProperty.vue'


export default {
  name: 'app',
  components: {
    // countProperty,
    // name,
    event
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

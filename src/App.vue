<template>
  <div id="app">
    <!--<img alt="Vue logo" width="150" src="./assets/wolf.png">-->
    <!--<HelloWorld msg="kwg kwg kwg kwg wg"/>-->
    <templates :age='age' @patch="emmsg">
      <h2 slot="a">我要加东西</h2>
      <h2 slot="b">我要加东西</h2>
    </templates>
    <countProperty></countProperty>
    <name aaa='name'/>
    <event></event>
    <!--<cube-button>这是一个按钮</cube-button>-->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import templates from './components/vue-basics/templates.vue'
// import  drictives from './components/vue-basics/common-js/drictives.js'
// import  name from './components/vue-basics/name.vue'
// import  event from './components/vue-basics/event.vue'
// import  countProperty from './components/vue-basics/countProperty.vue'


export default {
  name: 'app',
  data(){
    return{
      age:19,
    }
  },
  components: {
    // countProperty,
    // name,
    // event,
    templates,
    // HelloWorld
  },
  methods:{
    emmsg:function () {
      this.age++;
      console.log('子传父的区别');
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 20px;
  padding: 10px;
}
  html{
    background: black;
  }
</style>

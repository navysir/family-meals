<template>
  <div class="hello">
    <h1 style="color: #1fed5e;">------vbind-------</h1>
    <h1>{{ aaa }}{{bbb}}</h1>
    <span v-html="spa" v-bind:id="ids"></span>
    <div class="static" v-bind:class="{b:isactive},errorClass"></div>

    <div v-if="sell" :style="styleObj">style</div>
    <div v-else="sell" :style="styleObj">失败了</div>
    <div v-on:[clicks]="something">点击我啊</div>
    <p>Scroll down the page</p>
    <p v-tack:top="[dynamicleft]">I’ll now be offset from the left instead of the top</p>
    <!--<input class="input-focus" type="text" v-fuc value="">-->
    <!--<input type="text" v-fuc>-->
    <div id="hook-arguments-example" v-demo:foo.a.b="message">aaa</div>
  </div>
</template>

<script>

  export default {
    name: 'name',
    props: {
      aaa: String
    },

    data(){
      return{
        bbb:1234567890,
        spa:'<span style="color:red">navy</span>',
        ids:'namedo',
        isactive:false,
        activeClass: 'active',
        errorClass: 'text-danger',
        sell:false,
        message:'HAIJUN',
        dynamicleft:39,
        clicks:'click',
        //style
        styleObj:{
          color: 'red',
          fontSize:30+'px'
        },
        something:function () {
          alert(1);
        }
      }
    },

  }


</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .input-focus{
    width: 100px;
    height: 30px;
    background: aqua;
    line-height: 30px;
    color: yellow;
  }
</style>

<template>
  <div :class="{'test1':cc}">
    <span>你借了我的{{money}}，还剩下{{balance}}钱没还，尼玛快点还吧！</span>
    <span :class="nana"></span>
    <ul>
      <li v-for="(item, nums) in listArr" :key="item">
        {{item}}{{nums}}
      </li>
    </ul>
    //分组
    <ul>
      <template v-for="(item, nums) in listArr">
        <li :key="item+1">hello</li>
        <li :key="item">{{item}}{{nums}}</li>
      </template>
    </ul>
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
        money:1000,
        a:'test1',
        b:'test2',
        cc:true,
        yet:646,
        listArr:['书','本','杯子'],
        nana:{
          test1:true
        }
      }
    },
    computed:{
      balance:function () {
        return this.money-this.yet;
      }
    }

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

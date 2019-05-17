import Vue from 'vue'
import './cube-ui'

// import router from './components/vue-basics/common-js/router-config.js'
import App from './App.vue'
import store from './components/vue-basics/store/index'
Vue.config.productionTip = false

new Vue({
  // router
  render: h => h(App),
  store
}).$mount('#app')



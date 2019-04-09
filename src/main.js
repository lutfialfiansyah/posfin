import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import onlyInt from 'vue-input-only-number'

Vue.use(onlyInt)
Vue.config.productionTip = false

window.$ = window.jQuery = require('jquery')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

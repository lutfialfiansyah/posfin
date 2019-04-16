import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSession from 'vue-session'
import onlyInt from 'vue-input-only-number'

Vue.use(onlyInt)
Vue.use(VueSession)
Vue.config.productionTip = false

window.$ = window.jQuery = require('jquery')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

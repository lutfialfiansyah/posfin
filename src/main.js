import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSession from 'vue-session'
import onlyInt from 'vue-input-only-number'
import vSelect from 'vue-select'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate);
Vue.component('v-select', vSelect)
Vue.use(onlyInt)
Vue.use(VueSession)
Vue.config.productionTip = false

window.$ = window.jQuery = require('jquery')
global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

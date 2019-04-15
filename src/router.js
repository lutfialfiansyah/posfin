import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Registrasi from './views/registrasi/Registrasi.vue'
import Koordinator from './views/korlap.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/registrasi',
      name: 'registrasi',
      component: Registrasi
    },
    {
      path: '/koordinator',
      name: 'koordinator',
      component: Koordinator
    }
  ]
})

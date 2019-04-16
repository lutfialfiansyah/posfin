import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Registrasi from './views/Registrasi.vue'
import Koordinator from './views/korlap.vue'
import Dashboard from './views/Dashboard.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
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
    },
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    }
  ]
})

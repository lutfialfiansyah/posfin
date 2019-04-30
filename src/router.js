import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Registrasi from './views/Registrasi.vue'
import Koordinator from './views/korlap.vue'
import Dashboard from './views/Dashboard.vue'
import Reconsiliasi from './views/Reconsiliasi.vue'
import Saldoagent from './views/Saldoagent.vue'
import About from './views/About.vue'
import Pembatalan from './views/Pembatalan.vue'
import Laporan from './views/Laporan.vue'
import Excel from './views/Excel.vue'

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
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/pembatalan',
      name: 'pembatalan',
      component: Pembatalan
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
    },
    {
      path: '/reconsiliasi',
      name: 'reconsiliasi',
      component: Reconsiliasi
    },
    {
      path: '/saldoagent',
      name: 'saldoagent',
      component: Saldoagent
    },
    {
      path: '/laporan',
      name: 'laporan',
      component: Laporan
    },
    {
      path: '/excel',
      name: 'excel',
      component: Excel
    }
  ]
})

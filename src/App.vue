<template>
  <div id="app">
        <topbar-nav></topbar-nav>

    <router-view/>
  </div>
</template>
<script>
  import TopbarNav from './components/template/topbar.vue'
  // import SidebarNav from './components/template/sidebar.vue'
  // import FooterNav from './components/template/footer.vue'

export default {
  name: 'App',
  components: { TopbarNav }
}
</script>
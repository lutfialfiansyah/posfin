<template>
  <div id="app">
    <div>
      <topbar-nav></topbar-nav>
      <router-view/>
      <footer-nav></footer-nav>
    </div>
  </div>
</template>
<script>
  import TopbarNav from './components/template/topbar.vue'
  import FooterNav from './components/template/footer.vue'

export default {
  name: 'App',
  components: { TopbarNav, FooterNav }
}
</script>
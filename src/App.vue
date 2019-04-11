<template>
  <div id="app">
     <topbar-nav></topbar-nav>
    <router-view/>
    <footer-nav></footer-nav>
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
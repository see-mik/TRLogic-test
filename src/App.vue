<template>
  <div id="app">
    <div class="wrap">
      <navbar></navbar>
      <main class="container">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue'

  export default {
    name: 'App',
    components: {
      Navbar
    }
  }
</script>

<style lang="scss">
  @import "assets/scss/index";

  html, body {
    height: 100%;
  }

  #app {
    display: flex;
    height: 100%;
  }

  .wrap {
    display: flex;
    flex-direction: column;
    flex: 1 0 100%;
  }

  header, footer {
    flex: 0 1 auto;
  }

  main {
    flex: 1 0 auto;
  }
</style>

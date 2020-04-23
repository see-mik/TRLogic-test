<template>
  <div id="app" class="app">
    <div class="app__wrap">
      <n-navbar />
      <main class="container">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
  import nNavbar from './components/n-navbar.vue'

  export default {
    name: 'App',
    components: {
      nNavbar
    }
  }
</script>

<style lang="scss">
  @import "assets/scss/common";

  .app {
    display: flex;
    height: 100%;

    &__wrap {
      display: flex;
      flex-direction: column;
      flex: 1 0 100%;

      header, footer {
        flex: 0 1 auto;
      }

      main {
        flex: 1 0 auto;
      }
    }
  }
</style>

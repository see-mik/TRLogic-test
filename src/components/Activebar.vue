<template>
  <div class="inner">
    <router-link tag="button" to="/create">Create</router-link>
    <button @click="edit()">Edit</button>
    <button @click="remove()">Delete</button>
  </div>
</template>

<script>
  export default {
    name: '',
    methods: {
      edit() {
        console.log('edit');
      },

      remove() {
        console.log('remove');
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/scss/mixins";

  .inner {
    justify-content: flex-start;
  }

  button {
    @include _slide-hover($bgc:#fc9d9d, $dark: true);

    margin-right: 15px;
    font-size: 14px;
    line-height: 1.5;
    padding: .5em 1.6em;
    cursor: pointer;

    &:last-child {
      margin-right: 0;
    }
  }
</style>
<template>
  <form @submit.prevent="submitHandle()" class="_row">
    <input type="text" v-model="description" placeholder="Enter todo description...">

    <button type="submit" :disabled="!description.length">Add</button>
  </form>
</template>

<script>
  import { uid } from '../../utils';

  export default {
    name: 'create-todo',
    data: () => ({
      description: ''
    }),
    methods: {
      submitHandle() {
        this.$emit('add-todo', {
          id: uid(),
          description: this.description,
          complete: false
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  button {
    padding: .5rem 1.3rem;
    border-radius: 3px;
  }
</style>
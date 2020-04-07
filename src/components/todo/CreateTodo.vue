<template>
  <form @submit.prevent="submitHandle()" class="_row">
    <input type="text" v-model="description" placeholder="Enter todo description...">

    <button type="submit">Add</button>
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

</style>
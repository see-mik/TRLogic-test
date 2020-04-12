<template>
  <form @submit.prevent="submitHandle()" class="_row">
    <input type="text" v-model="description" placeholder="Enter todo...">

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
        const todo = {
          id: uid(),
          description: this.description,
          complete: false
        };
        this.$emit('add-todo', todo);

        this.description = '';
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/scss/mixins";

  form {
    justify-content: flex-start;
  }

  button {
    padding: .5rem 1.3rem;
    border-radius: 3px;

    @include _slide-hover(#537ec5);
  }

  input {
    width: 300px;
    margin-right: 10px;
    font-size: 13px;
    line-height: 1.1;
    padding: .7em;
    transition: all .3s;
    box-sizing: border-box;
    border-radius: 3px;
    box-shadow: inset 0 0 0 1px #ccc;
  }
</style>
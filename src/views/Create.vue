<template>
  <div>
    <form @submit.prevent="submitHandle()">
      <div class="input-field">
        <label for="title"></label>
        <input type="text" v-model="title" id="title">
      </div>

      <div class="_col">
        <div class="_col">
          <!--<todo></todo>-->
        </div>
        <create-todo
           @add-todo="addTodo($event)"
        >
        </create-todo>
      </div>

      <button type="submit">Create</button>
    </form>
  </div>
</template>

<script>
  import CreateTodo from '../components/todo/CreateTodo.vue';
  import { uid } from '../utils';
  import Todo from '../components/todo/Todo';

  export default {
    name: 'create',
    components: {
      Todo,
      CreateTodo
    },
    data: () => ({
      title: ''
    }),
    methods: {
      submitHandle() {
        console.log(uid());
      },
      addTodo(todo) {
        console.log(todo);
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "./../assets/scss/mixins";

  [type='submit'] {
    @include _slide-hover($bgc: #a7e9af, $dark: true);

    cursor: pointer;
  }
</style>
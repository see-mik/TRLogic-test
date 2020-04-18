<template>
  <div class="n-todo-list">
    <n-create-todo
       v-if="isEdit"
       @add-todo="$emit('add-todo', $event)"
    />

    <n-todo
       v-for="todo in todos"
       :is-remove="isEdit"
       :is-toggle="isEdit"
       :is-edit="isEdit"
       :todo="todo"
    />
  </div>
</template>

<script>
  import nTodo from './n-todo.vue';
  import nCreateTodo from './n-create-todo';

  export default {
    name: 'n-todo-list',
    components: {
      nCreateTodo,
      nTodo
    },
    props: {
      todos: Array,
      isEdit: Boolean
    }
  }
</script>

<style lang="scss">
  .n-todo-list {
    display: flex;
    flex-direction: column;
  }
</style>
<template>
  <div class="list">
    <create-todo
       v-if="isEdit"
       @add-todo="$emit('add-todo', $event)"
    >
    </create-todo>

    <todo
       v-for="todo in todos"
       :is-remove="isEdit"
       :is-toggle="isEdit"
       :is-edit="isEdit"
       :todo="todo">
    </todo>

  </div>
</template>

<script>
  import Todo from './Todo.vue';
  import CreateTodo from './CreateTodo';

  export default {
    name: 'todo-list',
    components: {
      CreateTodo,
      Todo
    },
    props: {
      todos: Array,
      isEdit: Boolean
    }
  }
</script>

<style scoped lang="scss">
  .list {
    display: flex;
    flex-direction: column;
  }
</style>
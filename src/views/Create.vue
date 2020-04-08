<template>
  <form @submit.prevent="submitHandle()" class="_col create">
    <h2>Create new Note</h2>

    <div class="_col">
      <div class="create__head _row">
        <h1 v-if="title.length">{{title}}</h1>

        <create-note
           :is-edit="title.length > 0"
           @add-title="addTitle($event)"
        >
        </create-note>
      </div>

      <div class="_col"
           v-if="todos.length">
        <todo v-for="todo in todos"
              :todo="todo">
        </todo>
      </div>
      <create-todo
         @add-todo="addTodo($event)"
      >
      </create-todo>
    </div>

    <button type="submit">Create</button>
  </form>
</template>

<script>
  import CreateTodo from '../components/todo/CreateTodo.vue';
  import CreateNote from '../components/note/CreateNote.vue';
  import Todo from '../components/todo/Todo';

  export default {
    name: 'create',
    components: {
      Todo,
      CreateTodo,
      CreateNote
    },
    data: () => ({
      title: '',
      todos: []
    }),
    methods: {
      submitHandle() {
      },
      addTodo(todo) {
        this.todos = [todo, ...this.todos];
      },
      addTitle(title) {
        console.log(title);
        this.title = title;
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "./../assets/scss/mixins";

  .create {
    width: 600px;
    margin: 0 auto;
    padding: 2rem 1rem;

    &__head {
      min-height: 54px;
      border-bottom: 1px solid #ccc;
      margin-bottom: .4em;
      padding-bottom: .4em;
    }

    h1 {
      word-break: break-word;
      font-style: 30px;
      padding-right: 15px;
    }

    h2 {
      border-bottom: 1px solid #ccc;
      margin-bottom: .4em;
      padding-bottom: .4em;
    }
  }

  [type='submit'] {
    @include _slide-hover($bgc: #a7e9af, $dark: true);
    padding: .5rem 1.3rem;
    border-radius: 3px;
    cursor: pointer;
  }
</style>
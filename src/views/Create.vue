<template>
  <form @submit.prevent="submitHandle()" class="_col create">
    <h2>Create new Note</h2>

    <div class="_col">
      <div class="create__head _row">
        <note-title
           :title="title"
           :mode-edit="true"
           @add-title="addTitle($event)"
        >
        </note-title>
      </div>

      <div class="_col"
           v-if="todos.length">
        <todo v-for="todo in todos"
              :todo="todo"
              :key="todo.id"
              :is-edit="false"
              :is-remove="true"
              @remove-todo="removeTodo($event)"
        >
        </todo>
      </div>
      <div v-else>
        <h4>Add your first Todo</h4>
      </div>
      <create-todo
         @add-todo="addTodo($event)"
      >
      </create-todo>
    </div>

    <button type="submit" :disabled="!(title.length && todos.length)">
      Create
    </button>
  </form>
</template>

<script>
  import CreateTodo from '../components/todo/CreateTodo.vue';
  import NoteTitle from '../components/note/NoteTitle.vue';
  import Todo from '../components/todo/Todo';
  import { uid } from '../utils/index';

  export default {
    name: 'create',
    components: {
      Todo,
      CreateTodo,
      NoteTitle
    },
    data: () => ({
      title: '',
      todos: []
    }),
    methods: {
      submitHandle() {
        const note = {
          id: uid(),
          title: this.title,
          todos: this.todos,
          status: 'active',
          date: new Date()
        };

        this.$store.dispatch('addNote', note);
        this.$router.push('/');
      },
      addTitle(title) {
        this.title = title;
      },
      addTodo(todo) {
        this.todos = [todo, ...this.todos];
      },
      removeTodo(id) {
        this.todos = this.todos.filter(t => t.id !== id);
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
      border-bottom: 1px solid #ccc;
      margin-bottom: 20px;
      padding-bottom: 20px;
    }

    h2 {
      border-bottom: 1px solid #ccc;
      margin-bottom: 20px;
      padding-bottom: 20px;
    }

    h4 {
      padding: .7em 0;
    }
  }

  [type='submit'] {
    @include _slide-hover($bgc: #a7e9af, $dark: true);

    margin-top: 50px;
    padding: .5em 1.3em;
    border-radius: 3px;
    color: #fff;
    font-size: 16px;
    cursor: pointer;

  }
</style>
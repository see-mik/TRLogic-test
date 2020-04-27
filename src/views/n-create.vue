<template>
  <form
     @submit.prevent="submitHandle()"
     class="n-create"
  >
    <h2 class="n-create__title">Create new Note</h2>

    <div class="_col">
      <div class="n-create__head _row">
        <n-note-title
           :text="title"
           :mode-edit="true"
           @add-text="addTitle($event)"
        />
      </div>

      <div
         class="_col"
         v-if="todos.length"
      >
        <n-todo
           v-for="todo in todos"
           :todo="todo"
           :is-edit="false"
           :is-remove="true"
           :key="todo.id"
        />
      </div>

      <div v-else>
        <h4 class="n-create__no-todo">Add your first Todo</h4>
      </div>
      <n-create-todo @add-todo="addTodo($event)" />
    </div>

    <button
       class="n-create__submit"
       type="submit"
       :disabled="!(title.length && todos.length)"
    >Create
    </button>
  </form>
</template>

<script>
  import { eventEmitter } from '@/main';
  import { mapActions } from 'vuex';
  import Note from '../models/Note.model';


  import nCreateTodo from '../components/todo/n-create-todo.vue';
  import nNoteTitle from '../components/note/n-note-title.vue';
  import nTodo from '../components/todo/n-todo';

  export default {
    name: 'n-create',
    components: {
      nTodo,
      nCreateTodo,
      nNoteTitle
    },
    data: () => ({
      title: '',
      todos: []
    }),
    created(){
      eventEmitter.$on('remove-todo', id => {
        this.todos = this.todos.filter(t => t.id !== id);
      });
    },
    methods: {
      ...mapActions(['ADD_NOTE']),

      submitHandle() {
        const note = new Note({
          title: this.title,
          todos: this.todos,
        });

        this.ADD_NOTE(note);
        this.$router.push('/');
      },
      addTitle(title) {
        this.title = title;
      },
      addTodo(todo) {
        this.todos = [todo, ...this.todos];
      },
    }
  }
</script>

<style lang="scss">
  .n-create {
    display: flex;
    flex-direction: column;
    width: 600px;
    margin: 0 auto;
    padding: 2rem 1rem;

    &__head {
      border-bottom: 1px solid #ccc;
      margin-bottom: 20px;
      padding-bottom: 20px;
    }

    &__title {
      border-bottom: 1px solid #ccc;
      margin-bottom: 20px;
      padding-bottom: 20px;
    }

    &__no-todo {
      padding: .7em 0;
    }

    &__submit {
      @include _slide-hover($bgc: #a7e9af, $dark: true);

      margin-top: 50px;
      padding: .5em 1.3em;
      border-radius: 3px;
      color: #fff;
      font-size: 16px;
      cursor: pointer;
    }
  }
</style>

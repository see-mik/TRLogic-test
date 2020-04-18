<template>
  <div class="n-single">
    <n-activebar
       :is-edit="isModeEdit"
       @toggle-edit="isModeEdit = !isModeEdit"
       @remove-note="removeNote()"
    />

    <div class="n-single__head">
      <div class="n-single__info">
        <div class="n-single__status">
          Status: <span>{{note.status}}</span>
        </div>
        <div class="n-single__date">
          Date: {{new Date(note.date).toLocaleDateString()}}
        </div>
      </div>

      <div class="n-single__title">
        <n-note-title
           :text="note.title"
           :mode-edit="isModeEdit"
           @add-text="changeTitle($event)"
        />
      </div>
    </div>

    <n-todo-list
       :is-edit="isModeEdit"
       :todos="note.todos"
       :note-id="note.id"
       @add-todo="addTodo($event)"
    />

    <div class="n-single__footer">
      <button
         class="n-single__save"
         @click="saveChanges()"
      >Save
      </button>
      <button
         class="n-single__cancel"
         @click="cancelChanges()"
      >Cancel
      </button>
    </div>

  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import { eventEmitter } from '../main';
  import nActivebar from '../components/n-activebar.vue';
  import nNoteTitle from '../components/note/n-note-title.vue';
  import nTodoList from '../components/todo/n-todo-list.vue';
  import nNote from '../components/note/n-note';

  export default {
    name: 'n-single',
    components: {
      nNote,
      nTodoList,
      nActivebar,
      nNoteTitle
    },
    data: () => ({
      isModeEdit: false,
      note: null
    }),
    created(){
      eventEmitter.$on('toggle-todo', id => {
        const idx = this.note.todos.findIndex(t => t.id === id);
        this.note.todos[idx].complete = !this.note.todos[idx].complete;
      });

      eventEmitter.$on('remove-todo', id => {
        this.note.todos = this.note.todos.filter(t => t.id !== id);
      });

      eventEmitter.$on('edit-todo', ({id, text}) => {
        const idx = this.note.todos.findIndex(t => t.id === id);
        this.note.todos[idx].description = text;
      });
    },
    beforeMount() {
      this.note = {...this.getNote()};
      this.isModeEdit = this.$route.query.mode === 'edit';
    },
    methods: {
      ...mapActions(['removeNote', 'updateNote']),

      getNote() {
        const id = parseInt(this.$route.params.id);
        return this.$store.getters.getNoteById(id);
      },
      addTodo(todo) {
        this.note.todos = [todo, ...this.note.todos];
      },
      changeTitle(title) {
        this.note.title = title;
      },

      removeNote() {
        this.removeNote(this.note.id);
        this.$router.push('/');
      },

      saveChanges() {
        if (JSON.stringify(this.note) !== JSON.stringify(this.getNote())) {
          this.updateNote(this.note);
        }
      },
      cancelChanges() {
        if (confirm('Are you sure you want to discus changes ?')) {
          this.note = this.getNote();
        }
      }
    }
  }
</script>

<style lang="scss">
  .n-single {
    width: 700px;
    margin: 0 auto;
    padding: 25px 15px;

    &__head {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    &__title {
      flex-grow: 1;
      margin-bottom: 15px;
      padding-top: 5px;
    }

    &__info {
      display: flex;
      justify-content: space-between;
      margin-bottom: 25px;
    }

    &__status {
      display: flex;
      justify-content: center;

      span {
        background-color: #a8e6cf;
        margin-left: 10px;
        font-size: 15px;
        padding: .1em .5em;
        text-transform: capitalize;
        border-radius: 3px;
      }
    }

    &__footer {
      display: flex;
      padding-top: 35px;

      button {
        padding: 1em 2.5em;
        color: #fff;
        margin-right: 20px;
        border-radius: 3px;
        cursor: pointer;
      }
    }

    &__save {
      @include _slide-hover(#00a8cc);
    }

    &__cancel {
      @include _slide-hover(#a4c5c6, $dark: true);
    }
  }
</style>
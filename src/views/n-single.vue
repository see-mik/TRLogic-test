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

    <n-confirmation-popup
       v-if="isConfirmationVisible"
       @onConfirmationApply="applyConfirmationPopup"
       @onConfirmationCancel="closeConfirmationPopup"
    />
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import { eventEmitter } from '../main';
  import nActivebar from '../components/n-activebar.vue';
  import nNoteTitle from '../components/note/n-note-title.vue';
  import nTodoList from '../components/todo/n-todo-list.vue';
  import nNote from '../components/note/n-note';
  import nConfirmationPopup from '../components/features/n-confirmation-popup.vue';

  export default {
    name: 'n-single',
    components: {
      nNote,
      nTodoList,
      nActivebar,
      nNoteTitle,
      nConfirmationPopup
    },
    data: () => ({
      isConfirmationVisible: false,
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
    computed: {
      ...mapGetters(['NOTE_BY_ID'])
    },
    methods: {
      ...mapActions(['REMOVE_NOTE', 'UPDATE_NOTE']),

      getNote() {
        return this.NOTE_BY_ID(parseInt(this.$route.params.id));
      },
      addTodo(todo) {
        this.note.todos = [todo, ...this.note.todos];
      },
      changeTitle(title) {
        this.note.title = title;
      },

      removeNote() {
        this.isConfirmationVisible = true;
      },

      applyConfirmationPopup() {
        this.REMOVE_NOTE(this.note.id);
        this.isConfirmationVisible = false;
        this.$router.push('/');
      },

      closeConfirmationPopup() {
        this.isConfirmationVisible = false;
      },

      saveChanges() {
        if (JSON.stringify(this.note) !== JSON.stringify(this.getNote())) {
          this.UPDATE_NOTE(this.note);
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
      @include _slide-hover($primary);
    }

    &__cancel {
      @include _slide-hover($secondary, $dark: true);
    }
  }
</style>
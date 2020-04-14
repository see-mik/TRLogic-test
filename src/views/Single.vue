<template>
  <div class="single">
    <activebar
       :is-edit="isModeEdit"
       @toggle-edit="isModeEdit = !isModeEdit"
       @remove-note="removeNote()"
    >
    </activebar>

    <div class="single__head">
      <div class="single__title">
        <edit-text
           :text="note.title"
           :mode-edit="isModeEdit"
           @add-text="changeTitle($event)"
        >
          <template scope="props">
            <h1>{{props.text}}</h1>
          </template>
        </edit-text>
      </div>

      <div class="single__info">
        <div class="single__date">
          Date: {{new Date(note.date).toLocaleDateString()}}
        </div>
        <div class="single__status">
          Status: <span>{{note.status}}</span>
        </div>
      </div>
    </div>

    <todo-list
       :is-edit="isModeEdit"
       :todos="note.todos"
       @add-todo="addTodo($event)"
    >
    </todo-list>

    <div class="single__footer">
      <button class="single__save">Save</button>
      <button class="single__cancel">Cancel</button>
    </div>

  </div>
</template>

<script>
  import Activebar from '../components/Activebar.vue';
  import EditText from '../components/shated/EditText.vue';
  import TodoList from '../components/todo/TodoList.vue';

  export default {
    name: 'single',
    components: {
      TodoList,
      Activebar,
      EditText
    },
    data: () => ({
      isModeEdit: false,
      note: null
    }),
    computed: {},
    beforeMount() {
      this.note = this.getNote();
      this.isModeEdit = this.$route.query.mode === 'edit';
    },
    methods: {
      getNote() {
        const id = parseInt(this.$route.params.id);
        return this.$store.getters.getNoteById(id);
      },
      changeTitle(title) {
        this.note.title = title;
      },
      addTodo(todo) {
        this.note.todos = [todo, ...this.note.todos]
      },
      removeNote() {
        this.$store.dispatch('removeNote', this.getNote.id);
        this.$router.push('/');
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/scss/mixins";

  .single {
    width: 700px;
    margin: 0 auto;
    padding: 25px 15px;

    &__head {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .edit-text {
        font-size: 20px;
      }
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
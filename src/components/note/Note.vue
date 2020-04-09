<template>
  <div class="note _col"
       :class="{_active: true}">
    <div class="note__head">
      <h2>
        <router-link :to="`/note/${note.id}`" tag="a">
          {{note.title}}
        </router-link>
      </h2>

      <router-link
         v-if="isEdit"
         tag="button"
         to="/"
      >
        Edit
      </router-link>
    </div>

    <div class="note__info">
      <small>
        Status: <span class="note__status">{{note.status}}</span>
      </small>
      <small class="date">
        Created: {{new Date(note.date).toLocaleDateString()}}
      </small>
    </div>

    <div class="todo-list _col">
      <todo
         v-for="todo in todoLimit"
         :key="todo.id"
         :todo="todo"
         @toggle-todo="toggleTodo($event)"
      >
      </todo>
    </div>
  </div>
</template>

<script>
  import Todo from '../todo/Todo.vue';

  export default {
    name: 'note',
    components: {
      Todo
    },
    props: {
      note: {
        id: String,
        title: String,
        todos: [Object]
      }
    },
    computed: {
      isEdit() {
        return this.$store.getters.getEdit;
      },

      todoLimit() {
        return this.note.todos.slice(0, 5);
      }
    },
    methods: {
      toggleTodo(todoId) {
        this.$store.dispatch('todoToggle', {id: this.note.id, todoId})
      }
    }
  }
</script>

<style scoped lang="scss">
  .note {
    background-color: #fff;
    flex: 0 0 calc(33.3% - 10px);
    margin-right: 15px;
    margin-bottom: 15px;
    border-radius: 3px;
    padding: 25px 18px;
    box-sizing: border-box;
    overflow: hidden;
    border: 1px solid transparent;
    transition: all .2s;

    &:nth-child(n + 3) {
      margin-right: 0;
    }

    &._outdate, ._outdate &__status {
      border-color: #eb4559;
    }

    &._active, ._active &__status {
      border-color: #b7efcd;
    }

    &._done, ._done &__status {
      border-color: #434e52;
    }

    &:hover._outdate {
      filter: drop-shadow(1px 1px 3px rgba(#eb4559, .6));
    }

    &:hover._active {
      filter: drop-shadow(1px 1px 3px rgba(#b7efcd, .6));
    }

    &:hover._done {
      filter: drop-shadow(1px 1px 3px rgba(#434e52, .6));
    }

    &__head {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 10px;
      padding-bottom: 5px;
      border-bottom: 1px solid;
      border-color: inherit;
      font-size: 18px;
      line-height: 1.1;

      h2 {
        font-size: inherit;
      }

      button {
        background-color: #52de97;
        color: #fff;
        padding: .4em .8em .3em;
        border-radius: 10%;
        text-align: center;
        font-size: 60%;
        line-height: inherit;
        text-transform: capitalize;
        cursor: pointer;
        transition: all .3s;

        &:hover {
          background-color: #2c7873;
        }
      }
    }

    &__info {
      display: flex;
      justify-content: space-between;
    }

    &__status {
      text-transform: capitalize;
      border-bottom: 2px solid transparent;
      box-sizing: border-box;
    }
  }
</style>
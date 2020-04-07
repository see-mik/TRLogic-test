<template>
  <div class="note _col"
       :class="{_active: true}">
    <div class="note__head _row">
      <h2>{{note.title}}</h2>

      <router-link
         v-if="editMode"
         tag="button"
         to="/"
      >
        edit
      </router-link>
    </div>

    <div class="todo-list _col">
      <todo
         v-for="(todo, idx) in note.todos"
         :todo="todo"
      >
      </todo>
    </div>
  </div>
</template>

<script>
  import Todo from '../todo/Todo.vue';

  export default {
    name: 'note',
    props: {
      note: {
        id: String,
        title: String,
        todos: [Object]
      }
    },
    data: () => ({
      editMode: true
    }),
    components: {
      Todo
    }
  }
</script>

<style scoped lang="scss">
  .note {
    background-color: #fff;
    flex: 0 0 calc(33% - 10px);
    border-radius: 3px;
    padding: 25px 18px;
    box-sizing: border-box;
    overflow: hidden;
    border: 1px solid transparent;
    transition: all .2s;

    &._outdate {
      border-color: #eb4559;
    }

    &._active {
      border-color: #b7efcd;
    }

    &._done {
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
          border-radius: 50%;
        }
      }
    }
  }
</style>
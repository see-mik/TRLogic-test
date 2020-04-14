<template>
  <div class="todo _row">
    <label :for="`todo-${todo.id}`"
           :class="{_complete: todo.complete, '_no-events': !isToggle}">

      <span class="checkbox"
            v-if="isToggle">
        <input type="checkbox"
               :id="`todo-${todo.id}`"
               :value="todo.complete"
               @change="changeHandler()">
        <span class="switch"
              :class="{_complete: todo.complete}"></span>
    </span>

      <edit-text class-name="todo-description"
                 :text="todo.description"
                 :mode-edit="isEdit"
                 @add-text="editTodo($event)"
      >
      </edit-text>
    </label>

    <button
       v-if="isRemove"
       @click="removeTodo()">&times;
    </button>
  </div>
</template>

<script>
  import EditText from '@/components/shated/EditText.vue';

  export default {
    name: 'todo',
    props: {
      isRemove: Boolean,
      isToggle: Boolean,
      isEdit: Boolean,
      todo: {
        type: Object,
        required: true
      }
    },
    components: {
      EditText
    },
    methods: {
      changeHandler() {
        this.$emit('toggle-todo', this.todo.id);
      },
      editTodo(text){
        console.log(text);
      },
      removeTodo() {
        this.$emit('remove-todo', this.todo.id);
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/scss/mixins";

  .todo {
    align-items: center;
    padding: 1rem 0;
    border-bottom: 1px solid #a3a3a3;

    &:last-child {
      border-bottom: none;
    }
  }

  .checkbox {
    display: flex;
    align-items: center;
    margin-right: 15px;

    input {
      visibility: hidden;
      display: none;
    }

    .switch {
      display: block;
      background-color: #12e2a3;
      width: 36px;
      height: 20px;
      position: relative;
      border: 1px solid #738598;
      border-radius: 11px;
      cursor: pointer;
      transition: all .3s;
      overflow: hidden;

      &:before {
        content: "";
        position: absolute;
        top: 1px;
        left: 1px;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background-color: #f6f6f6;
        transition: all .3s;
      }

      &._complete {
        background-color: #dedede;

        &:before {
          background-color: #393e46;
          left: calc(100% - 18px - 1px);
        }
      }
    }

  }

  label {
    display: flex;
    width: 100%;
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    padding: .1em;
    text-overflow: ellipsis;

    ._complete {
      text-decoration: line-through;
    }
  }

  button {
    background-color: #d63447;
    flex: 0 0 24px;
    margin-left: 10px;
    color: #fff;
    border-radius: 50%;
    text-align: center;
    font-size: 24px;
    line-height: 24px;
    cursor: pointer;
    transition: all .3s;

    &:hover {
      transform: rotate(180deg);
    }
  }
</style>
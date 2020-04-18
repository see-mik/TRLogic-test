<template>
  <div class="n-todo _row">
    <div class="n-todo__label">

      <label
         class="n-todo__checkbox"
         :for="`todo-${todo.id}`"
         v-if="isToggle"
      >
        <input
           type="checkbox"
           :id="`todo-${todo.id}`"
           :value="todo.complete"
           @change="toggleTodo()"
        >
        <span
           class="n-todo__switch"
           :class="{_complete: todo.complete}"
        ></span>
      </label>

      <n-todo-title
         :is-complete="todo.complete"
         :text="todo.labelText"
         :mode-edit="isEdit"
         @add-text="editTodo($event)"
      />
    </div>

    <button
       class="n-todo__remove"
       v-if="isRemove"
       @click="removeTodo()"
    >&times;
    </button>
  </div>
</template>

<script>
  import nTodoTitle from './n-todo-title.vue';
  import { eventEmitter } from '@/main';
  import Todo from '../../models/Todo.model';

  export default {
    name: 'n-todo',
    components: {
      nTodoTitle
    },
    props: {
      isRemove: Boolean,
      isToggle: Boolean,
      isEdit: Boolean,
      todo: {
        type: Object,
        default:() => new Todo()
      }
    },
    methods: {
      toggleTodo() {
        eventEmitter.$emit('toggle-todo', this.todo.id);
      },
      editTodo(text){
        eventEmitter.$emit('edit-todo', {id: this.todo.id, text});
      },
      removeTodo() {
        eventEmitter.$emit('remove-todo', this.todo.id);
      }
    }
  }
</script>

<style lang="scss">
  .n-todo {
    align-items: center;
    padding: .6rem 0;
    border-bottom: 1px solid #a3a3a3;

    &:last-child {
      border-bottom: none;
    }

    &__label {
      display: flex;
      width: 100%;
      font-size: 14px;
      white-space: nowrap;
      overflow: hidden;
      padding: .1em;
      text-overflow: ellipsis;
      transition: .3s;
    }

    &__checkbox {
      display: flex;
      align-items: center;
      margin-right: 22px;

      input {
        visibility: hidden;
        display: none;
      }
    }

    &__switch {
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

    &__remove {
      background-color: #d63447;
      flex: 0 0 24px;
      margin-left: 15px;
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
  }
</style>
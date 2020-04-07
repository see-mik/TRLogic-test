<template>
  <div class="todo _row">
    <div class="checkbox">
      <input type="checkbox" :value="todo.complete" @change="toggle()" ref="check">
      <label ref="label"
             :class="{_complete: todo.complete}">
      </label>
    </div>

    <p>{{todo.description}}</p>
  </div>
</template>

<script>
  export default {
    name: 'todo',
    props: {
      todo: {
        description: String,
        complete: Boolean
      }
    },
    methods: {
      toggle() {
        this.todo.complete = !this.todo.complete;
      }
    },
    mounted() {
      let {label, check} = this.$refs;

      check.setAttribute('id', `todo-${this.todo.id}`);
      label.setAttribute('for', `todo-${this.todo.id}`);
    }
  }
</script>

<style scoped lang="scss">
  .todo {
    align-items: center;
    padding: 1rem 0;
    border-bottom: 1px solid #a3a3a3;

    &:last-child {
      border-bottom: none;
    }
  }

  .checkbox {
    input {
      display: none;
      visibility: hidden;
    }

    label {
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

  p {
    width: 100%;
    margin-left: 15px;
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
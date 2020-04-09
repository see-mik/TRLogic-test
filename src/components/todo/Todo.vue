<template>
  <div class="todo _row">
    <div class="checkbox"
         v-if="isEdit">
      <input type="checkbox"
             :value="todo.complete"
             @change="changeHandler()"
             ref="check">
      <label ref="label"
             :class="{_complete: todo.complete}">
      </label>
    </div>

    <p :class="{_complete: todo.complete}">
      {{todo.description}}
    </p>

    <button
       v-if="isRemove"
       @click="remove()">&times;
    </button>
  </div>
</template>

<script>
  export default {
    name: 'todo',
    props: {
      isRemove: Boolean,
      todo: {
        id: Number,
        description: String,
        complete: Boolean
      }
    },
    computed: {
      isEdit() {
        return this.$store.getters.getEdit;
      }
    },
    updated() {
      if (this.isEdit) {
        let {label, check} = this.$refs;

        check.setAttribute('id', `todo-${this.todo.id}`);
        label.setAttribute('for', `todo-${this.todo.id}`);
      }
    },
    methods: {
      changeHandler() {
        this.$emit('toggle-todo', this.todo.id);
      },
      remove() {
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
    margin-right: 15px;

    input {
      visibility: hidden;
      display: none;
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

  p {
    width: 100%;
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    ._complete {
      text-decoration: line-through;
    }
  }
</style>
<template>
  <form
     @submit.prevent="submitHandle()"
     class="n-create-todo _row"
  >
    <input
       class="n-create-todo__input"
       type="text"
       v-model="labelText"
       placeholder="Enter todo..."
    >

    <button
       class="n-create-todo__submit"
       type="submit"
       :disabled="!labelText.length"
    >Add
    </button>
  </form>
</template>

<script>
  import { uid } from '../../utils/utils';
  import Todo from '../../models/Todo.model';
  

  export default {
    name: 'n-create-todo',
    data: () => ({
      labelText: ''
    }),
    methods: {
      submitHandle() {
        const todo = new Todo({
          id: uid(),
          labelText: this.labelText
        });
        this.$emit('add-todo', todo);

        this.labelText = '';
      }
    }
  }
</script>

<style lang="scss">
  .n-create-todo {
    justify-content: flex-start;

    &__input {
      width: 300px;
      margin-right: 10px;
      font-size: 13px;
      line-height: 1.1;
      padding: .7em;
      transition: all .3s;
      box-sizing: border-box;
      border-radius: 3px;
      box-shadow: inset 0 0 0 1px #ccc;
    }

    &__submit {
      @include _slide-hover(#537ec5);

      padding: .5rem 1.3rem;
      border-radius: 3px;
    }
  }

</style>
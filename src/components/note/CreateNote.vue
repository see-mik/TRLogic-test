<template>
  <form @submit.prevent="addTitle()"
        :class="{_edit: isEdit}">
    <input type="text"
           v-model="title"
           placeholder="Enter title and press 'Enter'...">

    <button class="edit" type="submit">{{ isEdit ? "Edit" : "Add" }}</button>
  </form>
</template>

<script>
  export default {
    name: 'create-note',
    props: {
      isEdit: Boolean
    },
    data: () => ({
      title: ''
    }),
    methods: {
      addTitle() {
        this.$emit('add-title', this.title);
        this.title = '';
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/scss/mixins";

  form {
    align-self: stretch;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 0 0 auto;
    margin-left: auto;
  }

  button {
    padding: .5rem 1.3rem;
    border-radius: 3px;
    color: #fff;
    cursor: pointer;

    @include _slide-hover(#537ec5);
  }

  form._edit {
    input {
      width: 0;
      padding-right: 0;
      padding-left: 0;
      box-shadow: none;

    }

    &:hover input {
      width: 200px;
      padding-right: .7em;
      padding-left: .7em;
      border-width: 1px;
      box-shadow: 0 0 0 1px #ccc;
    }
  }
</style>
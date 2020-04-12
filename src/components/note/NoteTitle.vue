<template>
  <form @submit.prevent="addTitle()">

    <div class="head">
      <input name="title"
             :class="{_switchEditElement: edit}"
             v-model="rawTitle"
             :autofocus="edit"
             placeholder="Enter title and press 'Enter'...">

      <h1 :class="{_switchEditElement: !edit}">{{title}}</h1>
    </div>

    <button class="edit" type="submit"
            v-if="modeEdit"
            :disabled="!rawTitle.length"
            :class="{_on: editOn}">
      {{ edit ? "Edit" : "Add" }}
    </button>
  </form>
</template>

<script>
  export default {
    name: 'create-note',
    props: {
      title: String,
      modeEdit: Boolean
    },
    data: () => ({
      rawTitle: null,
      editOn: null
    }),
    beforeMount() {
      this.rawTitle = this.title || '';
      this.editOn = this.title.length > 0;
    },
    computed: {
      edit() {
        return this.editOn;
      },
    },
    methods: {
      addTitle() {
        if (!this.editOn && this.title !== this.rawTitle) {
          this.$emit('add-title', this.rawTitle);
        }
        this.editOn = !this.editOn;
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
    align-items: flex-start;
    flex: 1 0 100%;

    .head {
      align-self: stretch;
      flex-grow: 1;
      margin-right: 15px;
      position: relative;

      h1 {
        word-break: break-all;
      }

      h1, input {
        padding: 10px;
        margin-left: -10px;
        width: 100%;
        margin-right: 10px;
        font-size: 20px;
        font-family: var(--font);
        font-weight: bold;
        line-height: 1.1;
        box-sizing: border-box;
        transition: all .3s;
      }

      input {
        position: absolute;
        top: 0;
        left: 0;
        resize: none;
        border-radius: 3px;
        box-shadow: 0 0 0 1px #eee;
      }

      ._switchEditElement {
        opacity: 0;
        visibility: hidden;
        z-index: -1;
      }
    }
  }

  button {
    flex-shrink: 0;
    padding: .7rem 1.3rem;
    border-radius: 3px;
    color: #fff;
    font-size: 15px;
    cursor: pointer;
    transition: all .3s;

    @include _slide-hover(#537ec5);

    &._on {
      @include _slide-hover(#75daad, $dark: true);
    }
  }
</style>
<template>
  <form class="edit-text" @submit.prevent="addTitle()">

    <div class="head">
      <input name="title"
             :class="{'_switchEditElement': edit}"
             v-model="rawText"
             placeholder="Enter title and press 'Enter'...">

      <div class="text"
           :class="{'_switchEditElement': !edit}">
        <slot :text="text">
          <h6>{{text}}</h6>
        </slot>
      </div>
    </div>

    <button class="edit" type="submit"
            v-if="modeEdit"
            :disabled="!rawText.length"
            :class="{_on: editOn}">
      {{ edit ? "Edit" : "Add" }}
    </button>
  </form>
</template>

<script>
  export default {
    name: 'create-note',
    props: {
      className: String,
      text: String,
      modeEdit: Boolean
    },
    data: () => ({
      rawText: null,
      editOn: null
    }),
    beforeMount() {
      this.rawText = this.text || '';
      this.editOn = this.text.length > 0;
    },
    computed: {
      edit() {
        return this.editOn;
      },
    },
    methods: {
      addTitle() {
        if (!this.editOn && this.text !== this.rawText) {
          this.$emit('add-text', this.rawText);
        }
        this.editOn = !this.editOn;
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/scss/mixins";

  .edit-text {
    align-self: stretch;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex: 1 0 auto;
    font-size: 14px;

    .head {
      align-self: stretch;
      flex-grow: 1;
      margin-right: 15px;
      position: relative;
      display: flex;

      .text > * {
        word-break: break-all;
      }

      .text > *, input {
        font-size: inherit;
        font-family: var(--font);
        font-weight: bold;
        line-height: 1.5;
      }

      .text, input {
        padding: .4em;
        margin-left: -.4em;
        width: 100%;
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
    padding: .4rem 1.5rem;
    border-radius: 3px;
    color: #fff;
    line-height: 1.5;
    font-size: 13px;
    cursor: pointer;
    transition: all .3s;

    @include _slide-hover(#537ec5);

    &._on {
      @include _slide-hover(#75daad, $dark: true);
    }
  }
</style>
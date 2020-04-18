<template>
  <form
     class="n-note-title edit-text"
     @submit.prevent="addTitle()"
  >
    <div class="n-note-title__head edit-text__head">
      <input
         class="n-note-title__input edit-text__input"
         name="title"
         :class="{'_switchEditElement': edit}"
         v-model="rawText"
         placeholder="Enter title and press 'Enter'..."
      >

      <div
         class="n-note-title__title edit-text__title"
         :class="{'_switchEditElement': !edit}"
      >
        <h1>{{text}}</h1>
      </div>
    </div>

    <button
       class="n-note-title__btn edit-text__btn"
       type="submit"
       v-if="modeEdit"
       :disabled="!rawText.length"
       :class="{_on: editOn}"
    >{{ edit ? "Edit" : "Add" }}
    </button>
  </form>
</template>

<script>
  import editText from '../../mixins/editText.mixin';

  export default {
    name: "n-note-title",
    mixins: [editText]
  }
</script>

<style lang="scss">
  // it use common style for ".edit-text";

  .n-note-title {
    &__title, &__input {
      font-size: 20px;
      line-height: 1.2;
      font-weight: bold;
    }

    &__btn {
      padding: .6rem 1.7rem;
      font-size: 14px;
    }
  }
</style>
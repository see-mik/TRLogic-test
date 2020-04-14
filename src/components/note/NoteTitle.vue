<template>
  <form class="edit-text" @submit.prevent="addTitle()">
    <div class="edit-text__head">
      <input class="edit-text__input"
             name="title"
             :class="{'_switchEditElement': edit}"
             v-model="rawText"
             placeholder="Enter title and press 'Enter'...">

      <div class="edit-text__title"
           :class="{'_switchEditElement': !edit}">
        <h1>
          {{text}}
        </h1>
      </div>
    </div>

    <button class="edit-text__btn" type="submit"
            v-if="modeEdit"
            :disabled="!rawText.length"
            :class="{_on: editOn}">
      {{ edit ? "Edit" : "Add" }}
    </button>
  </form>
</template>

<script>
  import editText from '../../mixins/editText';

  export default {
    name: "note-title",
    mixins: [editText]
  }
</script>

<style scoped lang="scss">
  @import "../../assets/scss/shared/_editText";

  .edit-text {
    &__title, &__input {
      font-size: 20px;
      line-height:1.2;
      font-weight: bold;
    }

    &__btn {
      padding: .6rem 1.7rem;
      font-size: 14px;
    }
  }
</style>
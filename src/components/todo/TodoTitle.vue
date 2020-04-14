<template>
  <form class="edit-text" @submit.prevent="addTitle()">
    <div class="edit-text__head">
      <input class="edit-text__input"
             name="title"
             :class="{'_switchEditElement': edit}"
             v-model="rawText"
             placeholder="Enter title and press 'Enter'...">

      <div class="edit-text__title"
           :class="{'_switchEditElement': !edit, _complete: isComplete}">
        <h6>
          {{text}}
        </h6>
      </div>
    </div>

    <button class="edit-text__btn" type="submit"
            v-if="modeEdit"
            :disabled="!rawText.length"
            :class="{_on: editOn, _complete: isComplete}">
      {{ edit ? "Edit" : "Add" }}
    </button>
  </form>
</template>

<script>
  import editText from '../../mixins/editText';

  export default {
    name: "note-title",
    mixins: [editText],
    props: {
      isComplete: Boolean
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/scss/shared/_editText";

  .edit-text {

    &__title._complete {
      text-decoration: line-through;
    }

    &__title, &__input {
      margin-left: -.4rem;
      padding: .6rem .4rem;
      font-size: 13px;
      line-height:1.4;
      font-weight: bold;
    }

    &__btn {
      padding: .6rem 1rem;
      font-size: 12px;

      &._complete {
        background-color: #ccc;
        pointer-events: none;

        &:before, &:after {
          opacity: 0;
          visibility: hidden;
        }
      }
    }
  }
</style>
<template>
  <div class="n-activebar">
    <div class="n-activebar__row">
      <button
         @click="$emit('toggle-edit')"
         class="n-activebar__edit"
         :class="{_on: isEdit}"
      >{{ isEdit ? "Off" : "On" }} Edit
      </button>
      <button
         class="n-activebar__remove"
         @click="$emit('remove-note')"
      >Delete
      </button>
    </div>

    <div class="n-activebar__row" v-if="isEdit">
      <button
         class="n-activebar__do"
         @click="$emit('do')"
      >Do
      </button>
      <button
         class="n-activebar__undo"
         @click="$emit('undo')"
      >Undo
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'n-activebar',
    props: {
      isEdit: Boolean
    }
  }
</script>

<style lang="scss">
  .n-activebar {
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

    &__row {
      display: flex;
      align-items: center;
    }

    button {
      margin-right: 15px;
      font-size: 14px;
      line-height: 1.5;
      padding: .5em 1.6em;
      border-radius: 3px;
      cursor: pointer;
      color: #fff;

      &:last-child {
        margin-right: 0;
      }
    }

    &__edit {
      @include _slide-hover($bgc: $success, $dark: true);

      &._on {
        @include _slide-hover($bgc: $warning, $dark: true);
      }
    }

    &__remove {
      @include _slide-hover($bgc: $danger, $dark: true);
    }

    &__do, &__undo {
      @include _slide-hover($bgc: $primary);
    }
  }
</style>
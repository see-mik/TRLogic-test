<template>
  <div class="bar">
    <div class="_row">
      <button @click="$emit('toggle-edit')"
              class="edit"
              :class="{_on: isEdit}">
        {{ isEdit ? "Off" : "On" }} Edit
      </button>
      <button class="remove" @click="$emit('remove-note')">
        Delete
      </button>
    </div>

    <div class="_row" v-if="isEdit">
      <button class="do" @click="$emit('do')">
        Do
      </button>
      <button class="undo" @click="$emit('undo')">
        Undo
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    props: {
      isEdit: Boolean
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/scss/mixins";

  .bar {
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

    ._row {
      align-items: center;
    }
  }

  button {
    margin-right: 15px;
    font-size: 14px;
    line-height: 1.5;
    padding: .5em 1.6em;
    border-radius: 3px;
    cursor: pointer;

    &:last-child {
      margin-right: 0;
    }

    &.edit {
      @include _slide-hover($bgc: #00bdaa, $dark: true);

      &._on {
        @include _slide-hover($bgc: #ffd868, $dark: true);
      }
    }

    &.remove {
      @include _slide-hover($bgc: #ff5858, $dark: true);
    }

    &.do, &.undo {
      @include _slide-hover($bgc: #4a47a3);
      color: #fff;
    }
  }
</style>
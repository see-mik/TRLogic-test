<template>
  <div class="inner">
    <router-link tag="button"
                 to="/create"
                 class="create">Create
    </router-link>
    <button @click="edit()"
            class="edit"
            :class="{_on: isEdit}">
      {{ isEdit ? "Off" : "On" }} Edit
    </button>
    <button @click="remove()"
            class="remove">Delete
    </button>
  </div>
</template>

<script>
  export default {
    name: '',
    computed: {
      isEdit() {
        return this.$store.getters.getEdit;
      }
    },
    methods: {
      edit() {
        this.$store.commit('changeEdit');
      },
      remove() {
        console.log('remove');
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/scss/mixins";

  .inner {
    justify-content: flex-start;
  }

  button {
    margin-right: 15px;
    font-size: 14px;
    line-height: 1.5;
    padding: .5em 1.6em;
    cursor: pointer;

    &:last-child {
      margin-right: 0;
    }

    &.create {
      @include _slide-hover($bgc: #46b3e6);
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
  }
</style>
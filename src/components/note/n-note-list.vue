<template>
  <div class="n-note-list">
    <n-note
       v-for="note in notes"
       :note="note"
       :key="note.id"
    />
  </div>
</template>

<script>
  import nNote from './n-note.vue';

  export default {
    name: 'n-note-list',
    components: {
      nNote
    },
    props: {
      notes: {
        type: Array,
        required: true,
        default: () => []
      }
    }
  }
</script>

<style lang="scss">
  .n-note-list {
    padding: 1rem 15px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
  }
</style>
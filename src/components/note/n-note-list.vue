<template>
  <div class="n-note-list">
    <n-note
       v-for="(note, idx) in notes"
       :note="note"
       :key="idx"
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
      notes: Array
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
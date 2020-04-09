<template>
  <div class="notes">
    <note
       v-for="(note, idx) in notes"
       :note="note"
       :key="idx"
    >
    </note>
  </div>
</template>

<script>
  import Note from './Note.vue';

  export default {
    name: 'note-list',
    components: {
      Note
    },
    props: {
      notes: Array
    }
  }
</script>

<style scoped lang="scss">
  .notes {
    padding: 1rem 15px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
  }
</style>
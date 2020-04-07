<template>
  <div class="notes">
    <note
       v-for="(note, idx) in noteList"
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
    computed: {
      noteList () {
        return this.$store.getters.getNotes;
      }
    }
  }
</script>

<style scoped lang="scss">
  .notes {
    padding: 1rem 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
  }
</style>
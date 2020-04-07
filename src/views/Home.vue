<template>
  <div>
    <activebar></activebar>

    <note-list></note-list>
  </div>
</template>

<script>
  import Activebar from '../components/Activebar.vue';
  import NoteList from '../components/note/NoteList.vue';

  export default {
    name: '',
    components: {
      Activebar, NoteList
    }
  }
</script>

<style scoped lang="scss">

</style>
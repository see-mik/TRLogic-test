<template>
  <div class="home">
    <div class="_col"
         v-if="notesList.length">
      <note-list
         :notes="notesList">
      </note-list>
    </div>

    <div class="empty"
         v-else="">
      <button class="first-note"
              @click="$router.push('/create')">Create your first Note
      </button>
    </div>
  </div>
</template>

<script>
  import NoteList from '../components/note/NoteList.vue';

  export default {
    name: '',
    components: {
      NoteList
    },
    computed: {
      notesList () {
        return this.$store.getters.getNotes;
      }
    },
  }
</script>

<style scoped lang="scss">
  .home, .empty {
    height: 100%;
  }

  .empty {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .first-note {
    cursor: pointer;
    background-color: cadetblue;
    border: cadetblue solid;
    border-radius: 3px;
    font-size: 24px;
    font-weight: bold;
    color: #d9eeec;
    padding: 1rem;
    animation: shadow 3s ease-in-out 0s infinite;

    &:hover {
      animation: none;
    }

    @-webkit-keyframes shadow {
      0% {
        border-width: 0;
        border-radius: 1px;
        box-shadow: none;
      }
      50% {
        border-width: 15px;
        border-radius: 15px;
        box-shadow: 0 0 15px cadetblue;
      }
      100% {
        border-width: 0;
        border-radius: 1px;
        box-shadow: none;
      }
    }
  }
</style>
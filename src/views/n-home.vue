<template>
  <div class="n-home">
    <div class="n-home__loader" v-if="!NOTES_LOADING">
      <h2>LOADING ...</h2>
    </div>

    <div v-else>
        <n-note-list
           v-if="NOTES.length"
           :notes="NOTES"
        />

      <div class="n-home__empty" v-else>
        <button
           class="n-home__first-note"
           @click="$router.push('/create')"
        >Create your first Note
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import nNoteList from '../components/note/n-note-list.vue';
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'n-home',
    components: {
      nNoteList
    },
    computed: {
      ...mapGetters(['NOTES', 'NOTES_LOADING'])
    },
    methods: {
      ...mapActions(['LOAD_NOTES'])
    },
    created() {
      this.LOAD_NOTES();
    }
  }
</script>

<style lang="scss">
  .n-home {
    height: 100%;

    &__empty {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__first-note {
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
  }
</style>
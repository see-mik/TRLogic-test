<template>
  <div
     class="n-note _col"
     :class="{_active: true}"
  >
    <h2 class="n-note__title">
      <router-link
         :to="`/note/${note.id}`"
         tag="a"
      >{{note.title}}
      </router-link>
    </h2>

    <div class="n-note__info">
      <small>
        Status:
        <span class="n-note__status">{{note.status}}</span>
      </small>
      <small class="date">
        Created:
        {{new Date(note.date).toLocaleDateString()}}
      </small>
    </div>

    <div class="_col">
      <n-todo
         v-for="todo in todoLimit"
         :todo="todo"
         :key="todo.id"
      />
    </div>

    <div class="n-note__footer">
      <router-link
         class="n-note__edit"
         :to="`/note/${note.id}?mode=edit`"
         tag="button"
      >Edit
      </router-link>
      <button
         class="n-note__remove"
         @click="removeNote()"
      >Remove
      </button>
    </div>

    <n-confirmation-popup
       v-if="isConfirmationVisible"
       @onConfirmationApply="applyConfirmationPopup"
       @onConfirmationCancel="closeConfirmationPopup"
    />
  </div>
</template>

<script>
  import nTodo from '../todo/n-todo.vue';
  import nConfirmationPopup from './../features/n-confirmation-popup.vue';

  import { mapActions } from 'vuex';
  import Note from '../../models/Note.model';

  export default {
    name: 'n-note',
    components: {
      nTodo,
      nConfirmationPopup
    },
    data: () => ({
      isConfirmationVisible: false
    }),
    props: {
      note: {
        type: Object,
        default: () => new Note()
      }
    },
    computed: {
      todoLimit() {
        return this.note.todos.slice(0, 5);
      },
    },
    methods: {
      ...mapActions(['REMOVE_NOTE']),

      removeNote() {
        this.isConfirmationVisible = true;
      },
      applyConfirmationPopup() {
        this.REMOVE_NOTE(this.note.id);
        this.isConfirmationVisible =false;
      },
      closeConfirmationPopup() {
        this.isConfirmationVisible = false;
      }
    },
  }
</script>

<style lang="scss">
  .n-note {
    background-color: #fff;
    flex: 0 0 calc(33.3% - 10px);
    margin-right: 15px;
    margin-bottom: 15px;
    border-radius: 3px;
    padding: 25px 18px;
    box-sizing: border-box;
    overflow: hidden;
    border: 1px solid transparent;
    transition: all .2s;

    &:nth-child(3n) {
      margin-right: 0;
    }

    &._active, ._active &__status {
      border-color: #b7efcd;
    }

    &._done, ._done &__status {
      border-color: #434e52;
    }

    &:hover._active {
      box-shadow: 1px 1px 3px rgba(#b7efcd, .6);
    }

    &:hover._done {
      box-shadow: 1px 1px 3px rgba(#434e52, .6);
    }

    &__title {
      margin-bottom: 10px;
      padding-bottom: 5px;
      border-bottom: 1px solid;
      border-color: inherit;
      font-size: 18px;
      line-height: 1.1;
      padding-right: 10px;

      a {
        color: #424874;
        transition: .3s;
        word-break: break-all;

        &:hover {
          color: #1eb2a6;
        }
      }
    }

    &__info {
      display: flex;
      justify-content: space-between;
    }

    &__status {
      text-transform: capitalize;
      border-bottom: 2px solid transparent;
      box-sizing: border-box;
    }

    &__footer {
      opacity: 0;
      visibility: hidden;
      display: flex;
      justify-content: space-between;
      padding-top: 15px;
      border-top: 1px solid #eee;
      transition: all .3s;

      button {
        border-radius: 3px;
        color: #fff;
        font-size: 12px;
        line-height: 1.1;
        padding: .4em .6em;
        cursor: pointer;
      }
    }

    &:hover .n-note__footer {
      opacity: 1;
      visibility: visible;
    }

    &__edit {
      @include _slide-hover($success, $dark: true)
    }

    &__remove {
      @include _slide-hover($danger, $dark: true)
    }
  }
</style>
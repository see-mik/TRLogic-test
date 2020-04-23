import Vue from 'vue';
import firebase from './../../firebase';

Vue.use(firebase);


const state = {
  notes: [],
  isNotesLoaded: false,
};


const getters = {
  NOTES: state => state.notes,
  NOTE_BY_ID: state => id => state.notes.find(n => n.id === id),
  NOTES_LOADING: state => state.isNotesLoaded,
};


const mutations = {
  SET_NOTES(s, notes) {
    s.notes = notes;
  },

  TOGGLE_NOTES_LOAD (state, isNotesLoaded) {
    state.isNotesLoaded = isNotesLoaded;
  },

  // ADD_NOTE(s, note) {
  //   s.notes = [note, ...s.notes];
  //   localStorage.setItem('notesList', JSON.stringify(s.notes));
  // },
  //
  // UPDATE_NOTE(s, note) {
  //   const idx = s.notes.findIndex(n => n.id === note.id);
  //   s.notes[idx] = note;
  //   localStorage.setItem('notesList', JSON.stringify(s.notes));
  // },
  //
  // REMOVE_NOTE(s, id) {
  //   s.notes = s.notes.filter(n => n.id !== id);
  //   localStorage.setItem('notesList', JSON.stringify(s.notes));
  // }
};


const actions = {
  LOAD_NOTES({commit}) {
    firebase.db.ref('/notes').once('value', snapshot => {
      let notes = [];

      snapshot.forEach(child => {
        notes = [
          {
            id: child.key,
            ...child.val()
          },
          ...notes
        ];
      });

      commit('SET_NOTES', notes);
      commit('TOGGLE_NOTES_LOAD', true);
    });
  },

  ADD_NOTE({commit}, note) {
    firebase.db.ref(`/notes/${note.id}`).set(note);
  }

  // UPDATE_NOTE({commit}, note) {
  //   commit('UPDATE_NOTE', note);
  // },
  //
  // REMOVE_NOTE({commit}, id) {
  //   commit('REMOVE_NOTE', id);
  // }
};


export default {
  state, getters, mutations, actions
};

import Vue from 'vue';
import firebase from './../firebase';

Vue.use(firebase);

export default {
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

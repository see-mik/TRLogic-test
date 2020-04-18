import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
  notes: JSON.parse(localStorage.getItem('notesList') || '[]'),
  editOnHome: false
};


const getters = {
  getNotes: s => s.notes,
  getEdit: s => s.editOnHome,
  getNoteById: s => id => s.notes.find(n => n.id === id)
};


const mutations = {
  addNote(s, note) {
    s.notes = [note, ...s.notes];
    localStorage.setItem('notesList', JSON.stringify(s.notes));
  },

  updateNote(s, note) {
    const idx = s.notes.findIndex(n => n.id === note.id);
    s.notes[idx] = note;
    localStorage.setItem('notesList', JSON.stringify(s.notes));
  },

  changeEdit(s, edit) {
    s.editOnHome = edit && typeof(edit) === 'boolean' ? edit : !s.editOnHome;
  },

  removeNote(s, id) {
    s.notes = s.notes.filter(n => n.id !== id);
    localStorage.setItem('notesList', JSON.stringify(s.notes));
  }
};


const actions = {
  addNote({commit}, note) {
    commit('addNote', note);
  },

  updateNote({commit}, note) {
    commit('updateNote', note);
  },

  removeNote({commit}, id) {
    commit('removeNote', id);
  }
};


export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
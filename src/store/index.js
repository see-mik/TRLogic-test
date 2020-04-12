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

  changeEdit(s, edit) {
    s.editOnHome = edit && typeof(edit) === 'boolean' ? edit : !s.editOnHome;
  },

  todoToggle(s, {id, todoId}) {
    const idx = s.notes.findIndex(n => n.id === id);
    let note = s.notes[idx];

    const todoIdx = note.todos.findIndex(t => t.id === todoId);
    let todo = note.todos[todoIdx];

    todo.complete = !todo.complete;
    note.todos[todoIdx] = todo;
    s.notes[idx] = note;
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

  todoToggle({commit}, payload) {
    commit('todoToggle', payload);
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
export default {
  ADD_NOTE({commit}, note) {
    commit('ADD_NOTE', note);
  },

  UPDATE_NOTE({commit}, note) {
    commit('UPDATE_NOTE', note);
  },

  REMOVE_NOTE({commit}, id) {
    commit('REMOVE_NOTE', id);
  }
};

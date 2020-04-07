import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  notes: [
    {
      id: '1',
      title: 'First',
      todos: [
        {id: '1', description: 'Lorem ipsum dolor sit amet.', complete: false},
        {id: '2', description: 'Lorem ipsum dolor sit amet.', complete: false},
        {id: '3', description: 'Lorem ipsum dolor sit amet.', complete: false}
      ]
    },
    {
      id: '2',
      title: 'First',
      todos: [
        {id: '4', description: 'Lorem ipsum dolor sit amet.', complete: false},
        {id: '5', description: 'Lorem ipsum dolor sit amet.', complete: false},
        {id: '6', description: 'Lorem ipsum dolor sit amet.', complete: false}
      ]
    },
    {
      id: '3',
      title: 'First',
      todos: [
        {id: '7', description: 'Lorem ipsum dolor sit amet.', complete: false},
        {id: '8', description: 'Lorem ipsum dolor sit amet.', complete: false},
        {id: '9', description: 'Lorem ipsum dolor sit amet.', complete: false}
      ]
    }
  ]

};
const getters = {
  getNotes: (s) => s.notes
};
const mutations = {};
const actions = {};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
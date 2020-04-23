const state = {
  jwt: null
};

const getters = {
  GET_JWT: state => state.jwt
};

const mutations = {
  SET_JWT(state, jwt) {
    state.jwt = jwt;
  }
};

const actions = {
  SET_JWT ({commit}, jwt) {
    commit('SET_JWT', jwt);
  }
};


export default {
  state, getters, mutations, actions
};
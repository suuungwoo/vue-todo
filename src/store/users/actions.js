import * as types from './mutationType';

export default {
  addUser({ commit }, value) {
    commit(types.createUser, value);
  },
};

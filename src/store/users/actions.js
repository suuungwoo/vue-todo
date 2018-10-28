import * as types from '../mutationType';

export default {
  addUser({ commit }, value) {
    // commit(mutation, 値);
    commit(types.createUser, value);
  },
};

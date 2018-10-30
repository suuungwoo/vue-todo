import * as types from '../mutationType';

export default {
  addUser({ state, commit }, value) {
    value.id = state.nextID;
    // commit(mutation, 値);
    commit(types.createUser, value);
  },
};

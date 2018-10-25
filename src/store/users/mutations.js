import * as types from './mutationType';

export default {
  [types.createUser](state, payload) {
    state.users.push(payload);
  },
};

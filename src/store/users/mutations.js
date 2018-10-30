import * as types from '../mutationType';

export default {
  // stateは、参照渡しです。
  //  元の値をコピーではなく、stateの値を直接変更します。
  [types.createUser](state, payload) {
    state.users.push(payload);
  },
};

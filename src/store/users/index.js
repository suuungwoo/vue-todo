import getters from './getters';
import mutations from './mutations';
import actions from './actions';

export default {
  namespaced: true,
  state: {
    users: [{ id: 1, name: 'hoge', age: 15 }, { id: 2, name: 'あああ', age: 23 }],
  },
  getters,
  mutations,
  actions,
};

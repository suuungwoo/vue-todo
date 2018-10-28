import getters from './getters';
import mutations from './mutations';
import actions from './actions';

export default {
  // 名前空間を分けます。modulesで定義した名前空間で分けられます。
  //  この場合だと、"user"という名前空間で分けられます。
  //   デフォルトでは、全て同一の名前空間に登録されます。
  namespaced: true,

  // 状態を定義します。
  state: {
    users: [
      { id: 1, name: 'hoge', age: 15 },
      { id: 2, name: 'あああ', age: 23 },
    ],
  },
  getters,
  mutations,
  actions,
};

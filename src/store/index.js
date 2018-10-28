import Vue from 'vue';
import Vuex from 'vuex';
import users from './users';

Vue.use(Vuex); // Vuexを使うことを宣言します

// ストアを作成する
const store = new Vuex.Store({
  // モジュールを分割することによって管理しやすくします。
  modules: {
    users,
  },
});

export default store;

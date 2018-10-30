<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <form @submit.prevent="addUser(form)" style="padding: 32px 20px">
      名前: <input type="text" v-model.trim="form.name">
      年齢: <input type="text" v-model.trim="form.age">
      <input type="submit">
    </form>

    <table border="1">
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
      </tr>
      <!-- for文です -->
      <tr v-for="(user, index) in users" :key="index">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.age }}</td>
      </tr>
    </table>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import { mapGetters, mapActions } from 'vuex';


export default {
  name: 'home',
  components: {
    HelloWorld,
  },
  data() {
    return {
      users: '',
      form: {
        name: '',
        age: '',
      },
    };
  },
  // 算出関数を定義します
  //  computedでは、returnを必ず返すようにしないといけません。
  //   Vueでよく使われる機能の１つです。
  computed: {
    // mapGettersは、computedで定義します。
    //  mapGetters("名前空間名", ["gettersで定義した関数名"]
    ...mapGetters('users', [
      'getUsers',
      'getUser',
    ]),
  },
  // vueインスタンスが作成された時に、発火します。
  created() {
    this.users = this.getUsers; // 下の書き方でもかけますが、オススメできません。
  },

  // methodsはeventや処理をする関数を定義します。
  // Vueでよく使われる機能の１つです。
  methods: {
    // mapActions("名前空間名", ["actionsで定義した関数名"])
    ...mapActions('users', ['addUser']),
  },

};
</script>

<template>
  <div class="home">
    <myheader msg="Home" />
    <HelloWorld @update-msg="updateMsg" v-model="myMessage" />
    {{myMessage}}
    <div>
      {{message}}
    </div>
    <div>
      {{reversedMessage}}
    </div>
    <form @submit.prevent="addUser(form)" style="padding: 32px 20px">
      ID: <input type="text">
      名前: <input type="text">
      年齢: <input type="text">
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
import { mapGetters, mapActions } from 'vuex';
import HelloWorld from '@/components/HelloWorld.vue';
import myheader from '@/components/myheader.vue';


export default {
  name: 'home',
  components: {
    HelloWorld,
    myheader,
  },
  data() {
    return {
      myMessage: {
        text: '初期値',
      },
      message: 'Hello',
      users: '',
      form: {
        id: '',
        name: '',
        age: '',
      },
    };
  },
  methods: {
    updateMsg(newMsg) {
      this.myMessage = newMsg;
    },
    ...mapActions('users', ['addUser']),

  },
  computed: {
    reversedMessage() {
      return this.message.split('').reverse().join('');
    },
    ...mapGetters('users', [
      'getUsers',
      'getUser',
    ]),
  },
  created() {
    this.users = this.getUsers;
  },

};
</script>


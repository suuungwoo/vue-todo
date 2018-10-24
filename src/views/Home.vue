<template>
  <div class="home">
    <myheader msg="Home" />
    <!-- <enhanced :my-message="myMessage" @update-msg="updateMsg" /> -->
    <HelloWorld @update-msg="updateMsg" v-model="myMessage" />
    {{myMessage}}
  </div>

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import enhanced from '@/components/enhance';
import myheader from '@/components/myheader.vue';


export default {
  name: 'home',
  components: {
    HelloWorld,
    enhanced,
    myheader,
  },
  data() {
    return {
      myMessage: {
        text: '初期値',
      },
    };
  },
  methods: {
    updateMsg(newMsg) {
      this.myMessage = newMsg;
    },
  },

};
</script>


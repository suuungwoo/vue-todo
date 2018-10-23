<template>
  <div class="hello">
    <myheader/>
    <p v-if="msg.length > 0">{{ msg }}</p>
    <p v-else>no texts</p>
      <button @click="addTodo()">add todo</button>
      <button @click="removeTodo()">delete finished todos</button>
      <p>input: <input type="text" v-model="newTodo"> </p>
      <p>todo: {{newTodo}} </p>
     <div class="todo-list">
       <label class="todo-list__item" v-for="todo in todos" :key="todo.id" v-bind:class=" {'todo-list__item--checked': todo.done} ">
         <input type="checkbox" v-model="todo.done">
         <input v-if="todo.editing" v-model="todo.text" @keyup.enter="todo.editing = !todo.editing">
        <span v-else>{{todo.text}}</span>
         <input type="button" @click="todo.editing = !todo.editing">
       </label>
    </div>
    <input type="text" v-model="msg">
    <button @click="clear()">clear</button>
  </div>
</template>

<script>
import myheader from './myheader.vue';


export default {
  name: 'HelloWorld',
  components: {
    myheader,
  },
  data() {
    return {
      todos: [
        {
          id: 1, text: 'vue-router', done: false, editing: false,
        },
        {
          id: 2, text: 'vuex', done: false, editing: false,
        },
        {
          id: 3, text: 'vue-loader', done: false, editing: false,
        },
        {
          id: 4, text: 'awesome-vue', done: true, editing: false,
        },
      ],
      newTodo: '',
    };
  },
  props: {
    msg: String,
  },
  methods: {
    clear() {
      this.msg = '';
    },
    addTodo() {
      const text = this.newTodo && this.newTodo.trim();
      if (!text) {
        return;
      }
      this.todos.push({
        text,
        done: false,
        edinting: false,
      });
      this.newTodo = '';
    },
    removeTodo() {
      for (let i = this.todos.length - 1; i >= 0; i--) {
        if (this.todos[i].done) this.todos.splice(i, 1);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

@mixin flex-vender() {
  display: flex;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
}
.todo-list {
  @include flex-vender;
  flex-direction: column;
  align-items: center;
  &__item {
    width: 270px;
    text-align: left;
    $element: #{&};
    &--checked {
      @extend #{$element};
      color: #85a6c6;
    }
  }
}
</style>

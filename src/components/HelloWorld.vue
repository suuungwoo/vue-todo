<template>
  <div class="hello">
    <button @click="addTodo()">Todoを追加</button>
    <button @click="removeTodo()">完了したTodoを一括削除</button>
    <p>input: <input type="text" v-model="newTodo"> </p>
    <p>todo: {{newTodo}} </p>
    <div class="todo-list">
      <label class="todo-list__item" v-for="todo in todos" :key="todo.id" :class="{'todo-list__item--checked': todo.done}">
        <input type="checkbox" v-model="todo.editing">
        <input v-if="todo.editing" v-model="todo.text" @keyup.enter="todo.editing = !todo.editing">
        <span v-else>{{todo.text}}</span>
        <input type="checkbox" v-model="todo.done">
      </label>
    </div>

    <p>{{myMessage}}</p>
    <input type="text" v-model="text">
    <button @click="handleUpdateMsg">Update</button>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data() {
    return {
      todos: [],
      newTodo: '',
      text: '',
    };
  },
  props: {
    myMessage: String,
  },
  updated() {
    this.$emit('input', {
      text: this.text,
    });
  },
  mounted() {
    this.text = this.value.text;
  },
  methods: {
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

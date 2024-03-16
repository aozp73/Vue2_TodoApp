<template>
  <div id="app" class="container">
    <h1 class="text-center">Todo App</h1>
    <input
      v-model="todoText"
      type="text"
      class="w-100 p-2"
      placeholder="Type todo"
      @keyup.enter="addTodo"
    />
    <hr />
    <Todo v-for="todo in todos" :key="todo.id" :todo="todo" />
  </div>
</template>

<script>
import Todo from "@/components/TodoComponent.vue";

export default {
  components: {
    Todo,
  },
  data() {
    return {
      todoText: "",
      todos: [
        { id: 1, text: "buy a book", checked: false },
        { id: 2, text: "play game", checked: false },
      ],
    };
  },
  methods: {
    addTodo(e) {
      this.todos.push({
        id: Math.random(),
        text: e.target.value,
        checked: false,
      });
      this.todoText = "";
    },
  },
};
</script>

<style></style>

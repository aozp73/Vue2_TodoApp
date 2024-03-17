<template>
  <div id="app" class="container">
    <h1 class="text-center">Todo App</h1>
    <CompletedTodo :todos="todos" />
    <AddTodo @add-todo="addTodo" />
    <hr />
    <TodoList
      :todos="todos"
      @toggle-checkbox="toggleCheckeBox"
      @click-delete="deleteTodo"
    />
    {{ todos }}
  </div>
</template>

<script>
import TodoList from "@/components/TodoListComponent.vue";
import AddTodo from "@/components/AddTodoComponent.vue";
import CompletedTodo from "@/components/CompletedTodoComponent.vue";

export default {
  components: {
    TodoList,
    AddTodo,
    CompletedTodo,
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
    deleteTodo(id) {
      // const index = this.todos.findIndex((todo) => {
      //   return todo.id === id;
      // });
      // this.todos.splice(index, 1);
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    addTodo(value) {
      this.todos.push({
        id: Math.random(),
        text: value,
        checked: false,
      });
      this.todoText = "";
    },
    toggleCheckeBox({ id, checked }) {
      const index = this.todos.findIndex((todo) => {
        return todo.id === id;
      });
      this.todos[index].checked = checked;
    },
  },
};
</script>

<style></style>

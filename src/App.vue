<template>
  <div id="app" class="container">
    <h1 class="text-center">Todo App</h1>
    <CompletedTodo />
    <AddTodo />
    <hr />
    <TodoList />
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
    };
  },
  methods: {
    // deleteTodo(id) {
    //   const index = this.todos.findIndex((todo) => todo.id !== id);
    //   this.todos.splice(index, 1);
    // },
    // addTodo(value) {
    //   this.todos.push({
    //     id: Math.random(),
    //     text: value,
    //     checked: false,
    //   });
    //   this.todoText = "";
    // },
    // toggleCheckeBox({ id, checked }) {
    //   const index = this.todos.findIndex((todo) => {
    //     return todo.id === id;
    //   });
    //   this.todos[index].checked = checked;
    // },
  },
};
</script>

<style></style>

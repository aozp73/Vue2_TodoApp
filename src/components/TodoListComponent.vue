<template>
  <div>
    <TodoComponent
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @toggle-checkbox="toggleCheckeBox"
      @click-delete="deleteTodo"
    />
  </div>
</template>

<script>
import TodoComponent from "@/components/TodoComponent.vue";

export default {
  components: {
    TodoComponent,
  },
  computed: {
    todos() {
      return this.$store.state.todo.todos;
    },
  },
  methods: {
    toggleCheckeBox(value) {
      this.$emit("toggle-checkbox", value);
    },
    deleteTodo(todoId) {
      this.$emit("click-delete", todoId);
    },
  },
};
</script>

<style></style>

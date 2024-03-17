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
  props: {
    todos: {
      type: Array,
      required: true,
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

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      { id: 1, text: "buy a book", checked: false },
      { id: 2, text: "play game", checked: false },
    ],
  },
  mutations: {
    ADD_TODO(state, value) {
      state.todos.push({
        id: Math.random(),
        text: value,
        checked: false,
      });
    },
    TOGGLE_TODO(state, { id, checked }) {
      const index = state.todos.findIndex((todo) => {
        return todo.id === id;
      });
      state.todos[index].checked = checked;
    },
    DELETE_TODO(state, todoID) {
      const index = state.todos.findIndex((todo) => todo.id !== todoID);
      state.todos.splice(index, 1);
    },
  },
  actions: {},
  getters: {},
});

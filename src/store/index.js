import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      { id: 1, text: "buy a book", checked: false },
      { id: 2, text: "play game", checked: false },
    ],
    users: [],
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
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
    DELETE_TODO(state, todoId) {
      const index = state.todos.findIndex((todo) => todo.id !== todoId);
      state.todos.splice(index, 1);
    },
  },
  actions: {
    getUsers({ commit }) {
      axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
        // 비동기 처리
        commit("SET_USERS", res.data);
      });
    },
    addTodo({ commit }, value) {
      // 비동기 작업 수행 (axiox.post() 등)
      setTimeout(function () {
        commit("ADD_TODO", value);
      }, 1000);
    },
    toogleTodo({ commit }, payload) {
      setTimeout(function () {
        commit("TOGGLE_TODO", payload);
      }, 1000);
    },
    deleteTodo({ commit }, todoId) {
      setTimeout(function () {
        commit("DELETE_TODO", todoId);
      }, 1000);
    },
  },
  getters: {},
});

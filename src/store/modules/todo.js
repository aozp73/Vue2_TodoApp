export default {
  namespaced: true,
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
    DELETE_TODO(state, todoId) {
      const index = state.todos.findIndex((todo) => todo.id !== todoId);
      state.todos.splice(index, 1);
    },
  },
  actions: {
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
  getters: {
    numberOfCompletedTodo: (state) => {
      return state.todos.filter((todo) => todo.checked).length;
    },
  },
};

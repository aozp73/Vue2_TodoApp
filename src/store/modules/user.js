import axios from "axios";

export default {
  namespaced: true,
  state: {
    users: [],
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
  },
  actions: {
    getUsers({ commit }) {
      axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
        // 비동기 처리
        commit("SET_USERS", res.data);
      });
    },
  },
};

import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import { createStore } from 'vuex';

const store = createStore({
  state: () => ({
    userList: [],
    selectedUser: null,
    isLoading: false
  }),
  mutations: {
    setUserList(state, userList) {
      state.userList = userList;
    },
    setSelectedUser(state, selectedUser) {
      state.selectedUser = selectedUser;
    },
    setIsLoading(state, isLoading) {
      state.isLoading = isLoading;
    }
  },
  actions: {
    setUserList(state, userList) {
      this.commit('setUserList', userList);
      this.commit('setSelectedUser', null);
    },
    setSelectedUser(state, selectedUser) {
      this.commit('setSelectedUser', selectedUser);
    },
    setIsLoading(state, isLoading) {
      this.commit('setIsLoading', isLoading);
    },
    async searchUser(state, searchValue) {
      try {
        this.commit('setIsLoading', true);
          const url = new URL('https://jsonplaceholder.typicode.com/users');
          const split = searchValue.split(/,/g).map((x) => x.trim());
          for (const value of split) {
            if (!isNaN(+value)) url.searchParams.append('id', value);
            else url.searchParams.append('username_like', value);
          }
          const res = await fetch(url);
          if (!res.ok) {
            throw new Error(res.status, res.statusText);
          }
          const data = await res.json();
          this.commit('setUserList', data);
        } catch (e) {
          alert('Ошибка запроса: ', e);
        } finally {
        this.commit('setIsLoading', false);
      }
    }
  }
});

const app = createApp(App);
app.use(store);
app.mount('#app');

import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import { createStore } from 'vuex';

const store = createStore({
  state: () => ({
    userList: [],
    selectedUser: null
  }),
  mutations: {
    setUserList(state, userList) {
      state.userList = userList;
    },
    setSelectedUser(state, selectedUser) {
      state.selectedUser = selectedUser;
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
    async searchUser(state, searchValue) {
      const url = new URL('https://jsonplaceholder.typicode.com/users');
      const split = searchValue.split(/,/g).map((x) => x.trim());
      for (const value of split) {
        if (!isNaN(+value)) url.searchParams.append('id', value);
        else url.searchParams.append('username_like', value);
      }
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      this.commit('setUserList', data);
    }
  }
});

const app = createApp(App);
app.use(store);
app.mount('#app');

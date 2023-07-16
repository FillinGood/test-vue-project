<script setup>
import { useStore } from 'vuex';
import TextLabel from './TextLabel.vue';
import TextBox from './TextBox.vue';
import UserList from './UserList.vue';

const store = useStore();
function onSearchChange(e) {
  store.dispatch('searchUser', e.target.value);
}
</script>

<template>
  <div class="sidebar">
    <TextLabel class="label" bold color="black">Поиск сотрудников</TextLabel>
    <TextBox class="text-box" @change="onSearchChange" />
    <TextLabel class="label" bold color="black">Результаты</TextLabel>
    <UserList />
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  padding-top: 20px;
  height: 100%;

  .label {
    margin-bottom: 15px;
    font-size: 16px;
  }

  .text-box {
    width: 100%;
    padding: 15px;
    margin-bottom: 25px;
  }
}
</style>

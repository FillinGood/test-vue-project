<script setup>
import { useStore } from 'vuex';
import UserCard from './UserCard.vue'
import TextLabel from './TextLabel.vue'

const store = useStore();
</script>

<template>
  <div v-if="!store.state.userList?.length">
    <TextLabel>Ничего не найдено</TextLabel>
  </div>
  <ol v-else>
    <li v-for="user of store.state.userList" :key="user.id">
      <UserCard :user="user" />
    </li>
  </ol>
</template>

<style lang="scss" scoped>
ol {
  list-style-type: none;
  padding-left: 0px;

  li {
    width: 100%;
    margin-bottom: 10px;
  }
}
</style>

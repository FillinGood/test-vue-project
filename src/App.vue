<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import TextLabel from './components/TextLabel.vue'
import SidebarUserSearch from './components/SidebarUserSearch.vue'
import SelectedUser from './components/SelectedUser.vue'

const store = useStore();
const user = computed(()=>store.state.selectedUser);
</script>

<template>
  <header>
    <TextLabel bold class="logo">Жилфонд</TextLabel>
    <TextLabel class="user">Пользователь</TextLabel>
  </header>

  <main>
    <SidebarUserSearch class="sidebar" />
    <div v-if="user">
      <SelectedUser />
    </div>
    <TextLabel class="user-not-selected" v-else>Выберите сотрудника, чтобы посмотреть его профиль</TextLabel>
  </main>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;

  .logo {
    color: hsl(358, 78%, 51%);
    font-size: 32px;
  }
}

main {
  display: flex;
  flex: 1;
  border-radius: 5px;
  background-color: hsl(0, 0%, 99%);
  box-shadow: 0px 0px 10px hsla(0, 0%, 0%, 0.2);
  width: 100%;

  .sidebar {
    min-width: 20%;
    max-width: 20%;
    border-right: 1px solid hsl(0, 0%, 88%);
    padding: 40px 30px 50px 20px;
  }

  .user-not-selected {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
  }
}
</style>

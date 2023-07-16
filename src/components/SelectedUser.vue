<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import UserImage from './UserImage.vue';
import TextLabel from './TextLabel.vue';

const store = useStore();
const user = computed(() => store.state.selectedUser);
</script>

<template>
  <div class="selected-user">
    <div class="selected-user--image-container">
    <UserImage class="selected-user--image" src="./src/assets/placeholderImage700x500.png" />
  </div>
    <div class="selected-user--info">
      <TextLabel class="selected-user--info-name" bold>{{ user.name }}</TextLabel>
      <div>
        <TextLabel class="selected-user--info-email" bold>email:</TextLabel>
        <TextLabel>{{ user.email }}</TextLabel>
      </div>
      <div>
        <TextLabel class="selected-user--info-name" bold>phone:</TextLabel>
        <TextLabel>{{ user.phone }}</TextLabel>
      </div>
      <TextLabel bold>О себе:</TextLabel>
      <TextLabel
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.</TextLabel
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.selected-user {
  display: flex;
  padding: 30px 15px;
  gap: 70px;

  .selected-user--image-container {
    height: 100%;
    flex: 1;

  .selected-user--image {
    border: 1px solid hsl(0, 0%, 88%);
    width: 100%;
  }
  }

  .selected-user--info {
    flex: 1;
  }
}
</style>

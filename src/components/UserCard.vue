<script setup>
import { useStore } from 'vuex';
import UserCardImage from './UserCardImage.vue';
import TextLabel from './TextLabel.vue';

const props = defineProps({
  user: {
    type: Object
  }
});

const store = useStore();
function selectUser() {
  store.dispatch('setSelectedUser', props.user);
}
</script>

<template>
  <div
    :class="{ card: true, selected: store.state.selectedUser?.id == user.id }"
    @click="selectUser"
  >
    <UserCardImage class="image" src="./src/assets/placeholderImage500x500.png" />
    <div class="user-info">
      <TextLabel bold>{{ user.username }}</TextLabel>
      <TextLabel class="email">{{ user.email }}</TextLabel>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  border-radius: 15px;
  box-shadow: 0px 0px 10px hsla(0, 0%, 0%, 0.2);
  display: inline-flex;
  border: 2px solid transparent;
  width: 100%;

  .image {
    background-size: contain;
    background-repeat: no-repeat;
    padding: 0px;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    height: 70px;
    width: 70px;
  }

  .user-info {
    background-color: hsl(0, 0%, 100%);
    padding: 7px;
    border-left: 2px solid hsl(0, 0%, 88%);
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    font-size: 14px;

    .email {
      word-break: break-all;
    }
  }

  &:hover {
    border-color: hsl(0, 0%, 88%);
  }
  &.selected {
    border-color: hsl(0, 0%, 88%);
    background-color: hsl(0, 0%, 88%);
    .user-info{
    background-color: hsl(0, 0%, 88%);
    }
  }
}
</style>

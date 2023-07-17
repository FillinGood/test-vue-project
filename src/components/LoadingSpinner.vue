<script setup></script>

<template>
  <div class="loading-spinner"></div>
</template>

<style lang="scss" scoped>
.loading-spinner {
  position: relative;
  top: 50%;
  left: 50%;
  z-index: 1;
  width: 40px;
  height: 40px;
  background-repeat: no-repeat;
  background-size: contain;
  animation: spinnerAnimation 0.6s infinite linear;
  background-image: url('../assets/spinner-icon.svg');
}
@keyframes spinnerAnimation {
  0% {
    transform: translate(-50%, -50%) rotate(0);
  }

  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>

<script setup>
defineProps({
  bold: {
    type: Boolean,
    required: false
  },
  color: {
    type: String,
    required: false
  }
})
</script>

<template>
  <div :class="{ label: true, bold }" :style="`color: ${color};`">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.label {
  font-family: Montserrat;
  color: hsl(0, 0%, 50%);
}

.bold {
  font-weight: 600;
  color: hsl(0, 0%, 20%);
}
</style>

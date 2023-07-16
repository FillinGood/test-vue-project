<script setup>
 defineProps ({
  src: {
    type: String,
    reqared: true
  }
 })
</script>

<template>
<img :src="src" />
</template>

<style lang="scss" scoped>
</style>

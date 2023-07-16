<script setup>
 defineProps ({
  src: {
    type: String,
    reqared: true
  }
 })
</script>

<template>
<div :style="`background-image: url('${src}')`" ></div>
</template>

<style lang="scss" scoped>
</style>

<script setup>
 
</script>

<template>
<input @change="(e)=>$emit('change', e)" placeholder="Введите id или имя">
</template>

<style lang="scss" scoped>
input {
  border-radius: 15px;
  border: 2px solid hsl(210, 15%, 95%);
  min-height: 50px;
  font-family: Montserrat;
  color: hsl(0, 0%, 50%);

  &:focus {
      outline: none;
    }

  &::placeholder {
    opacity: 1;
  }
}
</style>

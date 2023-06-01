<script setup lang="ts">
  defineProps<{ msg: String }>();
</script>

<template>
  <header>
    <h1>{{ msg }}</h1>
  </header>
</template>

<style scoped>
  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
  }
</style>

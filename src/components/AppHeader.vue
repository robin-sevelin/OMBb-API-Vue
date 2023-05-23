<script setup lang="ts">
  defineProps<{ msg: String }>();
  const isTrue = true;
</script>

<template>
  <header>
    <h1 :class="{ red: isTrue, blue: !isTrue }">{{ msg }}</h1>
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
  .red {
    color: red;
  }

  .blue {
    color: blue;
  }
</style>

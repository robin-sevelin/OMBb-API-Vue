<script setup lang="ts">
  import axios from 'axios';

  defineProps<{ msg: string }>();

  const fetchApi = async () => {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=8b10bddd&/`
    );

    console.log(response);
  };
</script>

<template>
  <h1>{{ msg }}</h1>

  <button @click="fetchApi">Skicka</button>
</template>

<style scoped></style>

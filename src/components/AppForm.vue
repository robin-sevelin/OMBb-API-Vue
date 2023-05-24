<script setup lang="ts">
  import { ref } from 'vue';

  const input = ref('');

  const emits = defineEmits<{ (e: 'search', text: string): void }>();

  const handleClick = () => {
    emits('search', input.value);
    input.value = '';
  };
</script>

<template>
  <div class="form-container">
    <form @submit.prevent="handleClick">
      <input type="text" placeholder="movie title" v-model="input" />
      <div class="button-container"><button>Search</button></div>
    </form>
  </div>
</template>

<style scoped>
  .form-container {
    margin: auto;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 2rem;
  }

  .button-container {
    padding-top: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  button {
    height: 50px;
    width: 75px;
    border-radius: 10px;
    color: black;
  }

  button:hover {
    cursor: pointer;
    background-color: black;
    color: aliceblue;
    transition: 0.3s ease-in-out;
  }
</style>

<script setup lang="ts">
  import { IMovie } from './models/IMovie';
  import axios from 'axios';
  import { onMounted, ref } from 'vue';
  import { IResponse } from './models/IResponse';
  import AppMovie from './AppMovie.vue';

  const movies = ref<IMovie[]>([]);

  const input = ref('');

  onMounted(() => {
    const searchText = localStorage.getItem('searchText') || 'harry';
    axios
      .get('https://www.omdbapi.com/?apikey=8b10bddd&s=' + searchText)
      .then((response) => {
        movies.value = response.data.Search;
      });
  });

  const fetchApi = async () => {
    const response = await axios.get<IResponse>(
      'https://www.omdbapi.com/?apikey=8b10bddd&s=' + input.value
    );

    movies.value = response.data.Search;
    localStorage.setItem('searchText', input.value);
    input.value = '';
  };
</script>

<template>
  <div class="form-container">
    <form @submit.prevent="fetchApi">
      <input type="text" placeholder="movie title" v-model="input" />
      <div class="button-container"><button>Search</button></div>
    </form>
  </div>
  <div class="movies-container">
    <AppMovie :movie="movie" v-for="movie in movies" :key="movie.imdbID" />
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

  .movies-container {
    margin: auto;
    display: flex;
    flex-direction: row;
    max-width: 1600px;
    flex-wrap: wrap;
    gap: 2rem;
    padding-bottom: 150px;
    align-items: center;
    justify-content: center;
  }
</style>

<script setup lang="ts">
  import axios from 'axios';
  import { IMovie } from './models/IMovie';
  import { ref } from 'vue';
  import { IResponse } from './models/IResponse';

  const input = ref('');
  const movies = ref<IMovie[]>([]);

  const fetchApi = async () => {
    const response = await axios.get<IResponse>(
      'http://www.omdbapi.com/?apikey=8b10bddd&s=' + input.value
    );

    movies.value = response.data.Search;
  };
</script>

<template>
  <main>
    <div class="form-container">
      <form @submit.prevent="fetchApi">
        <input type="text" placeholder="search" v-model="input" />
        <button>Search</button>
      </form>
    </div>

    <div class="movies-container">
      <div class="movie" v-for="movie in movies">
        <h2>{{ movie.Title }}, {{ movie.Year }}</h2>
        <img :src="movie.Poster" alt="" />
      </div>
    </div>
  </main>
</template>

<style scoped>
  .form-container {
    margin: auto;
    max-width: 500px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 2rem;
  }
  .movies-container {
    margin: auto;
    display: flex;
    max-width: 1000px;
    flex-wrap: wrap;
    gap: 2rem;
    padding-bottom: 150px;
  }
  .movie {
    max-width: 300px;
    display: flex;
    flex-direction: column;
  }
</style>

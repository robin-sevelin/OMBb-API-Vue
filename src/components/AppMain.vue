<script setup lang="ts">
  import axios from 'axios';
  import { IMovie } from './models/IMovie';
  import { ref } from 'vue';
  import { IResponse } from './models/IResponse';

  const input = ref('');
  const movies = ref<IMovie[]>([]);

  const fetchApi = async () => {
    const response = await axios.get<IResponse>(
      'https://www.omdbapi.com/?apikey=8b10bddd&s=' + input.value
    );

    movies.value = response.data.Search;
    input.value = '';
  };
</script>

<template>
  <main>
    <div class="form-container">
      <form @submit.prevent="fetchApi">
        <input type="text" placeholder="movie title" v-model="input" />
        <div class="button-container"><button>Search</button></div>
      </form>
    </div>

    <div class="movies-container">
      <div class="movie" v-for="movie in movies">
        <h3>{{ movie.Title }}, {{ movie.Year }}</h3>
        <img :src="movie.Poster" :alt="movie.Title" />
        <a href="#">Read more</a>
      </div>
    </div>
  </main>
</template>

<style scoped>
  .form-container {
    margin: auto;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 2rem;
    max-width: 500px;
  }

  .button-container {
    padding-top: 1rem;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .movies-container {
    margin: auto;
    display: flex;
    justify-content: center;
    max-width: 1600px;
    flex-wrap: wrap;
    gap: 2rem;
    padding-bottom: 150px;
  }
  .movie {
    max-width: 300px;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    justify-content: center;
    align-items: center;
  }

  H3 {
    padding-bottom: 1rem;
  }

  img {
    padding-top: 2rem;
    padding-bottom: 2rem;
    height: 400px;
    width: 250px;
  }

  button {
    height: 50px;
    width: 75px;
    border-radius: 10px;
  }

  button:hover {
    cursor: pointer;
    background-color: black;
    color: aliceblue;
    transition: 0.3s ease-in-out;
  }
</style>

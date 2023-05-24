<script setup lang="ts">
  import { IMovie } from '../models/IMovie';
  import { onMounted, ref } from 'vue';
  import { getMovies } from '../services/OmdbService';
  import AppMovie from './AppMovie.vue';
  import AppForm from './AppForm.vue';

  const movies = ref<IMovie[]>([]);

  onMounted(() => {
    const searchText = localStorage.getItem('searchText') || 'harry';
    getMovies(searchText).then((moviesFromApi) => {
      movies.value = moviesFromApi;
    });
  });

  const searchMovies = async (searchText: string) => {
    movies.value = await getMovies(searchText);
    localStorage.setItem('searchText', searchText);
  };
</script>

<template>
  <AppForm @search="searchMovies" />
  <div class="movies-container">
    <AppMovie :movie="movie" v-for="movie in movies" />
  </div>
</template>

<style scoped>
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

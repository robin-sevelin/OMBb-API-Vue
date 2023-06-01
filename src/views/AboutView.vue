<script setup lang="ts">
  import { useRoute } from 'vue-router';
  import { IMovieExt } from '../models/IMovieEtx';
  import { onMounted, ref } from 'vue';
  import { getMovieById } from '../services/OmdbService';

  const route = useRoute();

  const movie = ref<IMovieExt>();

  onMounted(() => {
    getMovieById(route.params.id.toString()).then((movieFromApi) => {
      movie.value = movieFromApi;
    });
  });
</script>
…

<template>
  <div class="about">
    <h3>{{ movie?.Title }}</h3>
    <p>{{ movie?.Plot }}</p>
    <p>Runtime: {{ movie?.Runtime }}</p>
    <p>Genre: {{ movie?.Genre }}</p>
    <p>Year: {{ movie?.Year }}</p>
    <p>Director: {{ movie?.Director }}</p>
    <img :src="movie?.Poster" :alt="movie?.Title" width="150" />
    <RouterLink to="/">take me back</RouterLink>
  </div>
</template>

<style scoped>
  p,
  img {
    margin-bottom: 1rem;
  }
  .about {
    display: flex;
    flex-direction: column;
    max-width: 600px;
    margin: auto;
  }

  h3 {
    padding-bottom: 1rem;
  }
</style>

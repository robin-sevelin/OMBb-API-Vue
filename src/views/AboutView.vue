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
      console.log(movieFromApi);
    });
  });
</script>
…

<template>
  <div class="about">
    <h3>{{ movie?.Title }}</h3>
    <p>{{ movie?.Plot }}</p>
    <ul>
      <li>Runtime: {{ movie?.Runtime }}</li>
      <li>Genre: {{ movie?.Genre }}</li>
      <li>Year: {{ movie?.Year }}</li>
      <li>Director: {{ movie?.Director }}</li>
      <li>Rating: {{ movie?.imdbRating }}</li>
      <li>Rated: {{ movie?.Rated }}</li>
    </ul>
    <img :src="movie?.Poster" :alt="movie?.Title" width="200" />
    <RouterLink to="/">take me back</RouterLink>
  </div>
</template>

<style scoped>
  li {
    list-style: none;
  }
  img,
  ul {
    margin-block: 1rem;
  }
  .about {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 600px;
    margin: auto;
    padding: 1rem;
    margin-bottom: 100px;
  }

  h3 {
    padding-bottom: 1rem;
  }
</style>

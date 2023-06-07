<script setup lang="ts">
  import { IMovieProps } from '../models/IMovieProps';

  const props = defineProps<IMovieProps>();
</script>

<template>
  <div class="movie">
    <h3>{{ props.movie.Title }}</h3>
    <img :src="props.movie.Poster" :alt="props.movie.Title" />
    <RouterLink :to="'/about/' + props.movie.imdbID">..read more</RouterLink>
  </div>
</template>

<style scoped>
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
    width: 275px;
  }
</style>

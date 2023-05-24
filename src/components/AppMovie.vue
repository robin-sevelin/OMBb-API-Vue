<script setup lang="ts">
  import { IMovieProps } from '../models/IMovieProps';
  import { getMovieById } from '../services/OmdbService';

  const props = defineProps<IMovieProps>();

  const handleClick = async () => {
    let movie = await getMovieById(props.movie.imdbID);

    console.log(movie.Title);
  };
</script>

<template>
  <div class="movie">
    <h3>{{ props.movie.Title }}</h3>
    <img :src="props.movie.Poster" :alt="props.movie.Title" />
    <button @click="handleClick">Read more..</button>
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

<script setup lang="ts">
  import AppFooter from './components/AppFooter.vue';
  import AppHeader from './components/AppHeader.vue';
</script>

<template>
  <AppHeader msg="OMDb movie search" />
  <RouterView />
  <AppFooter msg="Made with" vue="vue.svg" vite="vite.svg" />
</template>

<style scoped></style>

<script setup lang="ts">
  import AppFooter from './components/AppFooter.vue';
  import AppHeader from './components/AppHeader.vue';
  import AppMain from './components/AppMain.vue';
</script>

<template>
  <AppHeader msg="OMDb movie search" />
  <AppMain />
  <AppFooter msg="Made with" vue="/vue.svg" vite="/vite.svg" />
</template>

<style scoped></style>

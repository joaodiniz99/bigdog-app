<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    Navbar
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  /* scroll-behavior: smooth; */
}

body {
  font-family: 'Crimson Text', serif;
  background-color: rgb(68, 116, 138) !important;
}
</style>

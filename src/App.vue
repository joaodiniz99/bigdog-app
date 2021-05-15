<template>
  <div id="app">
    <TheNavbar/>
    <router-view/>
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue';

export default {
  components: {
    TheNavbar
  },
  created() {
    this.$store.dispatch('setDogs');
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

/*
 * Remover sombra do coração depois de clicar
 */
#dropdownFav .btn:focus {
  outline: none;
  box-shadow: none;
}
</style>

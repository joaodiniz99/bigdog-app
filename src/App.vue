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

/*
 * Scroll
 */

/* width */
::-webkit-scrollbar {
  width: 10px !important;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1 !important; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #17a2b8 !important; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555 !important; 
}
</style>

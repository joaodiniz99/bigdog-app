<template>
  <section class="hero">
    <div class="hero-inner">
      <h1>BIG Dog</h1>
      <h2>"Dogs teach us a very important lesson in life: The mail man is not to be trusted" - Charlotte Gray</h2>
      <router-link to="./racas" class="btnn">Bora lá!🐺</router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.hero {
  /* Sizing */
  width: 100vw;
  height: 100vh;

  /* Flexbox stuff */
  display: flex;
  justify-content: center;
  align-items: center;

  /* Text styles */
  text-align: center;
  color: white;

  /* Background styles */
  background-image: linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.6)), url('../assets/img/background.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.hero h1 {
  /* Text styles */
  font-size: 5em;
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;

  /* Margins */
  margin-top: 0;
  margin-bottom: 0.5em;

  /* Animations */
  position: relative;
  animation: titulo 2s;
}

@keyframes titulo {
  
  0% {
    left: 100px;
    opacity: 0;
  }

  100% {
    left: 0px;
    opacity: 1;
  }
}

.hero h2 {
  /* Animations */
  position: relative;
  animation: subtitulo 2s;
}

@keyframes subtitulo {

  0% {
    right: 100px;
    opacity: 0;
  }

  100% {
    right: 0px;
    opacity: 1;
  }
}

.hero .btnn {
  /* Positioning and sizing */
  display: block;
  width: 200px;

  /* Padding and margins */
  padding: 1em;
  margin: 50px auto 0 auto;

  /* Text styles */
  color: white;
  text-decoration: none;
  font-size: 1.5em;
  
  /* Border styles */
  border: 3px solid white;
  border-radius: 20px;

  /* Background styles */
  transition: background-color 0.2s;

  /* Animations */
  position: relative;
  animation: btnHome 2s;
}

@keyframes btnHome {

  0% {
    top: 100px;
    opacity: 0;
    background-color: #1c97b9;
  }

  60% {
    top: 0px;
    opacity: 1;
    background-color: transparent;
  }

  70% {
    background-color: #1c97b9;
  }

  80% {
    background-color: transparent;
  }

  90% {
    background-color: #1c97b9;
  }

  100% {
    background-color: transparent;
  }
}

.hero .btnn:hover {
  background-color: #1c97b9;
}
</style>

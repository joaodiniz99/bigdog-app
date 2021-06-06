<template>
  <b-navbar
    :class="{ 'fixed-top': $route.path == '/' }"
    toggleable="lg"
    type="light"
    variant="light"
    id="btnTopNav"
  >
    <router-link to="/" class="navbar-brand" align-v="center">
      <img
        src="../assets/logo.png"
        width="70"
        height="70"
        class="d-inline-block align-top"
        alt="Big Dog"
      />
      BIG DOG
    </router-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <router-link to="/" class="nav-link nav-item">Inicio</router-link>
        <router-link to="/racas" class="nav-link nav-item">Raças</router-link>
        <!-- <router-link to="/galeria" class="nav-link nav-item">Galeria</router-link> -->
        <router-link v-if="isLoggedIn" to="/favoritos" class="nav-link nav-item">Favoritos</router-link>
        <router-link to="/contactos" class="nav-link nav-item">Contactos</router-link>
        <router-link v-if="!isLoggedIn" to="/login" class="nav-link nav-item">Iniciar Sessão</router-link>
        <template v-else>
          <button @click="logout" class="nav-link nav-item logout">Terminar Sessão</button>
        </template>

        <!-- <b-dropdown
          v-if="favLength"
          :lazy="true"
          size="sm"
          variant="link"
          toggle-class="text-decoration-none"
          no-caret
          right
          id="dropdownFav"
        >
          <template #button-content>
            <b-icon id="favHeart" icon="suit-heart-fill" variant="danger" scale="1.3"></b-icon><span class="sr-only">Favoritos</span>
          </template>
          <b-row class="p-2" v-for="(favorite, index) in favorites" :key="index">
            <b-col class="text-center">
              <img
                :src="favorite"
                alt="Favorite image"
                class="img-fluid favoriteImage"
              />
              <b-icon icon="x-circle-fill" scale="1.5" variant="danger" class="favCloseBtn" @click="removeFavorite(favorite)"></b-icon>
            </b-col>
          </b-row>
        </b-dropdown> -->
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "TheNavbar",
  methods: {
    removeFavorite(img) {
      this.$store.dispatch("toggleFavorite", img);
    },
    logout() {
      this.$store.dispatch('logout');
    }
  },
  computed: {
    favorites() {
      return this.$store.getters.getFavorites;
    },
    favLength() {
      return this.favorites.length > 0 ? true : false;
    },
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    } 
  },
};
</script>

<style scoped>
/* 
    Navbar
*/
.navbar {
  background-color: #e3f2fd !important;
  padding: 8px 31px;
}

.navbar-brand {
  display: flex;
  align-items: center;

  color: #4d7682 !important;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  text-transform: uppercase;
}

.navbar-brand img {
  margin-right: 0.5rem;
}

.nav-item {
  margin: 0 0.5rem !important;
}

.nav-link {
  color: #476e79 !important;
  font-family: "Roboto", sans-serif;
  border: 1px solid #476e79;
  border-radius: 20px;
  padding: 4px 16px !important;
  transition: color 0.2s, border 0.2s, background-color 0.2s, transform 0.2s;
}

.nav-link:hover {
  border: 1px solid #1c97b9 !important;
  color: white !important;
  background-color: #1c97b9;
  transform: translateY(-3px);
}

.nav-link.router-link-exact-active {
  border: 1px solid #1c97b9 !important;
  color: white !important;
  background-color: #1c97b9;
}

/*
  Favorite Dropdown
*/
@keyframes heartEntry {
  0% {
    opacity: 0;
    transform: scale(1);
  }
  25% {
    transform: scale(1.7);
  }
  50% {
    transform: scale(1);
  }
  75% {
    transform: scale(1.7);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

/*
 * Add scroll y 
 */
#dropdownFav /deep/ .dropdown-menu {
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 520px !important;
}

/*
 * Heart Button 
 */
#favHeart {
  animation: heartEntry 1s 0s ease-in;
}

/*
 * Favorite image 
 */
.favoriteImage {
  width: 150px;
  height: 100px;
  object-fit: cover;

  margin: 5px 0;
  padding: 5px;
  border-radius: 25px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.555);
  transition: box-shadow 0.2s;
}

/*  
 * Remove Favorite Button
 */
.favCloseBtn {
  position: absolute;
  top: 5px;
  right: 15px;

  cursor: pointer;
}

/*
 * Logout button color
 */
.logout {
  background-color: transparent;
  color: red !important;
}

.logout:hover {
  background-color: red;
  color: white !important;
}


</style>
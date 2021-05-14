<template>
  <b-col cols="12" sm="6" md="4" lg="3" xl="3" class="my-3">
    <div class="card__breed">
      <img class="img-fluid" :src="img" alt="Dog Card Image" />
      <div class="card__container">
        <button class="card__container__fav" @click="sendFavorite(img)">
          <b-icon :icon="isFavorite" variant="danger" scale="1.3"></b-icon>
        </button>
      </div>
    </div>
  </b-col>
</template>

<script>
export default {
  name: "DogCardFavorite",
  props: {
    img: String,
  },
  methods: {
    sendFavorite(img) {
      this.$store.dispatch("toggleFavorite", img);
    },
  },
  computed: {
    isFavorite() {
      return this.$store.getters.getFavorite(this.img);
    }
  }
};
</script>

<style scoped>
.card__breed {
  color: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.555);
  border-radius: 5px;

  /* cursor: pointer; */

  transition: 0.2s;
  animation: breed 0.2s;
}

.card__breed img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
}

.card__container {
  padding: 8px 16px;
  text-align: center;

  transition: 0.2s;
}

.card__container .card__container__fav {
  background-color: rgba(255, 255, 255, 0.6);
  outline: none;
  border: 6px solid transparent;
  border-radius: 55px;

  height: 35px;
  width: 35px;
}

.card__breed:hover .card__container {
  background-color: rgb(68, 116, 138) !important;
}

@keyframes breed {
  from {
    opacity: 0;
    transform: translateX(-10px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
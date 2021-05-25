<template>
  <b-col cols="12" sm="6" md="4" lg="3" xl="3" class="my-3">
    <div class="card__breed">
      <img class="img-fluid" :src="img" alt="Dog Card Image" />
      <button class="card__container__fav" :class="{ 'favorite' : isFavorite }" @click="sendFavorite(img)">
        <b-icon :icon="favHeart" variant="danger" scale="1.6"></b-icon>
      </button>
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
    },
    favHeart() {
      return this.isFavorite ? 'suit-heart-fill' : 'suit-heart';
    }
  }
};
</script>

<style scoped>
.card__breed {
  color: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.555);
  border-radius: 5px;

  width: 100%;
  max-height: 300px;

  transition: transform 0.2s;
  animation: breed 0.2s;
}

.card__breed img {
  width: 100%;
  height: 300px;
  display: block;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
}

.card__container__fav {
  background-color: rgba(0, 0, 0, 0.3);
  opacity: 0;

  position: absolute;
  top: 0;
  right: 20px;

  outline: none;
  border: 6px solid transparent;
  border-radius: 55px;

  height: 40px;
  width: 40px;

  transition: 0.2s;
}

.favorite {
  opacity: 1;
  top: 5px;
}

.card__breed:hover .card__container__fav {
  top: 5px;
  opacity: 1;
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

@media only screen and (max-width: 768px) {
  .card__container__fav {
    top: 5px;
    opacity: 1;
  }
}
</style>
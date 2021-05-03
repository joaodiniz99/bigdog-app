<template>
  <div class="col-xs-12 col-sm-6 col-md-3 col-lg-2 col-xl-2 my-3">
    <div class="card__breed">
      <img class="img-fluid" :src="dog.image.url" :alt="dog.name" @click="redirectDog">
      <div class="card__container">
        <h5>{{ dog.name.length >= 15 ? dog.name.substr(0, 15)+"..." : dog.name }}</h5>
        <!-- <button class="btn btn-info" type="button" :data-image="dog.image.url" :data-name="dog.name" :data-height="dog.height.metric" :data-life_span="dog.life_span" :data-temperament="dog.temperament" :data-weight="dog.weight.metric">+Info</button> -->
        <button class="btn btn-info" type="button" disabled>+Info</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DogCard',
    props: {
      dog: Object
    },
    methods: {
      showModal(el) {
        this.$emit('show-modal', el);
      },
      redirectDog() {
        this.$router.push({
          name: 'breed',
          params: { id: this.dog.id }
        });
      }
    },
  }
</script>

<style scoped>
.card__breed {
  color: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.555);
  border-radius: 5px;

  /* cursor: pointer; */

  transition: 0.2s;
  animation: racas 0.2s;
}

.card__breed img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px 5px 0 0;

  filter: grayscale(100%);
  transition: 0.2s;
}

.card__container {
  padding: 8px 16px;
  text-align: center;

  transition: 0.2s;
}

.card__breed:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.400);
}

.card__breed:hover img{
  filter: grayscale(0%);
}

.card__breed:hover .card__container {
  background-color: rgb(68, 116, 138) !important;
}

@keyframes racas {
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
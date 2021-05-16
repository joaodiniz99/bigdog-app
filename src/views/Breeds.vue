<template>
  <b-container fluid>
    <BaseTitle> Raças </BaseTitle>
    <TheSearchBar @searchChange="searchBreed"/>
    <b-row>
      <DogCard v-for="dog in filteredDogs" :key="dog.id" :dog="dog">
        <b-button
          class="btn btn-info"
          type="button"
          @click="setDogModal(dog)"
          v-b-modal.dogModal
          >+Info</b-button
        >
      </DogCard>
    </b-row>

    <BackToTop bottom="50px" right="50px">
      <b-button type="button" class="btn btn-info btn-to-top"
        ><i class="fa fa-chevron-up"></i
      ></b-button>
    </BackToTop>

    <!-- Modal -->
    <b-modal
      v-if="dog"
      id="dogModal"
      size="lg"
      centered
      hide-footer
      :title="dog.name"
    >
      <b-container fluid>
        <b-row>
          <b-col cols="12" sm="6" md="6" lg="6" xl="6" id="dogModalDivImg">
            <img
              :src="dog.image.url"
              :alt="dog.name"
              class="img-fluid"
              id="dogModalImg"
            />
          </b-col>
          <b-col cols="12" sm="6" md="6" lg="6" xl="6" class="my-3">
            <p>
              <span style="font-weight: 800">Temperamento:</span>
              {{ dog.temperament }}
            </p>
            <p>
              <span style="font-weight: 800">Peso:</span>
              {{ dog.weight.metric }} kg
            </p>
            <p>
              <span style="font-weight: 800">Altura:</span>
              {{ dog.height.metric }} cm
            </p>
            <p>
              <span style="font-weight: 800">Tempo de vida:</span>
              {{ dog.life_span }}
            </p>
          </b-col>
        </b-row>
      </b-container>
    </b-modal>
  </b-container>
</template>

<script>
import BaseTitle from "@/components/BaseTitle.vue";
import DogCard from "@/components/DogCard.vue";
import TheSearchBar from '@/components/TheSearchBar.vue';
import BackToTop from "vue-backtotop"; // Botão topo

export default {
  components: {
    BaseTitle,
    DogCard,
    TheSearchBar,
    BackToTop,
  },
  name: "Breeds",
  data() {
    return {
      dogs: null, // array of dogs
      dog: null, // object of dog
      search: ""
    }
  },
  methods: {
    setDogModal(newDog) {
      this.dog = newDog;
    },
    searchBreed(name) {
      this.search = name;
    }
  },
  created() {
    this.dogs = this.$store.state.dogs;
  },
  computed: {
    filteredDogs() {
      return this.dogs.filter(dog => {
        return dog.name.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  },
};
</script>

<style scoped>
/*
 * Botão topo 
 */
.btn-to-top {
  width: 60px;
  height: 60px;
  padding: 10px 16px;
  border-radius: 50%;
  font-size: 22px;
  line-height: 22px;
}

/*
 * Modal
 */
.modal-title {
  margin: 0 auto !important;
  font-size: 2rem !important;
}
.modal-header .close {
  display: none !important;
}
#dogModalDivImg {
  text-align: center;
}
#dogModalImg {
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.555);
}
</style>
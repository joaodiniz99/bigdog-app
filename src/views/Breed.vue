<template>
  <b-container fluid>
    <b-row v-if="loading">
      <b-col id="loading">
        <b-spinner style="width: 3rem; height: 3rem;" label="Loading..."></b-spinner>
      </b-col>
    </b-row>
    <BaseTitle> {{ name }} </BaseTitle>
    <b-row class="my-5">
      <DogCardFavorite
        v-for="breed in result"
        :key="breed.id"
        :img="breed.url"
      />
    </b-row>
    <BackToTop bottom="50px" right="50px">
      <b-button type="button" class="btn btn-info btn-to-top">
        <i class="fa fa-chevron-up"></i>
      </b-button>
    </BackToTop>
  </b-container>
</template>

<script>
import BaseTitle from "@/components/BaseTitle.vue";
import DogCardFavorite from "@/components/DogCardFavorite.vue";
import BackToTop from "vue-backtotop"; // Botão topo
import DogService from "../services/DogService";

// Pacote de notificações/loaders
import Notify from "../configs/nofiflix.config";

export default {
  name: "Breed",
  components: {
    BaseTitle,
    DogCardFavorite,
    BackToTop,
  },
  data() {
    return {
      result: null, // array of breed
      name: null, // name of breed
      loading: true
    };
  },
  created() {
    DogService.getImagesById(this.$route.params.id)
      .then((res) => {
        this.result = res.data;
        this.name = res.data[0].breeds[0].name;
      })
      .catch((err) => {
        Notify.Failure("Ocorreu um erro! Tente mais tarde...");
        console.log(err);
      })
      .finally(() => {
        //REMOVER LOADING
        this.loading = false;
      });
  }
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

#loading {
  text-align: center;
  height: 50vh;
  width: 99vw;
}

#loading span {
  position: absolute;
  top: 50%;
}
</style>
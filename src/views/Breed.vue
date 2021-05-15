<template>
  <b-container fluid id="loading">
    <Title> {{ name }} </Title>
    <b-row class="my-5">
      <DogCardFavorite
        v-for="breed in result"
        :key="breed.id"
        :img="breed.url"
      />
    </b-row>
    <BackToTop bottom="50px" right="50px">
      <b-button type="button" class="btn btn-info btn-to-top"
        ><i class="fa fa-chevron-up"></i
      ></b-button>
    </BackToTop>
  </b-container>
</template>

<script>
import Title from "@/components/Title.vue";
import DogCardFavorite from "@/components/DogCardFavorite.vue";
import BackToTop from "vue-backtotop"; // Botão topo
import DogService from "../services/DogService";

// Pacote de notificações/loaders
import Notify from "../configs/nofiflix.config";
import { Block } from "notiflix";

export default {
  name: "Breed",
  components: {
    Title,
    DogCardFavorite,
    BackToTop,
  },
  data() {
    return {
      result: null, // array of breed
      name: null, // name of breed
    };
  },
  created() {
    DogService.getImagesById(this.$route.params.id)
      .then((res) => {
        Block.Standard('#loading');
        this.result = res.data;
        this.name = res.data[0].breeds[0].name;
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        //REMOVER LOADING
        Block.Remove('#loading');
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
</style>
<template>
  <b-container fluid>
    <Title> {{ name }} </Title>
    <!-- <b-row>
      <b-col>
        <h3 class="text-center" style="color: lime">Favoritos</h3>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="1" v-for="(favorite, index) in favorites" :key="index">
        <img
          :src="favorite"
          alt="Favorite image"
          style="width: 50px; height: 50px"
        />
      </b-col>
    </b-row> -->
    <b-row>
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
  /*
    methods: {
        setFavorite(img) {
          this.favorites.unshift(img);
        }
    },*/
  created() {
    DogService.getImagesById(this.$route.params.id)
      .then((res) => {
        //console.log(res.data);
        this.result = res.data;
        this.name = res.data[0].breeds[0].name;
      })
      .catch((err) => {
        console.error(err);
      });
  },
  /*
  computed: {
    favorites() {
      return this.$store.getters.getFavorites;
    },
  },*/
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
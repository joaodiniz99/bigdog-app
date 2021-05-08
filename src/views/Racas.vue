<template>
    <b-container fluid>
        <Titulo>Raças</Titulo>
        <b-row v-if="loading">
            <b-col class="text-center">
                <b-spinner style="width: 5rem; height: 5rem;" class="my-5" label="Large Spinner" type="grow"></b-spinner>
            </b-col>
        </b-row>
        <b-row>
            <DogCard v-for="dog in dogs" :key="dog.id" :dog="dog">
                <b-button class="btn btn-info" type="button" v-b-modal.dogModal @click="setDogModal(dog)">+Info</b-button>
            </DogCard>        
        </b-row>

        <back-to-top bottom="50px" right="50px">
            <b-button type="button" class="btn btn-info btn-to-top"><i class="fa fa-chevron-up"></i></b-button>
        </back-to-top>

        <!-- Modal -->
        <b-modal v-if="dog" id="dogModal" size="lg" centered hide-footer :title="dog.name">
            <b-container fluid>
                <b-row>
                    <b-col cols="12" sm="6" md="6" lg="6" xl="6" id="dogModalDivImg">
                        <img :src="dog.image.url" :alt="dog.name" class="img-fluid" id="dogModalImg">
                    </b-col>
                    <b-col cols="12" sm="6" md="6" lg="6" xl="6" class="my-3">
                        <p><span style="font-weight: 800;">Temperament:</span> {{ dog.temperament }} </p>
                        <p><span style="font-weight: 800;">Weight:</span> {{ dog.weight.metric }} </p>
                        <p><span style="font-weight: 800;">Height:</span> {{ dog.height.metric }} </p>
                        <p><span style="font-weight: 800;">Life Span:</span> {{ dog.life_span }} </p>
                    </b-col>
                </b-row>
            </b-container>
        </b-modal>

    </b-container>
</template>

<script>
import Titulo from '@/components/Titulo.vue';
import DogCard from '@/components/DogCard.vue';
import DogService from '../services/DogService';
import BackToTop from 'vue-backtotop';// Botão topo

export default {
    components: {
        Titulo,
        DogCard,
        BackToTop
    },
    data() {
        return {
            loading: true,
            dogs: [],
            dog: null
        }
    },
    methods: {
        setDogModal(newDog) {
            this.dog = newDog;
        }
    },
    created() {
        DogService.getBreeds().then(res => {
            this.dogs = res.data;
            this.loading = !this.loading;
        }).catch(err => {
            alert('Ocorreu um erro! Verificar consola.');
            console.log(err);
        });
        this.setDogModal(this.dogs[0]);
    }
}
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
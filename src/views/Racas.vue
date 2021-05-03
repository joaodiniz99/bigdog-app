<template>
    <b-container fluid>
        <Titulo>Raças</Titulo>
        <b-row v-if="loading">
            <b-col class="text-center">
                <b-spinner style="width: 5rem; height: 5rem;" class="my-5" label="Large Spinner" type="grow"></b-spinner>
            </b-col>
        </b-row>
        <b-row>
            <DogCard v-for="dog in dogs" :key="dog.id" :dog="dog"/>
        </b-row>
        <a href="#btnTopNav" id="btnTop" title="Go to top">
            <i class="fas fa-arrow-up fa-2x"></i>
        </a>
    </b-container>
</template>

<script>
import Titulo from '@/components/Titulo.vue';
import DogCard from '@/components/DogCard.vue';
import DogService from '../services/DogService';

export default {
    components: {
        Titulo,
        DogCard
    },
    data() {
        return {
            loading: true,
            dogs: []
        }
    },
    created() {
        DogService.getBreeds().then(res => {
            this.dogs = res.data;
            this.loading = !this.loading;
        }).catch(err => {
            alert('Ocorreu um erro! Verificar consola.');
            console.log(err);
        })
    },
    mounted() {
        /* BACK TO TOP */
        const botao = document.getElementById("btnTop");
        console.log(botao);

        function scrollFunction() {
            if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
                botao.style.display = "block";
            } else {
                botao.style.display = "none";
            }
        }

        window.onscroll = () => {scrollFunction()};
    }
}
</script>

<style scoped>
.container-fluid {
    background-color: rgb(68, 116, 138) !important;
}

/* Botão Top */
#btnTop {
  display: none;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  font-size: 1.5rem;
  background-color: #138496;
  color: white;
  padding: 1rem;
  border-radius: 10px;

  transition: all 0.2s;
  animation: btnTop 1s;
}

#btnTop:hover {
  background-color: white;
  color: #138496;
}

@keyframes btnTop {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
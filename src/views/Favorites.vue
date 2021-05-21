<template>
    <b-container fluid>
        <b-row class="my-5" v-if="favorites.length">
            <DogCardFavorite
                v-for="(favorite, index) in favorites"
                :key="index"
                :img="favorite"
            />
        </b-row>
        <b-row class="my-5" v-else>
            <b-col class="text-center">
                <h1 class="mb-5">A lista dos favoritos está vazia...🐕😢</h1>
                <router-link to="/racas" title="Retornar para a página das raças">
                    <b-button variant="info">
                        Adicione alguma raça à sua lista 🐕‍🦺🙋
                    </b-button>
                </router-link>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import DogCardFavorite from '@/components/DogCardFavorite.vue';

export default {
    name: 'Favorites',
    components: {
        DogCardFavorite
    },
    computed: {
        favorites() {
            return this.$store.getters.getFavorites;
        }
    }
}
</script>

<style scoped>

</style>
<template>
    <b-container fluid class="text-center">
        <b-row>
            <b-col class="my-5">
                <b-icon icon="signpost-split" scale="5" class="notFoundIcon"></b-icon>
            </b-col>
        </b-row>
        <b-row>
            <b-col class="mb-4">
                <h1>Página Não Encontrada!</h1>
            </b-col>
        </b-row>
        <b-row>
            <b-col >
                <router-link to="/" class="" title="Retornar para a página principal">
                    <b-button variant="info">
                        Página principal <b-icon icon="signpost" aria-hidden="true"></b-icon>
                    </b-button>
                </router-link>
                
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    name: 'NotFound'
}
</script>

<style scoped>
@keyframes notFoundEntry {
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
    100% {
        transform: translateY(0);
    }
}

.notFoundIcon {
    animation: notFoundEntry 2s 0s ease-in-out infinite;
}
</style>
<template>
    <b-row>
        <b-col cols="4" class="searchBarDiv">
            <b-form-input v-model="text" size="sm" placeholder="Introduza o nome da raça desejada"></b-form-input>
            <h2>Texto: {{ text }} </h2>
        </b-col>
    </b-row>
</template>

<script>
export default {
    name: "TheSearchBar",
    data() {
        return {
            text: null
        }
    },
}
</script>

<style scoped>
.searchBarDiv {
    margin: 0 auto;
}
</style>
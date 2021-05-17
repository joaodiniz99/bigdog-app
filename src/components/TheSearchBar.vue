<template>
    <b-row class="my-4" align-h="center">
        <b-col cols="12" class="searchBarDiv">
            <b-form-input v-model="search" size="md" placeholder="Introduza o nome da raça" @input="searchChange"></b-form-input>
            <!-- <h2>Texto: {{ text }} </h2> -->
        </b-col>
    </b-row>
</template>

<script>
export default {
    name: "TheSearchBar",
    data() {
        return {
            search: ""
        }
    },
    methods: {
        searchChange() {
            this.$emit('searchChange', this.search);
        }
    }
}
</script>

<style scoped>
.searchBarDiv {
    margin: 0 auto;
}

.searchBarDiv input {
    margin: 0 auto;
    width: 300px;
    /* text-transform: capitalize; */
}

@media only screen and (max-width: 345px) {
    .searchBarDiv input {
        width: 150px;
    }
}
</style>
<template>
    <b-row>
        <b-col class="text-center mt-4">
            <h1>
                <span class="titulo">
                    <slot></slot>
                </span>
            </h1>
        </b-col>
    </b-row>
</template>

<script>
export default {
    name: 'Title'
}
</script>

<style scoped>
.container-fluid h1 {
  color: white;
  font-size: 3rem;
}

.titulo {
    border-bottom: 5px solid rgb(115, 193, 230);
}
</style>
<template>
    <b-navbar :class="{ 'fixed-top' : $route.path == '/' }" toggleable="lg" type="light" variant="light" id="btnTopNav">
        <router-link to="/" class="navbar-brand" align-v="center">
            <img src="../assets/logo.png" width="70" height="70" class="d-inline-block align-top" alt="Kitten">
            BIG DOG
        </router-link>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">

                <router-link to="/" class="nav-link nav-item">Inicio</router-link>
                <router-link to="/racas" class="nav-link nav-item">Raças</router-link>
                <!-- <router-link to="/galeria" class="nav-link nav-item">Galeria</router-link> -->
                <router-link to="/contactos" class="nav-link nav-item">Contactos</router-link>
            
                <!-- <b-nav-item-dropdown right>
                    <template #button-content>
                        <em>User</em>
                    </template>
                    <b-dropdown-item href="#">Profile</b-dropdown-item>
                    <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                </b-nav-item-dropdown> -->
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style scoped>
.navbar {
    background-color: #e3f2fd !important;
    padding: 8px 31px;
}

.navbar-brand {
    display: flex;
    align-items: center;

    color: #4d7682 !important;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    text-transform: uppercase;
}

.navbar-brand img {
    margin-right: 0.5rem;
}

.nav-item {
    margin: 0 0.5rem !important;
}

.nav-link {
    color: #476e79 !important;
    font-family: 'Roboto', sans-serif;
    border: 1px solid #476e79;
    border-radius: 20px;
    padding: 4px 16px !important;
    transition: color 0.2s, border 0.2s, background-color 0.2s, transform 0.2s;
}

.nav-link:hover {
    border: 1px solid #1c97b9 !important;
    color: white !important;
    background-color: #1c97b9;
    transform: translateY(-3px);
}

.nav-link.router-link-exact-active {
    border: 1px solid #1c97b9 !important;
    color: white !important;
    background-color: #1c97b9;
}
</style>
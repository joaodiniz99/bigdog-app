<template>
    <b-container>
        <b-row class="text-center my-4">
            <b-col>
                <img src="../assets/logo.png" width="70" height="70" alt="Logo image">
            </b-col>
        </b-row>
        <b-row>
            <b-col class="text-center">
                <h1 class="title">Iniciar sessão no Big Dog</h1>
            </b-col>
        </b-row>
        <b-row class="d-flex justify-content-center mt-4">
            <b-form @submit.prevent="login">
                <b-form-group
                    id="input-group-1"
                    label="Email:"
                    label-for="input-1"
                >
                    <b-form-input
                    id="input-1"
                    v-model="form.email"
                    type="email"
                    required
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                    id="input-group-2"
                    label="Palavra-passe:"
                    label-for="input-2"
                >
                    <b-form-input
                    id="input-2"
                    v-model="form.password"
                    type="password"
                    required
                    ></b-form-input>
                </b-form-group>
                <b-overlay
                    :show="loading"
                    rounded
                    opacity="0.6"
                    spinner-small
                    spinner-variant="primary"
                    class="d-block"
                >
                    <b-button type="submit" variant="info" class="btn-block">Iniciar Sessão</b-button>
                </b-overlay>
            </b-form>
        </b-row>
        <b-row>
            <b-col class="text-center" style="color: white;">
                <p>Não tem conta? <router-link to="/signup" class="text-warning">Criar Conta</router-link></p>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import axios from 'axios';
import Notify from '../configs/nofiflix.config';// configurações do pacote de notificações

export default {
    name: 'Login',
    data() {
        return {
            form: {
                email: '',
                password: ''
            },
            loading: false
        }
    },
    methods: {
        login() {
            if(this.form.password.length >= 6) {
                this.loading = true;
                this.$store.dispatch('login', {
                    email: this.form.email,
                    password: this.form.password,
                    returnSecureToken: true
                }).then(() => {
                    Notify.Success("Sessão iniciada com sucesso!");
                    this.$router.back();
                }).catch(err => {
                    Notify.Failure("Ocorreu um erro! Tente mais tarde.");
                    console.log(err);
                }).finally(() => {
                    this.loading = false;
                });
            } else {
                alert("A palavra-passe deve conter pelo menos 6 caracteres!");
            }
            
            
            
        }
    }
}
</script>

<style scoped>
/*
 * Animations
 */

/*
    Image 
*/
@keyframes imgEntry {
    0% {
        opacity: 0;
        transform: translateY(-10px);
    }
    100% {
        opacity: 1;
        transform: translateY(0px);
    }
}

/*
    Title 
*/
@keyframes titleEntry {
    0% {
        opacity: 0;
        transform: translateX(-5px);
    }
    100% {
        opacity: 1;
        transform: translateX(0px);
    }
}

/*
    Form 
*/
@keyframes formEntry {
    0% {
        opacity: 0;
        transform: rotateY(90deg);
    }
    100% {
        opacity: 1;
        transform: rotateY(0deg);
    }
}

img {
    animation: imgEntry 0.2s 0s ease-in;
}

.title, .form-group{
    color: white;
}

.title {
    font-size: 24px;
    animation: titleEntry 0.2s 0s ease-in;
}

form {
    background-color: rgb(56, 97, 116);
    padding: 20px;
    border-radius: 10px;
    font-size: 14px;
    animation: formEntry 0.2s 0s ease-in;
}

</style>
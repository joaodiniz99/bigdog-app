<template>
    <b-container>
        <b-row class="my-4" id="paiModelo">  
            <!-- <model-gltf id="modelo" backgroundColor="#44748a" :rotation="rotation" :width="200" :height="200" @on-load="onLoad" src="/models/Mars_1_6792.glb"></model-gltf> -->
            <model-gltf id="modelo" :lights="lights" backgroundColor="#44748a" :width="200" :height="200" src="/models/Earth_1_12756.glb"></model-gltf>
        </b-row>
        <b-row>
            <b-col class="text-center">
                <h1 class="title">Iniciar sessão no Big Dog</h1>
            </b-col>
        </b-row>
        <b-row class="d-flex justify-content-center mt-4">
            <b-form @submit.prevent="iniciarSessao">
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
                <b-button type="submit" variant="info" class="btn-block">Login</b-button>
            </b-form>
        </b-row>
    </b-container>
</template>

<script>
import { ModelGltf, ModelObj } from 'vue-3d-model';

export default {
    name: 'Login',
    data() {
        return {
            form: {
                email: '',
                password: ''
            },
            rotation: {
                x: 0,
                y: 0,
                z: 0
            },
            lights: [
                {
                    type: 'AmbientLight',
                    color: 0xffffff,
                    intensity: 1
                },
                {
                    type: 'DirectionalLight',
                    color: 0xffffff,
                    intensity: 1
                }
            ]
        }
    },
    components: {
        ModelObj,
        ModelGltf
    },
    methods: {
        iniciarSessao() {
            alert(JSON.stringify(this.form));
            this.form.email = '';
            this.form.password = '';
        },
        onLoad () {
            this.rotate();
        },
        rotate () {
            this.rotation.y += 0.002;
            requestAnimationFrame( this.rotate );
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

#paiModelo {
    display: flex;
    justify-content: center;
}

#modelo {
    width: 200px !important;
    height: 200px !important;
}
</style>
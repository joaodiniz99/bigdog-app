<template>
    <b-container fluid>
        <div class="row">
            <b-col class="text-center mt-4">
                <h1><span id="tituloCao">Contactos</span></h1>
            </b-col>
        </div>
        <b-row class="mt-3">
            <b-col cols="*" sm="*" md="4" lg="4" xl="4" class="text-center">
                <img src="../assets/img/animation2.jpg" class="floating img-fluid">
            </b-col>
            <b-col cols="*" sm="*" md="4" lg="4" xl="4" >
                <b-form>
                    <b-row>
                        <b-col>
                            <label for="firstName">Primeiro Nome</label>
                            <input type="text" class="form-control" id="firstName" placeholder="João" required>
                        </b-col>
                        <b-col>
                            <label for="lastName">Último Nome</label>
                            <input type="text" class="form-control" id="lastName" placeholder="Diniz" required>
                        </b-col>
                    </b-row>
                    <b-row class="my-3">
                        <b-col>
                            <label for="email">Email</label>
                            <input type="email" class="form-control" id="email" placeholder="2047920@um..." required>
                        </b-col>
                    </b-row>
                    <b-row class="my-3">
                        <b-col>
                            <label for="exampleFormControlTextarea1">Mensagem</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <button type="submit" class="btn btn-info">Enviar</button>
                        </b-col>
                    </b-row>
                </b-form>
            </b-col>
            <b-col cols="*" sm="*" md="4" lg="4" xl="4" class="text-center">
                <img src="../assets/img/animation.jpg" class="floating2 img-fluid">
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    name: 'Contactos'
}
</script>

<style scoped>
.container-fluid h1 {
  color: white;
  font-size: 3rem;
}

.container-fluid #tituloCao {
  border-bottom: 5px solid rgb(115, 193, 230);
}

/* Form */
form {
  font-family: 'Poppins', sans-serif !important;
  color: white;

  /* animação */
  animation: formulario 2s;
}

@keyframes formulario {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

/* Animações */
.floating {   
  animation: float 5s ease-in-out infinite;
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 55px; 
} 

.floating2 {
  animation: float2 5s ease-in-out infinite;
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 55px; 
}

@keyframes floating { 
    0% { transform: translate(0,  0px); } 
    50%  { transform: translate(0, 15px); } 
    100%   { transform: translate(0, -0px); }     
} 

@keyframes float {
  0% {
    transform: translateY(0);
    -webkit-transform: translateY(0);
  }

  50% {
    transform: translateY(5rem);
    -webkit-transform: translateY(5rem);
  }

  100% {
    transform: translateY(0);
    -webkit-transform: translateY(0);
  }
}

@keyframes float2 {
  0% {
    transform: translateY(5rem);
    -webkit-transform: translateY(5rem);
  }

  50% {
    transform: translateY(10rem);
    -webkit-transform: translateY(10rem);
  }

  100% {
    transform: translateY(5rem);
    -webkit-transform: translateY(5rem);
  }
}

@media only screen and (max-width: 1080px) {
 .floating,
 .floating2 {
   display: none;
 }
}
</style>
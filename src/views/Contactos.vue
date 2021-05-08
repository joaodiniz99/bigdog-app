<template>
    <b-container fluid>
        <Titulo>Contactos</Titulo>
        <b-row class="mt-3">
            <b-col cols="*" sm="*" md="4" lg="4" xl="4" class="text-center">
                <img src="../assets/img/animation2.jpg" class="floating img-fluid">
            </b-col>
            <b-col cols="*" sm="*" md="4" lg="4" xl="4" >
                <b-form ref="emailForm" @submit.prevent="sendEmail" id="bigdogForm">
                    <input type="hidden" name="contact_number">
                    <b-row>
                        <b-col>
                            <label for="firstName">Primeiro Nome</label>
                            <input type="text" class="form-control" id="firstName" placeholder="João" name="user_firstname" required>
                        </b-col>
                        <b-col>
                            <label for="lastName">Último Nome</label>
                            <input type="text" class="form-control" id="lastName" placeholder="Diniz" name="user_lastname" required>
                        </b-col>
                    </b-row>
                    <b-row class="my-3">
                        <b-col>
                            <label for="email">Email</label>
                            <input type="email" class="form-control" id="email" placeholder="2047920@um..." name="user_email" required>
                        </b-col>
                    </b-row>
                    <b-row class="my-3">
                        <b-col>
                            <label for="exampleFormControlTextarea1">Mensagem</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="message" required></textarea>
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
import emailjs from 'emailjs-com';// Pacote de e-mails
import { Notify, Block } from 'notiflix';// Pacote de notificações/loaders
// Configurações
Notify.Init({ 
  width: '300px',
  position: 'right-bottom',
  fontSize: '16px', 
  timeout: 4000, 
  messageMaxLength: 200,
  showOnlyTheLastOne: true,
  clickToClose: true,
  pauseOnHover: true,
  cssAnimationStyle: 'from-bottom'
});

import Titulo from '@/components/Titulo.vue';

export default {
    components: {
        Titulo
    },
    name: 'Contactos',
    methods: {
        sendEmail(e) {
            // Adicionar loader
            Block.Dots('#bigdogForm');

            e.target[0].value = Math.random() * 100000 | 0;
            
            emailjs.sendForm('contact_service', 'template_bvykz63', e.target, process.env.VUE_APP_EMAIL_USERID)
                .then(res => {
                    console.log('Success!', res.status, res.text);
                    // Adicionar Notificação de sucesso
                    Notify.Success('E-mail enviado com sucesso! Entraremos em contacto consigo em breve! 🐺');
                    // Limpar formulário
                    e.target.reset();
                })
                .catch(err => {
                    console.error('Failed...', err);
                    // Adicionar Notificação de erro
                    Notify.Failure('Ocorreu um erro ao enviar o e-mail. Tente novamente... 💥');
                })
                .finally(() => {
                    // Remover loader
                    Block.Remove('#bigdogForm');
                });
        }
    }
}
</script>

<style scoped>
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
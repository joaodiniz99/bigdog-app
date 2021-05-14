import { Notify } from 'notiflix';// Pacote de notificações
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

export default Notify;
import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../src/assets/img/css/perfil.css';
import '../src/assets/img/css/misTareas.css';
import '../src/assets/img/css/EditarPerfil.css';



import router from './router/index';


import App from './App.vue'

createApp(App).mount('#app')
createApp(App).use(router).mount('#app');
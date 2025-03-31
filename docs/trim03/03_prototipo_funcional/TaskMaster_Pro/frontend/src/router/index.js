import { createRouter, createWebHistory } from 'vue-router';
import IniciarSesion from '../components/IniciarSesion.vue';
import RecuperarContraseña from '../components/RecuperarContraseña.vue';
import administrarUsuarios from '../components/administrarUsuarios.vue';
import crearUsuario from '../components/crearUsuario.vue';
import PerfilCompleto from '../components/PerfilCompleto.vue';
import EditarPerfil from '../components/EditarPerfil.vue';
import administrarRoles from '../components/administrarRoles.vue';
import crearRol from '../components/crearRol.vue';
import EditarRol from '../components/EditarRol.vue';
import EditarUsuario from '../components/EditarUsuario.vue';
import crearClave from '../components/crearClave.vue';
import cambiarClave from '@/components/cambiarClave.vue';




const routes = [
  { path: '/', component: IniciarSesion }, // Ruta para iniciar sesión
  { path: '/iniciar-sesion', component: IniciarSesion },
  { path: '/recuperar-contraseña', component: RecuperarContraseña }, // Ruta para recuperar contraseña en minúsculas
  { path: '/administrar-usuarios', component: administrarUsuarios }, 
  { path: '/crear-usuario', component: crearUsuario },
  { path: '/perfil-completo', component: PerfilCompleto },
  { path: '/editar-perfil', component: EditarPerfil },
  { path: '/administrar-roles', component: administrarRoles },
  { path: '/crear-rol', component: crearRol},
  { path: '/editar-rol/:id', name: 'EditarRol', component: EditarRol, props: true },
  { path: '/editar-usuario/:id', name: 'EditarUsuario', component: EditarUsuario, props: true },
  { path: '/crear-clave', component: crearClave },
  { path: '/modificar-contraseña', component: cambiarClave },
  

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

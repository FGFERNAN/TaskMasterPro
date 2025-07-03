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
import error403  from '../components/errorPermisos.vue';
import errorGeneral from '@/components/errorGeneral.vue';
import InterfazPrincipal from '@/components/InterfazPrincipal.vue';
import error404 from '@/components/errorPageNotFound.vue';
import MiembrosPage from '@/components/MiembrosPage.vue';
import EditarProyecto from '@/components/editarProyecto.vue';
import InterfazProyecto from '@/components/InterfazProyecto.vue';
import creacionProyecto from '@/components/creacionProyecto.vue';
import PlantillasProyecto from '@/components/PlantillasProyecto.vue';
import CrearPlantilla from '@/components/CrearPlantilla.vue';
import EditarPlantilla from '@/components/EditarPlantilla.vue';
import InterfazTarea from '@/components/InterfazTarea.vue';
import CrearTarea from '@/components/crearTarea.vue';
import MisTareas from '@/components/MisTareas.vue';





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
  { path: '/crear-clave/:token', component: crearClave },
  { path: '/modificar-contraseña', component: cambiarClave },
  { path: '/error403', component: error403},
  { path: '/error500', component: errorGeneral},
  { path: '/interfaz-principal', component: InterfazPrincipal},
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: error404},
  { path: '/miembros-page/:id', name: 'Miembros', component: MiembrosPage, props: true },
  { path: '/editar-proyecto/:id', name: 'EditarProyecto', component: EditarProyecto, props: true},
  { path: '/interfaz-proyecto/:id', name: 'InterfazProyecto', component: InterfazProyecto, props: true },
  { path: '/crear-proyecto', component: creacionProyecto },
  { path: '/plantillas-proyecto', component: PlantillasProyecto },
  { path: '/crear-plantilla', component: CrearPlantilla},
  { path: '/editar-plantilla/:id', name: 'EditarPlantilla', component: EditarPlantilla},
  { path: '/mis-tareas', component: MisTareas},
  { path: '/interfaz-tarea/:projectId/:taskId', name: 'InterfazTarea', component: InterfazTarea, props: true },
  { path: '/crear-tarea/:id', name: 'CrearTarea', component: CrearTarea, props: true}
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

<template>
  <div class="bg-custom">
    <!-- Navbar para mobile -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light d-lg-none">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu"
          aria-controls="offcanvasMenu">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#">Menú</a>
      </div>
    </nav>

    <!-- Menú lateral móvil -->
    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasMenu" aria-labelledby="offcanvasMenuLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasMenuLabel">Menú</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link mi-link" @click="crearProyecto"><i class="fa-solid fa-folder-plus me-1"></i> Crear
              Proyecto</a>
          </li>
          <li class="nav-item">
            <a class="nav-link mi-link" @click="irPlantillasProyecto"><i class="fa-solid fa-folder-tree me-1"></i>
              Utilizar Plantillas</a>
          </li>
          <li class="nav-item">
            <a class="nav-link mi-link" @click="irMisTareas"><i class="fa-solid fa-list-check me-1"></i> Mis Tareas</a>
          </li>
          <li class="nav-item dropdown custom-dropdown">
            <a class="nav-link dropdown-toggle mi-link" data-bs-toggle="dropdown" href="#"><i
                class="fa-solid fa-folder-minus me-1"></i> Proyectos</a>
            <ul class="dropdown-menu">
              <li v-for="proyecto in proyectos" :key="proyecto.id">
                <div class="d-flex align-items-center">
                  <a class="dropdown-item boton-menu-proyecto" @click="irInterfazProyecto(proyecto.id)"><i
                      class="fa-regular fa-folder-open"></i>
                    {{ proyecto.nombre }}</a>
                  <span class="ms-1">
                    <a @click="redirectToEditProject(proyecto.id)" class="link-secondary mi-link"><i
                        class="fa-solid fa-edit"></i></a>
                  </span>
                  <span class="ms-2">
                    <a class="link-secondary mi-link" @click="deleteProject(proyecto.id)"
                      id="btn-eliminar-escritorio"><i class="fa-solid fa-trash me-3"></i></a>
                  </span>
                </div>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link mi-link" @click="irEtiquetas"><i class="fa-solid fa-tags me-1"></i> Etiquetas</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row">
        <!-- Sidebar para escritorio -->
        <div class="col-md-3 custom-col d-none d-lg-block">
          <img src="../assets/img/logos/logotipo.png" class="logo-inicio" width="300" />
          <ul class="nav flex-column">
            <li class="nav-item">
              <a class="nav-link mi-link" @click="crearProyecto"><i class="fa-solid fa-folder-plus me-1"></i>
                Crear Proyecto</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mi-link" @click="irPlantillasProyecto"><i class="fa-solid fa-folder-tree me-1"></i>
                Utilizar Plantillas de Proyecto</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mi-link" @click="irMisTareas"><i class="fa-solid fa-list-check me-1"></i> Mis
                Tareas</a>
            </li>
            <li class="nav-item dropdown custom-dropdown">
              <a class="nav-link dropdown-toggle mi-link" data-bs-toggle="dropdown" href="#"><i
                  class="fa-solid fa-folder-minus me-1"></i> Proyectos</a>
              <ul class="dropdown-menu">
                <li v-for="proyecto in proyectos" :key="proyecto.id">
                  <div class="d-flex align-items-center">
                    <a class="dropdown-item boton-menu-proyecto" :id="proyecto.nombre" :value="proyecto.nombre" @click="irInterfazProyecto(proyecto.id)"><i
                        class="fa-regular fa-folder-open"></i>
                      {{ proyecto.nombre }}</a>
                    <span class="ms-1">
                      <a :id="'edit-' + proyecto.nombre" @click="redirectToEditProject(proyecto.id)" class="link-secondary mi-link"><i
                          class="fa-solid fa-edit"></i></a>
                    </span>
                    <span class="ms-2">
                      <a class="link-secondary mi-link" @click="deleteProject(proyecto.id)"
                        :id="'btn-' + proyecto.nombre"><i class="fa-solid fa-trash me-3"></i></a>
                    </span>
                  </div>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link mi-link" @click="irEtiquetas"><i class="fa-solid fa-tags me-1"></i> Etiquetas</a>
            </li>
          </ul>
        </div>

        <!-- Contenido principal -->
        <div class="col custom-col-main">
          <header>
            <div class="header d-flex justify-content-end align-items-center p-3">
              <div class="d-flex align-items-center">
                <!-- 🔍 Lupa -->
                <div class="input-group me-3" style="width: 50px;">
                  <i class="fas fa-search" @click="mostrarModalBusqueda = true"
                    style="color: #2E7060; font-size: 30px;"></i>
                </div>
                <a href="notificaciones.html" class="me-2"><i class="fas fa-bell"></i></a>
                <button class="btn btn-cerrar-sesion-ip" @click="confirmarCerrarSesion">
                  <i class="fa-solid fa-right-to-bracket me-1"></i> Cerrar Sesión
                </button>
                <a class="btn btn-perfil" @click="irPerfil"><i class="fa-solid fa-user me-1"></i> Perfil</a>
              </div>
            </div>
            <div class="text-center">
              <h3><span class="badge p-4 color-badge">¿Que Proyecto Crearemos Hoy?</span></h3>
            </div>
          </header>

          <section>
            <!-- 🔍 Modal de búsqueda -->
            <div class="modal fade" :class="{ show: mostrarModalBusqueda }" tabindex="-1" v-if="mostrarModalBusqueda"
              style="display: block;">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">Buscar Proyecto</h5>
                    <button type="button" class="btn-close" @click="cerrarModalBusqueda"></button>
                  </div>
                  <div class="modal-body">
                    <input type="text" class="form-control" v-model="busqueda"
                      placeholder="Escribe el nombre del proyecto" />
                    <ul class="list-group mt-3" v-if="busqueda">
                      <a class="list-group-item boton-menu-proyecto" @click="irInterfazProyecto(proyecto.id)"
                        v-for="proyecto in resultadosFiltrados" :key="proyecto.id">
                        {{ proyecto.nombre }}
                      </a>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="mostrarModalBusqueda" class="modal-backdrop fade show"></div>

            <!-- Galería de proyectos -->
            <div class="container-fluid grid project-container">
              <div class="row mb-3" v-for="(fila, filaIndex) in proyectosChunked" :key="filaIndex">
                <div class="col text-center" v-for="(proyecto, i) in fila" :key="i">
                  <div class="project-box">
                    <img class="img-fluid" :src="imagen" />
                  </div>
                  <div class="mt-3">
                    <input class="form-check-input" type="radio" name="project" :id="proyecto.id"
                      @click="irInterfazProyecto(proyecto.id)" />
                    <label class="form-check-label label-project" :for="proyecto.id">{{ proyecto.nombre }}</label>
                  </div>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col"></div>
                <div class="col"></div>
                <div class="col d-flex justify-content-end">
                  <button @click="crearProyecto" class="btn btn-primary rounded-circle buton-crear">
                    <i class="fa-solid fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import api from '@/services/api';
import imgVeterinaria from '../assets/img/proyecto_veterinaria.jpg';
import imgFinanzas from '../assets/img/proyecto_finanzas.jpg';
import imgSoftware from '../assets/img/proyecto_software.jpg';
import imgSocial from '../assets/img/proyecto_social.jpg';
import imgInvestigacion from '../assets/img/proyecto_ambiental.jpg';

export default {
  data() {
    return {
      proyectos: [],
      mostrarModalBusqueda: false,
      busqueda: '',
      imagen: '',
      availableAvatars: [
        imgVeterinaria,
        imgFinanzas,
        imgSoftware,
        imgSocial,
        imgInvestigacion
      ],
      router: useRouter()
    }
  },
  computed: {
    proyectosChunked() {
      return [this.proyectos.slice(0, 3), this.proyectos.slice(3, 6)];
    },
    resultadosFiltrados() {
      return this.proyectos.filter(p =>
        p.nombre.toLowerCase().includes(this.busqueda.toLowerCase())
      );
    }
  },
  mounted() {
    document.title = "Interfaz Principal | TaskMaster Pro";
    this.getProjects();
  },
  methods: {
    async getProjects() {
      try {
        const response = await api.get('/project');
        this.proyectos = response.data.data;
        const randomAvatar = this.availableAvatars[Math.floor(Math.random() * this.availableAvatars.length)];
        this.imagen = randomAvatar;
        console.log(response.data);
      } catch (error) {
        if (error.response && error.response.data) {
          const serverErrors = error.response.data;
          if (serverErrors.mensaje === 'Usuario no autenticado') {
            console.log(serverErrors.mensaje);
            alert(`${serverErrors.mensaje}, debes loguearte para acceder a las funciones de esta ruta.`);
            this.$router.push('/iniciar-sesion');
          } else {
            console.log(serverErrors);
            this.$router.push('/error500');
          }
        }
      }
    },
    redirectToEditProject(projectId) {
      this.$router.push({ name: 'EditarProyecto', params: { id: projectId } });
    },
    async deleteProject(projectId) {
      try {
        if (confirm('¿Estás seguro que deseas eliminar este proyecto?')) {
          const response = await api.delete(`/project/${projectId}}`);
          this.proyectos = this.proyectos.filter(project => project.id !== projectId);
          console.log(response.data.message);
          alert(response.data.message);
        }
      } catch (error) {
        if (error.response && error.response.data) {
          const serverErrors = error.response.data;
          if (serverErrors.message === 'Project not exists') {
            console.log(serverErrors.message);
            alert(serverErrors.message);
          } else if (serverErrors.message === 'Proyecto no eliminado') {
            console.log(serverErrors.message);
            alert(serverErrors.message);
          } else if (serverErrors.mensaje === 'Usuario no autenticado') {
            console.log(serverErrors.mensaje);
            alert(`${serverErrors.mensaje}, debes loguearte para acceder a las funciones de esta ruta.`);
            this.$router.push('/iniciar-sesion');
          } else if (serverErrors.mensaje === 'No tienes permisos para realizar esta acción.') {
            console.log(serverErrors.mensaje);
            this.$router.push('/error403');
          } else {
            console.log(serverErrors);
            this.$router.push('/error500');
          }
        }
      }
    },
    irPerfil() {
      this.router.push('/perfil-completo');
    },
    crearProyecto() {
      this.router.push('/crear-proyecto');
    },
    async confirmarCerrarSesion() {
      if (confirm("¿Estás seguro que quieres cerrar sesión?")) {
        const response = await api.post("/logout");
        this.router.push("/iniciar-sesion");
        alert(response.data.message);
      }
    },
    irPlantillasProyecto() {
      this.router.push('/plantillas-proyecto');
    },
    irMisTareas() {
      this.router.push('/mis-tareas');
    },
    cerrarModalBusqueda() {
      this.mostrarModalBusqueda = false;
      this.busqueda = '';
    },
    irInterfazProyecto(projectId) {
      this.$router.push({ name: 'InterfazProyecto', params: { id: projectId } });
    },
    irEtiquetas() {
      this.$router.push('/etiquetas-view');
    }
  }
}
</script>

<style scoped>
/* Tus estilos aquí */
</style>
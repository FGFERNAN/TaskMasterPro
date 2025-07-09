<template>
  <div class="bg-custom">
    <!-- Navbar para móvil -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light d-lg-none">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#">Menú</a>
      </div>
    </nav>

    <!-- Menú lateral móvil -->
    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasMenu">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title">Menú</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link mi-link" @click="crearProyecto">
              <i class="fa-solid fa-folder-plus me-1"></i> Crear Proyecto
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link mi-link" @click="irPlantillasProyecto">
              <i class="fa-solid fa-folder-tree me-1"></i> Utilizar Plantillas de Proyecto
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link mi-link"  @click="irMisTareas">
              <i class="fa-solid fa-list-check me-1"></i> Mis Tareas
            </a>
          </li>
          <li class="nav-item dropdown custom-dropdown">
            <a class="nav-link dropdown-toggle mi-link" data-bs-toggle="dropdown" href="#">
              <i class="fa-solid fa-folder-minus me-1"></i> Proyectos
            </a>
            <ul class="dropdown-menu">
              <li v-for="proyecto in proyectos" :key="proyecto.id">
                <div class="d-flex align-items-center">
                  <a class="dropdown-item boton-menu-proyecto" @click="irInterfazProyecto(proyecto.id)">
                    <i class="fa-regular fa-folder-open"></i> {{ proyecto.nombre }}
                  </a>
                  <span class="ms-1">
                    <a @click="redirectToEditProject(proyecto.id)" class="link-secondary mi-link">
                      <i class="fa-solid fa-edit"></i>
                    </a>
                  </span>
                  <span class="ms-2">
                    <a class="link-secondary mi-link" @click="deleteProject(proyecto.id)">
                      <i class="fa-solid fa-trash me-3"></i>
                    </a>
                  </span>
                </div>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link mi-link" @click="irEtiquetas">
              <i class="fa-solid fa-tags me-1"></i> Etiquetas
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row">
        <!-- Sidebar desktop -->
        <div class="col-md-3 custom-col d-none d-lg-block">
          <img src="../assets/img/logos/logotipo.png" class="logo-inicio boton-menu-proyecto" @click="irInterfazPrincipal" width="300" />
          <ul class="nav flex-column">
            <li class="nav-item">
              <a class="nav-link mi-link" @click="crearProyecto">
                <i class="fa-solid fa-folder-plus me-1"></i> Crear Proyecto
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link mi-link" @click="irPlantillasProyecto">
                <i class="fa-solid fa-folder-tree me-1"></i> Utilizar Plantillas de Proyecto
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link mi-link" @click="irMisTareas">
                <i class="fa-solid fa-list-check me-1"></i> Mis Tareas
              </a>
            </li>
            <li class="nav-item dropdown custom-dropdown">
              <a class="nav-link dropdown-toggle mi-link" data-bs-toggle="dropdown" href="#">
                <i class="fa-solid fa-folder-minus me-1"></i> Proyectos</a>
              <ul class="dropdown-menu">
                <li v-for="proyecto in proyectos" :key="proyecto.id">
                  <div class="d-flex align-items-center">
                    <a class="dropdown-item boton-menu-proyecto" @click="irInterfazProyecto(proyecto.id)">
                      <i class="fa-regular fa-folder-open"></i> {{ proyecto.nombre }}
                    </a>
                    <span class="ms-1">
                      <a @click="redirectToEditProject(proyecto.id)" class="link-secondary mi-link">
                        <i class="fa-solid fa-edit"></i>
                      </a>
                    </span>
                    <span class="ms-2">
                      <a class="link-secondary mi-link" @click="deleteProject(proyecto.id)">
                        <i class="fa-solid fa-trash me-3"></i>
                      </a>
                    </span>
                  </div>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link mi-link" @click="irEtiquetas">
                <i class="fa-solid fa-tags me-1"></i> Etiquetas
              </a>
            </li>
          </ul>
        </div>

        <!-- Contenido principal -->
        <div class="col custom-col-main">
          <header>
            <div class="header d-flex justify-content-end align-items-center p-3">
              <div class="d-flex align-items-center">
                <a @click="irNotificaciones" class="me-2"><i class="fas fa-bell"></i></a>
                <button class="btn btn-cerrar-sesion" @click="confirmarCerrarSesion">
                  <i class="fa-solid fa-right-to-bracket me-1"></i> Cerrar Sesión
                </button>
                <a class="btn btn-perfil" @click="irPerfil"><i class="fa-solid fa-user me-1"></i> Perfil</a>
              </div>
            </div>

            <section class="container-fluid mi-container">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h2>Mis Tareas</h2>
              </div>
              <hr style="height:5px; background-color:#000; margin-top:-10px;" />

              <div class="input-group mb-2 custom-search-input">
                <span class="input-group-text">
                  <i class="fa-solid fa-search"></i>
                </span>
                <input type="text" class="form-control" placeholder="Buscar en Tareas" v-model="search" />
              </div>

              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Nombre Tarea</th>
                      <th>Fecha de Entrega</th>
                      <th>Proyecto</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="task in filterTask" :key="task.nombre">
                      <td>
                        <a class="nav-link mi-link" @click="irAInterfazTarea(task.proyectoID, task.id)" >{{ task.nombre }}</a>
                      </td>
                      <td>{{ formatearFecha(task.fechaFin) }}</td>
                      <td>{{ task.nombreProyecto }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </header>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import api from '@/services/api';
export default {
  data() {
    return {
      search: '',
      tareas: [],
      proyectos: []
    };
  },
  computed: {
    filterTask() {
      return this.tareas.filter(t =>
        t.nombre.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
  methods: {
    async confirmarCerrarSesion() {
      if (confirm("¿Estás seguro que quieres cerrar sesión?")) {
        const response = await api.post("/logout");
        this.$router.push("/iniciar-sesion");
        alert(response.data.message);
      }
    },
    formatearFecha(fechaISO) {
      const fecha = new Date(fechaISO);
      return fecha.toLocaleDateString('es-CO', {
        day: 'numeric',
        month: 'long'
      });
    },
    async getProjects() {
      try {
        const response = await api.get('/project');
        this.proyectos = response.data.data;
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
    async getMyTask() {
      try {
        const response = await api.get(`/task/misTareas`);
        this.tareas = response.data.data;
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
    crearProyecto() {
      this.$router.push('/crear-proyecto');
    },
    irPlantillasProyecto() {
      this.$router.push('/plantillas-proyecto');
    },
    irInterfazProyecto(projectId) {
      this.$router.push({ name: 'InterfazProyecto', params: { id: projectId } });
    },
    irAInterfazTarea(projectID, taskID) {
      this.$router.push({ name: "InterfazTarea", params: { projectId: projectID, taskId: taskID }})
    },
    irMisTareas() {
      this.$router.push('/mis-tareas');
    },
    redirectToEditProject(projectId) {
      this.$router.push({ name: 'EditarProyecto', params: { id: projectId } });
    },
    irPerfil() {
      this.$router.push("/perfil-completo");
    },
    irInterfazPrincipal() {
      this.$router.push('/interfaz-principal');
    },
     irNotificaciones() {
      this.$router.push('/notificaciones');
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
    irEtiquetas() {
      this.$router.push('/etiquetas-view');
    }
  },
  async mounted() {
    document.title = "Mis Tareas | TaskMaster Pro";
    await this.getProjects();
    await this.getMyTask();
  }
};
</script>

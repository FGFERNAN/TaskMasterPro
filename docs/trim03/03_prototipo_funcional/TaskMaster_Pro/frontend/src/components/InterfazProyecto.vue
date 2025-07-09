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
          <img src="../assets/img/logos/logotipo.png" @click="irInterfazPrincipal"
            class="logo-inicio boton-menu-proyecto" width="300" />
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
        <!-- Main content -->
        <div class="col custom-col-main">
          <header>
            <div class="header d-flex justify-content-end align-items-center p-3">
              <div class="d-flex align-items-center">
                <a href="notificaciones.html" class="me-2">
                  <i class="fas fa-bell"></i>
                </a>
                <button class="btn btn-cerrar-sesion-ip" @click="confirmarCerrarSesion"><i
                    class="fa-solid fa-right-to-bracket me-1"></i> Cerrar Sesión</button>
                <a class="btn btn-perfil" @click="irPerfil"><i class="fa-solid fa-user me-1"></i> Perfil</a>
              </div>
            </div>
          </header>
          <section class="container-fluid mi-container position-relative">
            <div class="row align-items-center mb-3">
              <div class="col-12 col-lg-4 col-xl-4 col-xxl-3 mb-2 mb-lg-0">
                <h2>{{ nombre }}</h2>
              </div>
              <div class="col-6 col-lg-3 col-xl-3 col-xxl-2 mb-2 mb-lg-0">
                <button class="btn btn-secondary buton-miembros w-100" @click="navigateToMembers(id)">
                  <i class="fa-regular fa-user me-1"></i> Miembros
                </button>
              </div>
              <div class="col-6 col-lg-3 col-xl-3 col-xxl-2 dropdown mb-2 mb-lg-0">
                <button class="btn btn-secondary buton-mensaje dropdown-toggle w-100" type="button" id="dropdownMessage"
                  data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="fa-regular fa-message me-1"></i> Mensaje
                </button>
                <ul class="dropdown-menu dropdown-menu-custom" aria-labelledby="dropdownMessage">
                  <li><a @click="irMensajeDirecto" class="dropdown-item"><i class="fa-solid fa-user me-1"></i>
                      Directo</a></li>
                  <li><a @click="irMensajeGrupal" class="dropdown-item"><i class="fa-solid fa-users me-1"></i>
                      Grupal</a></li>
                </ul>
              </div>
              <div class="col-12 col-lg-12 col-xxl-4 mb-2 mb-lg-0">
                <div class="progress w-100" role="progressbar" aria-label="Success example" :aria-valuenow="porcentajeNum"
                  aria-valuemin="0" aria-valuemax="100">
                  <div class="progress-bar bg-success" :style="{width: porcentaje }">{{ porcentaje }}</div>
                </div>
              </div>
              <div class="etiqueta position-absolute">
                Etiqueta
              </div>
            </div>
            <hr style="height:5px; background-color:#000; margin-top:-10px;">
            <div class="d-flex justify-content-between mb-3">
              <button @click="navigateToCreateTask(proyectos.id)" class="btn btn-success"><i
                  class="fa-solid fa-plus me-1"></i>
                Agregar Tarea</button>
            </div>
            <div class="accordion accordion-flush table-container" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                    aria-expanded="true" aria-controls="collapseOne">
                    Tareas Pendientes
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <input class="form-control custom-search-input mb-2" type="search"
                      placeholder="Buscar en Tareas Pendientes" v-model="searchQuery">
                    <div class="table-responsive">
                      <table class="table table-bordered">
                        <thead>
                          <tr>
                            <th>Nombre Tarea</th>
                            <th>Fecha de Entrega</th>
                            <th>Responsable</th>
                            <th>Prioridad</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="task in filterTaskPending" :key="task.id">
                            <td><a class="nav-link mi-link" @click="irAInterfazTarea(task.proyectoID, task.id)" >{{ task.nombre }}</a></td>
                            <td>{{ formatearFecha(task.fechaFin) }}</td>
                            <td>{{ task.usuarioID }}</td>
                            <td>{{ task.prioridad }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Tareas En Curso -->
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Tareas En Curso
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <input class="form-control custom-search-input mb-2" v-model="searchInProgress" type="search"
                      placeholder="Buscar en Tareas En Curso">
                    <div class="table-responsive">
                      <table class="table table-bordered">
                        <thead>
                          <tr>
                            <th>Nombre Tarea</th>
                            <th>Fecha de Entrega</th>
                            <th>Responsable</th>
                            <th>Prioridad</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="task in filterTaskInProgress" :key="task.nombre">
                            <td><a :id="'edit-' + task.nombre" class="nav-link mi-link" @click="irAInterfazTarea(task.proyectoID, task.id)" >{{ task.nombre }}</a></td>
                            <td>{{ formatearFecha(task.fechaFin) }}</td>
                            <td>{{ task.usuarioID }}</td>
                            <td>{{ task.prioridad }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Tareas Terminadas -->
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Tareas Terminadas
                  </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <input class="form-control custom-search-input mb-2" v-model="searchCompleted" type="search"
                      placeholder="Buscar en Tareas Terminadas">
                    <div class="table-responsive">
                      <table class="table table-bordered">
                        <thead>
                          <tr>
                            <th>Nombre Tarea</th>
                            <th>Fecha de Entrega</th>
                            <th>Responsable</th>
                            <th>Prioridad</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="task in filterTaskFinished" :key="task.nombre">
                            <td><a class="nav-link mi-link" @click="irAInterfazTarea(task.proyectoID, task.id)" >{{ task.nombre }}</a></td>
                            <td>{{ formatearFecha(task.fechaFin) }}</td>
                            <td>{{ task.usuarioID }}</td>
                            <td>{{ task.prioridad }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
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
import api from '@/services/api';
import { useRouter } from 'vue-router';
export default {
  data() {
    return {
      searchQuery: '',
      searchInProgress: '',
      searchCompleted: '',
      tasksEarring: [],
      inProgressTasks: [],
      completedTasks: [],
      proyectos: [],
      nombre: '',
      porcentaje: '',
      porcentajeNum: '',
      router: useRouter()
    };
  },
  computed: {
    filterTaskPending() {
      return this.tasksEarring.filter(t =>
        t.nombre.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
    filterTaskInProgress() {
      return this.inProgressTasks.filter(t =>
        t.nombre.toLowerCase().includes(this.searchInProgress.toLowerCase())
      );
    },
    filterTaskFinished() {
      return this.completedTasks.filter(t =>
        t.nombre.toLowerCase().includes(this.searchCompleted.toLowerCase())
      );
    }
  },
  methods: {
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
    async getTaskEarring(proyectoID) {
      try {
        const response = await api.get(`/task/earring/${proyectoID}`);
        this.tasksEarring = response.data.data;
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
    async getTaskInProgress(proyectoID) {
      try {
        const response = await api.get(`/task/inProgress/${proyectoID}`);
        this.inProgressTasks = response.data.data;
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
    async getTaskFinished(proyectoID) {
      try {
        const response = await api.get(`/task/finished/${proyectoID}`);
        this.completedTasks = response.data.data;
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
    async getProjectById(projectId) {
      try {
        const response = await api.get(`/project/${projectId}`);
        this.nombre = response.data.data.nombre;
      } catch (error) {
        if (error.response && error.response.data) {
          const serverErrors = error.response.data;
          if (serverErrors.message === 'Proyecto no encontrado') {
            console.log(serverErrors);
            alert(`${serverErrors.message} en la base de datos`);
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
    async confirmarCerrarSesion() {
      if (confirm("¿Estás seguro que quieres cerrar sesión?")) {
        const response = await api.post("/logout");
        this.router.push("/iniciar-sesion");
        alert(response.data.message);
      }
    },
    calculoPorcentaje() {
      try {
        const totalTareas = this.tasksEarring.length + this.inProgressTasks.length + this.completedTasks.length;
        if(totalTareas === 0) {
          this.porcentaje = '0%';
          return;
        }
        const tareasCompletadas = this.completedTasks.length;
        const reglaDeTres = (100*tareasCompletadas)/totalTareas;
        const results = `${Math.round(reglaDeTres)}%`;
        this.porcentaje = results;
        this.porcentajeNum = Math.round(reglaDeTres);
        console.log(totalTareas);
      } catch (err) {
        console.error('Error al calcular el porcentaje: ', err.message);
      }
    },
    irPlantillasProyecto() {
      this.router.push('/plantillas-proyecto');
    },
    irInterfazPrincipal() {
      this.router.push('/interfaz-principal');
    },
    navigateToMembers(projectId) {
      this.$router.push({ name: 'Miembros', params: { id: projectId } });
    },
    irPerfil() {
      this.$router.push("/perfil-completo");
    },
    navigateToCreateTask(projectId) {
      this.$router.push({ name: 'CrearTarea', params: { id: projectId } });
    },
    irMisTareas() {
      this.router.push('/mis-tareas');
    },
    irAInterfazTarea(projectID, taskID) {
      this.$router.push({ name: "InterfazTarea", params: { projectId: projectID, taskId: taskID }})
    },
    irInterfazProyecto(projectId) {
      this.$router.push({ name: 'InterfazProyecto', params: { id: projectId } });
    },
    crearProyecto() {
      this.router.push('/crear-proyecto');
    },
    irEtiquetas() {
      this.$router.push('/etiquetas-view');
    },
    irMensajeDirecto() {
      this.$router.push('/mensajes-directos');
    },
    irMensajeGrupal() {
      this.$router.push('/mensajes-grupales');
    }
  },

  irAOtraVista() {
    this.$router.push('/interfaz-principal');
  },
  watch: {
    '$route.params.id': {
      immediate: true,
      async handler(newId) {
        if (newId) {
          await this.getProjectById(newId);
          await this.getTaskEarring(newId);
          await this.getTaskInProgress(newId);
          await this.getTaskFinished(newId);
          this.calculoPorcentaje(newId);
          // También podrías recargar otras datos dependientes del proyecto
        }
      }
    }
  },
  async mounted() {
    document.title = "Interfaz Proyecto | TaskMaster Pro";
    const projectId = this.$route.params.id;
    await this.getProjects();
    await this.getTaskEarring(projectId);
    await this.getTaskInProgress(projectId);
    await this.getTaskFinished(projectId);
    await this.getProjectById(projectId);
    this.calculoPorcentaje();
  }
};

</script>

<style scoped>
@import '@/assets/css/interfazProyecto.css';
</style>
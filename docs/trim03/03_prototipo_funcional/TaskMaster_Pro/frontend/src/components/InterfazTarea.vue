<template>
  <div class="bg">
    <nav class="navbar navbar-expand-lg navbar-light bg-light d-lg-none">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu">
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
            <a class="nav-link mi-link" href="etiquetas.html"><i class="fa-solid fa-tags me-1"></i> Etiquetas</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <!-- Sidebar para escritorio -->
        <div class="col-md-3 custom-col d-none d-lg-block">
          <img src="../assets/img/logos/logotipo.png" @click="irInterfazPrincipal" class="logo-inicio boton-menu-proyecto" width="300" />
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
                    <a class="dropdown-item boton-menu-proyecto" :id="proyecto.nombre" :value="proyecto.nombre"
                      @click="irInterfazProyecto(proyecto.id)"><i class="fa-regular fa-folder-open"></i>
                      {{ proyecto.nombre }}</a>
                    <span class="ms-1">
                      <a :id="'edit-' + proyecto.nombre" @click="redirectToEditProject(proyecto.id)"
                        class="link-secondary mi-link"><i class="fa-solid fa-edit"></i></a>
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
              <a class="nav-link mi-link" href="etiquetas.html"><i class="fa-solid fa-tags me-1"></i> Etiquetas</a>
            </li>
          </ul>
        </div>


        <div class="col custom-col-main mb-5">
          <header>
            <div class="header d-flex justify-content-between align-items-center p-3">
              <button class="btn me-md-2 mt-1 btn-regresar" @click="goBack">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                  <path
                    d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                </svg> Regresar
              </button>
              <div class="d-flex align-items-center">
                <a class="me-2">
                  <i class="fas fa-bell"></i>
                </a>
                <button class="btn btn-cerrar-sesion" @click="confirmarCerrarSesion">
                  <i class="fa-solid fa-right-to-bracket me-1"></i> Cerrar Sesión
                </button>
                <a @click="irPerfil" class="btn btn-perfil">
                  <i class="fa-solid fa-user me-1"></i> Perfil
                </a>
              </div>
            </div>
          </header>

          <div class="main-content-container position-relative">
            <!-- Botones superiores -->
            <div class="top-right-buttons mt-5">
              <button class="btn1">Registrar Tiempo</button>
              <button class="btn1">Agregar Comentario</button>
              <button class="btn1">Adjuntar Archivo</button>
            </div>

            <!-- Botones de tarea -->
            <div class="task-buttons mb-5">
              <button class="btn-tarea">{{ nombre }}</button>
              <button class="btn-danger1" id="buton-eliminar-tarea" @click="eliminarTarea(id)" >
                <i class="fa-solid fa-trash me-1"></i> Eliminar
              </button>
            </div>

            <form @submit.prevent="updateTask" novalidate>
              <!-- Nombre -->
              <div class="mb-1">
                <label for="nombreTarea" class="form-label1">Nombre:</label>
                <div class="input-icon-container">
                  <input type="text" class="form-control1" id="nombreTarea" v-model="nombre" />
                  <div class="icon-container">
                    <div class="collapse-section">
                      <button type="button" class="collapse-toggle" data-bs-toggle="modal"
                        data-bs-target="#modal-comentarios">
                        <i class="fa-regular fa-comments"></i><span>Comentarios</span>
                      </button>
                    </div>
                    <div class="collapse-section">
                      <button type="button" class="collapse-toggle" data-bs-toggle="modal"
                        data-bs-target="#modal-archivos">
                        <i class="fa-solid fa-file"></i><span>Archivos</span>
                      </button>
                      <div id="archivos" class="collapse-content">
                        <p>Contenido de Archivos...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Descripción -->
              <div class="mb-3">
                <label for="descripcionTarea" class="form-label1">Descripción:</label>
                <input type="text" class="form-control1" id="descripcionTarea" v-model="descripcion" />
              </div>

              <!-- Fechas -->
              <div class="mb-3">
                <label for="fechaInicio" class="form-label1">Fecha Inicio:</label>
                <input type="date" class="form-control1" id="fechaInicio" v-model="fechaInicio" />
              </div>
              <div class="mb-3">
                <label for="fechaFin" class="form-label1">Fecha Fin:</label>
                <input type="date" class="form-control1" id="fechaFin" v-model="fechaFin" />
              </div>

              <!-- Estado -->
              <div class="mb-3">
                <label for="estado" class="form-label1">Estado:</label>
                <select class="form-select1" id="estado" v-model="estado">
                  <option value="Pendiente">Pendiente</option>
                  <option value="En Curso">En Curso</option>
                  <option value="Terminada">Terminada</option>
                </select>
              </div>

              <!-- Prioridad -->
              <div class="mb-3">
                <label for="prioridad" class="form-label1">Prioridad:</label>
                <select class="form-select1" id="prioridad" v-model="prioridad">
                  <option value="Alta">Alta</option>
                  <option value="Media">Media</option>
                  <option value="Baja">Baja</option>
                </select>
              </div>

              <!-- Responsable -->
              <div class="mb-3">
                <label for="responsable" class="form-label1">Responsable:</label>
                <select class="form-select1" id="responsable" v-model="usuarioID">
                  <option v-for="member in members" :key="member.id" :value="member.id">{{ member.nombre + ' ' +
                    member.apellidos }}</option>
                </select>
              </div>
              <!-- Botón Guardar -->
              <div class="bottom-right-button">
                <button type="submit" class="btn-primary1 btn1">Guardar</button>
              </div>
            </form>

            <!-- Modal Comentarios -->
            <div class="modal fade" id="modal-comentarios" tabindex="-1" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-3">Comentarios</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div class="card mb-3" v-for="comentario in comentarios" :key="comentario.id">
                      <div class="card-body">
                        <h5 class="card-title">{{ comentario.autor }}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">{{ comentario.fecha }}</h6>
                        <p class="card-text">{{ comentario.texto }}</p>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary mi-buton" data-bs-dismiss="modal">Cerrar</button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Modal Archivos -->
            <div class="modal fade" id="modal-archivos" tabindex="-1" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-3">Archivos Adjuntos</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div class="card mb-3" style="width: 100%;" v-for="archivo in archivos" :key="archivo.nombre">
                      <div class="card-body mi-card" data-bs-toggle="tooltip" data-bs-placement="top"
                        data-bs-html="true"
                        :data-bs-title="`<b>Cargado:</b> ${archivo.fecha} <br> <b>Tamaño:</b> ${archivo.tamano}`">
                        <h5 class="card-title">{{ archivo.nombre }}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">
                          {{ archivo.tipo }}
                          <button href="#" class="buton-descargar text-body-secondary">Descargar</button>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary mi-buton" data-bs-dismiss="modal">Cerrar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import api from '@/services/api';
import { useRouter } from 'vue-router';
// NO importar Tooltip - usar el objeto global de Bootstrap
// import { Tooltip } from 'bootstrap';

export default {
  mounted() {
    document.title = "Interfaz Tarea | TaskMaster Pro";
    // Inicializar tooltips
    this.initTooltips();
    this.getProjects();
    const taskId = this.$route.params.taskId;
    this.getTaskById(taskId);
    const projectId = this.$route.params.projectId;
    this.proyectoID = projectId;
    this.getProjectMembers(projectId);
  },
  updated() {
    // Reinicializar tooltips cuando el componente se actualice
    this.initTooltips();
  },
  data() {
    return {
      proyectos: [],
      id: '',
      nombre: '',
      descripcion: '',
      fechaInicio: '',
      fechaFin: '',
      estado: '',
      prioridad: '',
      usuarioID: '',
      proyectoID: '',
      router: useRouter(),
      members: [],
      comentarios: [
        {
          id: 1,
          autor: 'Johan Garcia',
          fecha: '12/05/2024 4:54 PM',
          texto: 'Hola Compañeros esta tarea ya la realice.'
        },
        {
          id: 2,
          autor: 'Erika Triana',
          fecha: '02/07/2024 5:45 PM',
          texto: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit...'
        },
        {
          id: 3,
          autor: 'Andres Garzon',
          fecha: '08/09/2024 2:00 PM',
          texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...'
        }
      ],
      archivos: [
        { nombre: 'Tarea1.pdf', tipo: 'PDF', fecha: '05/09/2024', tamano: '12MB' },
        { nombre: 'wireframes.png', tipo: 'PNG', fecha: '15/07/2024', tamano: '20MB' },
        { nombre: 'carta.docx', tipo: 'DOCX', fecha: '30/05/2024', tamano: '10MB' }
      ]
    }
  },
  methods: {
    formatDateInput(isoDate) {
      if (!isoDate) return ''; // Manejo de valores nulos/undefined

      // Opción 1: Simple y directa (recomendada para tu caso)
      return isoDate.split('T')[0];
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
    async getTaskById(TaskId) {
      try {
        const response = await api.get(`/task/${TaskId}`);
        this.id = response.data.data.id;
        this.nombre = response.data.data.nombre;
        this.descripcion = response.data.data.descripcion;
        this.fechaInicio = this.formatDateInput(response.data.data.fechaInicio);
        this.fechaFin = this.formatDateInput(response.data.data.fechaFin);
        this.estado = response.data.data.estado;
        this.prioridad = response.data.data.prioridad;
        this.usuarioID = response.data.data.usuarioID;
      } catch (error) {
        if (error.response && error.response.data) {
          const serverErrors = error.response.data;
          if (serverErrors.message === 'Tarea no encontrada') {
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
    async updateTask() {
      try {
        const response = await api.put(`/task/${this.id}`, {
          nombre: this.nombre,
          descripcion: this.descripcion,
          fechaInicio: this.fechaInicio,
          fechaFin: this.fechaFin,
          estado: this.estado,
          prioridad: this.prioridad,
          usuarioID: this.usuarioID
        });
        console.log(response.data);
        alert(response.data.message);
        this.$router.push(`/interfaz-proyecto/${this.proyectoID}`);
      } catch (error) {
        if (error.response && error.response.data) {
          const serverErrors = error.response.data;
          if (serverErrors.message === 'Tarea no actualizada') {
            console.log(serverErrors);
            alert(`${serverErrors.message}, ingresa los parametros necesarios para realizar esta acción`);
          } else if (serverErrors.message === 'Unregistered task') {
            console.log(serverErrors);
            alert(`${serverErrors.message}, el proyecto que intentas actualizar no se encuentra en la base de datos.`);
          } else if (serverErrors.message === 'La fecha de inicio no puede ser posterior a la fecha de fin') {
            this.backendErrors.fechaFin = `${serverErrors.message}`;
            this.backendErrors.fechaInicio = `${serverErrors.message}`;
            this.v$.fechaFin.$reset();
            this.v$.fechaInicio.$reset();
          } else if (serverErrors.message === 'El nombre ingresado ya se encuentra registrado en una tarea activa en el sistema') {
            this.backendErrors.nombre = `${serverErrors.message}`;
            this.v$.nombre.$reset();
          } else if (serverErrors.mensaje === 'Usuario no autenticado') {
            console.log(serverErrors.mensaje);
            alert(`${serverErrors.mensaje}, debes loguearte para acceder a esta función`);
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
    async eliminarTarea(id) {
      try {
        if (confirm('¿Estás seguro que deseas eliminar este proyecto?')) {
          const response = await api.delete(`/task/${id}`);
          console.log(response.data.message);
          alert(response.data.message);
          this.$router.push(`/interfaz-proyecto/${this.proyectoID}`)
        }
      } catch (error) {
        if (error.response && error.response.data) {
          const serverErrors = error.response.data;
          if (serverErrors.message === 'Task not exists') {
            console.log(serverErrors.message);
            alert(serverErrors.message);
          } else if (serverErrors.message === 'Tarea no eliminada') {
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
    async getProjectMembers(projectId) {
      try {
        const response = await api.get(`/project/miembros/${projectId}`);
        this.members = response.data.data;
      } catch (error) {
        if (error.response && error.response.data) {
          const serverErrors = error.response.data;
          if (serverErrors.message === 'Este proyecto no tiene ningun miembro asignado') {
            console.log(serverErrors);
            alert(`${serverErrors.message}`);
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
    irInterfazProyecto(projectId) {
      this.$router.push({ name: 'InterfazProyecto', params: { id: projectId } });
    },
    irPlantillasProyecto() {
      this.router.push('/plantillas-proyecto');
    },
    irInterfazPrincipal() {
      this.router.push('/interfaz-principal');
    },
    crearProyecto() {
      this.router.push('/crear-proyecto');
    },
    irPerfil() {
      this.router.push('/perfil-completo');
    },
    goBack() {
      this.$router.go(-1); // Navegar hacia atrás
    },
    irMisTareas() {
      this.router.push('/mis-tareas');
    },
    async confirmarCerrarSesion() {
      if (confirm("¿Estás seguro que quieres cerrar sesión?")) {
        const response = await api.post("/logout");
        this.router.push("/iniciar-sesion");
        alert(response.data.message);
      }
    },
    initTooltips() {
      try {
        // Usar bootstrap global en lugar del import
        const bootstrap = window.bootstrap;
        if (!bootstrap) {
          console.error('Bootstrap no está disponible globalmente');
          return;
        }

        // Destruir tooltips existentes
        const existingTooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        existingTooltips.forEach(element => {
          const tooltip = bootstrap.Tooltip.getInstance(element);
          if (tooltip) {
            tooltip.dispose();
          }
        });

        // Inicializar nuevos tooltips
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        tooltipTriggerList.forEach(tooltipTriggerEl => {
          new bootstrap.Tooltip(tooltipTriggerEl);
        });
      } catch (error) {
        console.error('Error inicializando tooltips:', error);
      }
    }
  }
}
</script>
<style scoped>
@import "@/../../assets/css/interfazTarea.css";
</style>

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
            <a class="nav-link mi-link" href="misTareas.html"><i class="fa-solid fa-list-check me-1"></i> Mis Tareas</a>
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
              <a class="nav-link mi-link" href="misTareas.html"><i class="fa-solid fa-list-check me-1"></i> Mis
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
                <a href="/notificaciones" class="me-2">
                  <i class="fas fa-bell"></i>
                </a>
                <button class="btn btn-cerrar-sesion" @click="confirmarCerrarSesion">
                  <i class="fa-solid fa-right-to-bracket me-1"></i> Cerrar Sesión
                </button>
                <a href="/perfil" class="btn btn-perfil">
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
              <button class="btn-tarea">Tarea 1</button>
              <button class="btn-danger1" id="buton-eliminar-tarea">
                <i class="fa-solid fa-trash me-1"></i> Eliminar
              </button>
            </div>

            <form>
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
                  <option value="1">En Progreso</option>
                  <option value="2">Completado</option>
                  <option value="3">En Espera</option>
                  <option value="4">Cancelado</option>
                </select>
              </div>

              <!-- Prioridad -->
              <div class="mb-3">
                <label for="prioridad" class="form-label1">Prioridad:</label>
                <select class="form-select1" id="prioridad" v-model="prioridad">
                  <option value="1">Alta</option>
                  <option value="2">Media</option>
                  <option value="3">Baja</option>
                </select>
              </div>

              <!-- Responsable -->
              <div class="mb-3">
                <label for="responsable" class="form-label1">Responsable:</label>
                <select class="form-select1" id="responsable" v-model="responsable">
                  <option value="1">Johan Garcia</option>
                  <option value="2">Nikole Bernal</option>
                  <option value="3">Andres Garzon</option>
                </select>
              </div>
            </form>

            <!-- Botón Guardar -->
            <div class="bottom-right-button">
              <button class="btn-primary1 btn1" @click="guardarTarea">Guardar</button>
            </div>

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
import { Tooltip } from 'bootstrap';
export default {
  mounted() {
    document.title = "Interfaz Tarea | TaskMaster Pro";
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.forEach((tooltipTriggerEl) => {
      new Tooltip(tooltipTriggerEl);
    });
  },
  data() {
    return {
      nombre: 'Tarea 1',
      descripcion: 'Realizar wireframes',
      fechaInicio: '2024-02-05',
      fechaFin: '2024-04-07',
      estado: '1',
      prioridad: '1',
      responsable: '1',
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
    guardarTarea() {
      alert('Tarea guardada con éxito');
    }
  }
}
</script>
<style scoped>
@import "@/../../assets/css/interfazTarea.css";
</style>

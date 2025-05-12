<template>
  <div class="container-fluid">
   
    <nav class="navbar navbar-expand-lg navbar-light bg-light d-lg-none">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#">Menú</a>
      </div>
    </nav>

   
    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasMenu">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title">Menú</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="nav flex-column">
          <li class="nav-item">
            <RouterLink class="nav-link mi-link" to="/creacionProyecto"><i class="fa-solid fa-folder-plus me-1"></i> Crear Proyecto</RouterLink>
          </li>
          <!-- Repite enlaces con RouterLink para navegación Vue -->
        </ul>
      </div>
    </div>

    <div class="row">
      <!-- Sidebar -->
      <div class="col-md-3 custom-col d-none d-lg-block">
       <img src="../assets/img/logos/logotipo.png" class="logo-inicio" width="300" />
        <ul class="nav flex-column">
          <li class="nav-item">
            <RouterLink class="nav-link mi-link" to="/creacionProyecto"><i class="fa-solid fa-folder-plus me-1"></i> Crear Proyecto</RouterLink>
          </li>
         <RouterLink class="nav-link mi-link" to="/plantillasProyecto">
            <i class="fa-solid fa-folder-tree me-1"></i> Utilizar Plantillas de Proyecto
        </RouterLink>
          
         <li class="nav-item">
        <RouterLink class="nav-link mi-link" to="/misTareas">
            <i class="fa-solid fa-list-check me-1"></i> Mis Tareas
        </RouterLink>
    </li>
 
     <li class="nav-item dropdown custom-dropdown">
        <a class="nav-link dropdown-toggle mi-link" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
            <i class="fa-solid fa-folder-minus me-1"></i> Proyectos
        </a>
         </li>


         <ul class="dropdown-menu">
            <li>
                <div class="d-flex align-items-center" id="sub-menu-proyectos">
                    <RouterLink class="dropdown-item align-items-center" to="/interfazProyecto">
                        <i class="fa-regular fa-folder-open"></i> Veterinaria
                        <RouterLink to="/editarProyecto" class="link-secondary ms-1 mi-link">
                            <i class="fa-solid fa-edit"></i>
                        </RouterLink>
                        <a id="buton-eliminar" class="link-secondary ms-2 mi-link">
                            <i class="fa-solid fa-trash me-3"></i>
                        </a>
                    </RouterLink>
                    </div>
                     </li>
                      </ul>

                       <li class="nav-item">
        <RouterLink class="nav-link mi-link" to="/etiquetas">
            <i class="fa-solid fa-tags me-1"></i> Etiquetas
        </RouterLink>
    </li>
</ul>
       
      </div>

      
      <div class="col custom-col-main mb-5">
        <header>
          <div class="header d-flex justify-content-between align-items-center p-3">
            <button class="btn me-md-2 mt-1 btn-regresar" @click="goBack">
              <i class="bi bi-caret-left-fill"></i> Regresar
            </button>
            <div class="d-flex align-items-center">
              <RouterLink to="/notificaciones" class="me-2">
                <i class="fas fa-bell"></i>
              </RouterLink>
              <button class="btn btn-cerrar-sesion" @click="confirmarCerrarSesion">
                <i class="fa-solid fa-right-to-bracket me-1"></i> Cerrar Sesión
              </button>
              <RouterLink to="/perfil" class="btn btn-perfil">
                <i class="fa-solid fa-user me-1"></i> Perfil
              </RouterLink>
            </div>
          </div>
        </header>

        <!-- Botones superiores -->
        <div class="top-right-buttons mt-5">
          <RouterLink to="/registrarTiempo" class="btn1">Registrar Tiempo</RouterLink>
          <RouterLink to="/agregarComentarios" class="btn1">Agregar Comentario</RouterLink>
          <RouterLink to="/adjuntarArchivos" class="btn1">Adjuntar Archivo</RouterLink>
        </div>

        <!-- Botones de tarea -->
        <div class="task-buttons mb-5">
          <button class="btn-tarea">Tarea 1</button>
          <button class="btn-danger" id="buton-eliminar-tarea">
            <i class="fa-solid fa-trash me-1"></i> Eliminar
          </button>
        </div>

       <div class="container mt-4">
       <form>
      <!-- Nombre -->
      <div class="mb-1">
        <label for="nombreTarea" class="form-label">Nombre:</label>
        <div class="input-icon-container">
          <input type="text" class="form-control" id="nombreTarea" v-model="nombre" />
          <div class="icon-container">
            <div class="collapse-section">
              <button type="button" class="collapse-toggle" data-bs-toggle="modal" data-bs-target="#modal-comentarios">
                <i class="fa-regular fa-comments"></i><span>Comentarios</span>
              </button>
            </div>
            <div class="collapse-section">
              <button type="button" class="collapse-toggle" data-bs-toggle="modal" data-bs-target="#modal-archivos">
                <i class="fa-solid fa-file"></i><span>Archivos</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Descripción -->
      <div class="mb-3">
        <label for="descripcionTarea" class="form-label">Descripción:</label>
        <input type="text" class="form-control" id="descripcionTarea" v-model="descripcion" />
      </div>

      <!-- Fechas -->
      <div class="mb-3">
        <label for="fechaInicio" class="form-label">Fecha Inicio:</label>
        <input type="date" class="form-control" id="fechaInicio" v-model="fechaInicio" />
      </div>
      <div class="mb-3">
        <label for="fechaFin" class="form-label">Fecha Fin:</label>
        <input type="date" class="form-control" id="fechaFin" v-model="fechaFin" />
      </div>

      <!-- Estado -->
      <div class="mb-3">
        <label for="estado" class="form-label">Estado:</label>
        <select class="form-select" id="estado" v-model="estado">
          <option value="1">En Progreso</option>
          <option value="2">Completado</option>
          <option value="3">En Espera</option>
          <option value="4">Cancelado</option>
        </select>
      </div>

      <!-- Prioridad -->
      <div class="mb-3">
        <label for="prioridad" class="form-label">Prioridad:</label>
        <select class="form-select" id="prioridad" v-model="prioridad">
          <option value="1">Alta</option>
          <option value="2">Media</option>
          <option value="3">Baja</option>
        </select>
      </div>

      <!-- Responsable -->
      <div class="mb-3">
        <label for="responsable" class="form-label">Responsable:</label>
        <select class="form-select" id="responsable" v-model="responsable">
          <option value="1">Johan Garcia</option>
          <option value="2">Nikole Bernal</option>
          <option value="3">Andres Garzon</option>
        </select>
      </div>
    </form>

    <!-- Botón Guardar -->
    <div class="bottom-right-button">
      <button class="btn btn-primary" @click="guardarTarea">Guardar</button>
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
            <div class="card mb-3" v-for="archivo in archivos" :key="archivo.nombre">
              <div
                class="card-body mi-card"
                :data-bs-title="`<b>Cargado:</b> ${archivo.fecha} <br> <b>Tamaño:</b> ${archivo.tamano}`"
                data-bs-toggle="tooltip"
                data-bs-html="true"
              >
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
</template>

<script setup>
import { ref } from 'vue'

const nombre = ref('Tarea 1')
const descripcion = ref('Realizar wireframes')
const fechaInicio = ref('2024-02-05')
const fechaFin = ref('2024-04-07')
const estado = ref('1')
const prioridad = ref('1')
const responsable = ref('1')

const comentarios = ref([
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
])

const archivos = ref([
  { nombre: 'Tarea1.pdf', tipo: 'PDF', fecha: '05/09/2024', tamano: '12MB' },
  { nombre: 'wireframes.png', tipo: 'PNG', fecha: '15/07/2024', tamano: '20MB' },
  { nombre: 'carta.docx', tipo: 'DOCX', fecha: '30/05/2024', tamano: '10MB' }
])

const guardarTarea = () => {
  alert('Tarea guardada con éxito')
}
</script>


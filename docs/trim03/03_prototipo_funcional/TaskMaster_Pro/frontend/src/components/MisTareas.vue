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
            <a class="nav-link mi-link" href="etiquetas.html">
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
          <img src="../assets/img/logos/logotipo.png" class="logo-inicio" width="300" />
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
              <a class="nav-link mi-link" href="etiquetas.html">
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
                <a href="notificaciones.html" class="me-2"><i class="fas fa-bell"></i></a>
                <button class="btn btn-cerrar-sesion" @click="cerrarSesion">
                  <i class="fa-solid fa-right-to-bracket me-1"></i> Cerrar Sesión
                </button>
                <a href="perfil.html" class="btn btn-perfil"><i class="fa-solid fa-user me-1"></i> Perfil</a>
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
                <input type="text" class="form-control" placeholder="Buscar en Tareas" v-model="searchTerm" />
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
                    <tr v-for="(tarea, index) in tareasFiltradas" :key="index">
                      <td>
                        <a v-if="index === 0" class="nav-link mi-link" href="interfazTarea.html">{{ tarea.nombre }}</a>
                        <span v-else>{{ tarea.nombre }}</span>
                      </td>
                      <td>{{ tarea.fecha }}</td>
                      <td>{{ tarea.proyecto }}</td>
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
<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'




const searchTerm = ref('')
const tareas = ref([
  { nombre: 'Tarea 1', fecha: '17 de Agosto', proyecto: 'Veterinaria' },
  { nombre: 'Tarea 2', fecha: '20 de Agosto', proyecto: 'Veterinaria' },
  { nombre: 'Tarea 3', fecha: '2 de Agosto', proyecto: 'Veterinaria' },
  { nombre: 'Tarea 4', fecha: '2 de Junio', proyecto: 'Veterinaria' },
  { nombre: 'Tarea 5', fecha: '17 de Agosto', proyecto: 'TaskMaster' },
  { nombre: 'Tarea 6', fecha: '20 de Julio', proyecto: 'TaskMaster' },
  { nombre: 'Tarea 7', fecha: '23 de Agosto', proyecto: 'TaskMaster' },
  { nombre: 'Tarea 8', fecha: '2 de Junio', proyecto: 'TaskMaster' },
])

const proyectos = ref([
  { id: 1, nombre: 'Veterinaria' },
  { id: 2, nombre: 'TaskMaster' },
])

const tareasFiltradas = computed(() =>
  tareas.value.filter(t =>
    Object.values(t).some(val =>
      val.toLowerCase().includes(searchTerm.value.toLowerCase())
    )
  )
)

const router = useRouter()
const cerrarSesion = () => {
  if (confirm("¿Seguro que quieres cerrar sesión ?")) {
    router.push('/iniciar-sesion')
  }
}

const crearProyecto = () => {
  router.push('/crear-proyecto')
}

const irPlantillasProyecto = () => {
  router.push('/plantillas-proyecto')
}

const irInterfazProyecto = (id) => {
  router.push(`/proyecto/${id}`)
}
const irMisTareas = () => {
  router.push('/mis-tareas')
}
const redirectToEditProject = (id) => {
  router.push(`/proyecto/${id}/editar`)
}

const deleteProject = (id) => {
  if (confirm('¿Deseas eliminar este proyecto?')) {
   
    console.log('Proyecto eliminado:', id)
  }
}

</script>
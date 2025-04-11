<template>
  <div class="bg-custom">
    <!-- Navbar for mobile -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light d-lg-none">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu"
          aria-controls="offcanvasMenu">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#">Menú</a>
      </div>
    </nav>

    <!-- Offcanvas for mobile menu -->
    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasMenu" aria-labelledby="offcanvasMenuLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasMenuLabel">Menú</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link mi-link" href="creacionProyecto.html"><i class="fa-solid fa-folder-plus me-1"></i> Crear
              Proyecto</a>
          </li>
          <li class="nav-item">
            <a class="nav-link mi-link" href="plantillasProyecto.html"><i class="fa-solid fa-folder-tree me-1"></i>
              Utilizar Plantillas de Proyecto</a>
          </li>
          <li class="nav-item">
            <a class="nav-link mi-link" href="misTareas.html"><i class="fa-solid fa-list-check me-1"></i> Mis Tareas</a>
          </li>
          <li class="nav-item dropdown custom-dropdown">
            <a class="nav-link dropdown-toggle mi-link" data-bs-toggle="dropdown" href="#"><i
                class="fa-solid fa-folder-minus me-1"></i> Proyectos</a>
            <ul class="dropdown-menu">
              <li>
                <div class="d-flex align-items-center" id="sub-menu-proyectos">
                  <a class="dropdown-item align-items-center" href="interfazProyecto.html">
                    <i class="fa-regular fa-folder-open"></i> Veterinaria
                  </a>
                  <span class="ms-1">
                    <a href="editarProyecto.html" class="link-secondary mi-link">
                      <i class="fa-solid fa-edit"></i>
                    </a>
                  </span>
                  <span class="ms-2">
                    <a id="buton-eliminar" class="link-secondary mi-link">
                      <i class="fa-solid fa-trash me-3"></i>
                    </a>
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
        <div class="col-md-3 custom-col d-none d-lg-block">
          <img src="../assets/img/logos/logotipo.png" class="logo-inicio" width="300" />
          <ul class="nav flex-column">
            <li class="nav-item">
              <a class="nav-link mi-link" href="creacionProyecto.html"><i class="fa-solid fa-folder-plus me-1"></i>
                Crear Proyecto</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mi-link" href="plantillasProyecto.html"><i class="fa-solid fa-folder-tree me-1"></i>
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
                <li>
                  <div class="d-flex align-items-center" id="sub-menu-proyectos">
                    <a class="dropdown-item align-items-center" href="interfazProyecto.html">
                      <i class="fa-regular fa-folder-open"></i> Veterinaria
                    </a>
                    <span class="ms-1">
                      <a href="editarProyecto.html" class="link-secondary mi-link">
                        <i class="fa-solid fa-edit"></i>
                      </a>
                    </span>
                    <span class="ms-2">
                      <a id="buton-eliminar" class="link-secondary mi-link">
                        <i class="fa-solid fa-trash me-3"></i>
                      </a>
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

        <div class="col custom-col-main">
          <header>
            <div class="header d-flex justify-content-end align-items-center p-3">
              <div class="d-flex align-items-center">
                <a href="notificaciones.html" class="me-2"><i class="fas fa-bell"></i></a>
                <button class="btn btn-cerrar-sesion-ip" @click="confirmarCerrarSesion">
                  <i class="fa-solid fa-right-to-bracket me-1"></i> Cerrar Sesión
                </button>
                <a href="perfil.html" class="btn btn-perfil"><i class="fa-solid fa-user me-1"></i> Perfil</a>
              </div>
            </div>
            <div class="text-center">
              <h3><span class="badge p-4 color-badge">¿Que Proyecto Crearemos Hoy?</span></h3>
            </div>
          </header>

          <section>
            <div class="container-fluid grid project-container">
              <div class="row mb-3" v-for="(fila, filaIndex) in proyectosChunked" :key="filaIndex">
                <div class="col text-center" v-for="(proyecto, i) in fila" :key="i">
                  <div class="project-box">
                    <img class="img-fluid" :src="proyecto.imagen" />
                  </div>
                  <div class="mt-3">
                    <input class="form-check-input" type="radio" name="project" :id="proyecto.id"
                      @click="irAProyecto" />
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

<script setup>
import { ref, computed } from 'vue'

// ✅ Importa imágenes desde src/assets
import imgVeterinaria from '../assets/img/proyecto_veterinaria.jpg'
import imgFinanzas from '../assets/img/proyecto_finanzas.jpg'
import imgSoftware from '../assets/img/proyecto_software.jpg'
import imgSocial from '../assets/img/proyecto_social.jpg'
import imgConstruccion from '../assets/img/proyecto_construccion.jpg'
import imgInvestigacion from '../assets/img/proyecto_ambiental.jpg'

// ✅ Lista de proyectos con imágenes importadas
const proyectos = ref([
  { id: 'project1', nombre: 'Veterinaria', imagen: imgVeterinaria },
  { id: 'project2', nombre: 'Finanzas', imagen: imgFinanzas },
  { id: 'project3', nombre: 'Software', imagen: imgSoftware },
  { id: 'project4', nombre: 'Social', imagen: imgSocial },
  { id: 'project5', nombre: 'Construcción', imagen: imgConstruccion },
  { id: 'project6', nombre: 'Investigación', imagen: imgInvestigacion }
])

const proyectosChunked = computed(() => {
  return [proyectos.value.slice(0, 3), proyectos.value.slice(3, 6)]
})

const irAProyecto = () => {
  window.location.href = 'interfazProyecto.html'
}

const crearProyecto = () => {
  window.location.href = 'creacionProyecto.html'
}

const confirmarCerrarSesion = () => {
  if (confirm('¿Seguro que quieres cerrar sesión ?')) {
    window.location.href = '../../public/index.html'
  }
}
</script>

<style scoped>
/* Tus estilos personalizados aquí */
</style>
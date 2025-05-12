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
        <img src="@/assets/img/logos/logotipo.png" class="logo-inicio" width="300" />
        <ul class="nav flex-column">
          <li class="nav-item">
            <RouterLink class="nav-link mi-link" to="/creacionProyecto"><i class="fa-solid fa-folder-plus me-1"></i> Crear Proyecto</RouterLink>
          </li>
          <!-- Agrega aquí los demás enlaces usando RouterLink -->
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

      
        <form>
          <div class="mb-1">
            <label for="nombreTarea" class="form-label">Nombre:</label>
            <div class="input-icon-container">
              <input type="text" class="form-control" id="nombreTarea" v-model="nombreTarea" />
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
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const nombreTarea = ref('Tarea 1')

const goBack = () => {
  router.back()
}

const confirmarCerrarSesion = () => {
  if (confirm('¿Estás seguro que deseas cerrar sesión?')) {
    router.push('/login')
  }
}
</script>

<style scoped>
/* Puedes importar los estilos globales desde tu main.css o mantener los scoped aquí */
@import "@/assets/css/interfazTarea.css";
@import "@/assets/css/style.css";
</style>

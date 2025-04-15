<template>
  <div>
    <!-- Navbar for mobile -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light d-lg-none">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu" aria-controls="offcanvasMenu">
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
            <a class="nav-link mi-link" href="creacionProyecto.html"><i class="fa-solid fa-folder-plus me-1"></i> Crear Proyecto</a>
          </li>
          <li class="nav-item">
            <a class="nav-link mi-link" href="plantillasProyecto.html"><i class="fa-solid fa-folder-tree me-1"></i> Utilizar Plantillas de Proyecto</a>
          </li>
          <li class="nav-item">
            <a class="nav-link mi-link" href="misTareas.html"><i class="fa-solid fa-list-check me-1"></i> Mis Tareas</a>
          </li>
          <li class="nav-item dropdown custom-dropdown">
            <a class="nav-link dropdown-toggle mi-link" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false"><i class="fa-solid fa-folder-minus me-1"></i> Proyectos</a>
            <ul class="dropdown-menu">
              <li>
                <div class="d-flex align-items-center" id="sub-menu-proyectos">
                  <a class="dropdown-item align-items-center" href="interfazProyecto.html">
                    <i class="fa-regular fa-folder-open"></i> Veterinaria
                    <a href="editarProyecto.html" class="link-secondary ms-1 mi-link"><i class="fa-solid fa-edit"></i></a>
                    <a id="buton-eliminar" class="link-secondary ms-2 mi-link"><i class="fa-solid fa-trash me-3"></i></a>
                  </a>
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

    <!-- Main Content -->
    <div class="container-fluid">
      <div class="row">
        <!-- Sidebar Menu -->
        <div class="col-md-3 custom-col d-none d-lg-block">
          <img src="../assets/img/logos/logotipo.png"  class="logo-inicio" width="300" alt="Logo" @click="irAOtraVista" style="cursor: pointer;">
          <ul class="nav flex-column">
            <li class="nav-item">
              <a class="nav-link mi-link" href="creacionProyecto.html"><i class="fa-solid fa-folder-plus me-1"></i> Crear Proyecto</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mi-link" href="plantillasProyecto.html"><i class="fa-solid fa-folder-tree me-1"></i> Utilizar Plantillas de Proyecto</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mi-link" href="misTareas.html"><i class="fa-solid fa-list-check me-1"></i> Mis Tareas</a>
            </li>
            <li class="nav-item dropdown custom-dropdown">
              <a class="nav-link dropdown-toggle mi-link" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
                <i class="fa-solid fa-folder-minus me-1"></i> Proyectos
              </a>
              <ul class="dropdown-menu">
                <li>
                  <div class="d-flex align-items-center" id="sub-menu-proyectos">
                    <a class="dropdown-item align-items-center" href="interfazProyecto.html">
                      <i class="fa-regular fa-folder-open"></i> Veterinaria
                      <a href="editarProyecto.html" class="link-secondary ms-1 mi-link"><i class="fa-solid fa-edit"></i></a>
                      <a id="buton-eliminar" class="link-secondary ms-2 mi-link"><i class="fa-solid fa-trash me-3"></i></a>
                    </a>
                  </div>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link mi-link" href="etiquetas.html"><i class="fa-solid fa-tags me-1"></i> Etiquetas</a>
            </li>
          </ul>
        </div>

        <!-- Main Content -->
        <div class="col custom-col-main">
          <header>
            <div class="header d-flex justify-content-between align-items-center p-3">
              <button class="btn me-md-2 mt-1 btn-regresar" @click="goBack">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                  <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                </svg> Regresar
              </button>
              <div class="d-flex align-items-center">
                <a href="notificaciones.html" class="me-2">
                  <i class="fas fa-bell"></i> <!-- Icono de notificaciones -->
                </a>
                <button class="btn btn-cerrar-sesion" @click="confirmarCerrarSesion">
                  <i class="fa-solid fa-right-to-bracket me-1"></i> Cerrar Sesión
                </button>
                
                  <a class="btn btn-perfil" @click="irPerfil"><i class="fa-solid fa-user me-1"></i> Perfil</a>
                
              </div>
            </div>
          </header>

          <!-- Members Section -->
          <div class="row mt-4">
            <div class="col-md-8">
              <h3>Miembros</h3>
              <div class="member-card-container">
                <div class="row">
                  <div class="col-md-6" v-for="member in members" :key="member.id">
                    <div class="member-card">
                      <img :src="member.avatar" alt="User Avatar">
                      <p><input type="radio" name="user" /> {{ member.name }}</p>
                      <button class="btn-eliminar" @click="removeMember(member.id)">Eliminar Usuario</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 right-section">
              <h5>Buscar miembros</h5>
              <input type="text" v-model="searchQuery" class="form-control mb-3" placeholder="Buscar miembros">
              <ul class="list-unstyled">
                <li v-for="user in filteredUsers" :key="user.name">
                  {{ user.name }} <a href="#" class="text-primary" @click="addMember(user)">Agregar</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from '@/assets/img/img1.jpg';
import img2 from '@/assets/img/img2.jpg';
import img3 from '@/assets/img/img3.jpg';
import img4 from '@/assets/img/img4.jpg';
import user234 from '@/assets/img/User234.jpg';
import messielmejor from '@/assets/img/messielmejor.jpg';
import user5720 from '@/assets/img/user53720.jpg';

export default {
  data() {
    return {
      members: [
        { id: 1, name: 'Fgferman02', avatar: img1 },
        { id: 2, name: 'ErikaTriana01', avatar: img2 },
        { id: 3, name: 'AndresG567', avatar: img3 },
        { id: 4, name: 'Nikob1030_', avatar: img4 }
      ],
      searchQuery: '',
      users: [
        { name: 'User234' },
        { name: 'User53720' },
        { name: 'Mariposa34' },
        { name: 'Unicornio56' },
        { name: 'Messielmejor' },
        { name: 'SML16' }
      ],
      availableAvatars: [
        user234,
        messielmejor,
        user5720,
        img1,
        img2
      ]
    };
  },
  computed: {
    filteredUsers() {
      return this.users.filter(user => user.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
      window.location.href = './interfaz-proyecto';
    },
   
    // Método para redirigir a la vista de perfil
    irPerfil() {
      this.$router.push('/perfil-completo'); 
    },

    
     irAOtraVista() {
      this.$router.push('/interfaz-principal');  
    },
    confirmarCerrarSesion() {
      if (confirm('¿Seguro que quieres cerrar sesión ?')) {
        window.location.href = './iniciar-sesion';
      }
    },
    removeMember(id) {
      this.members = this.members.filter(member => member.id !== id);
    },
    addMember(user) {
      const randomAvatar = this.availableAvatars[Math.floor(Math.random() * this.availableAvatars.length)];
      this.members.push({ id: Date.now(), name: user.name, avatar: randomAvatar });
    }
  }
};


</script>


<style scoped>
@import '@/assets/css/style.css';
@import '@/assets/css/members.css';
</style>

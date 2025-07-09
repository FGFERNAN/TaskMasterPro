<template>
  <div class="bg-custom">
    <!-- Header Section -->
    <header>
      <div class="row align-items-center mb-3">
        <div class="col-md-2">
          <!-- Recuadro para la imagen -->
          <div>
            <img src="../assets/img/User234.jpg" alt="Perfil" class="img-fluid rounded float-start m-3 border-img" />
          </div>
        </div>
        <div class="col-md-7">
          <h2>Mi Perfil</h2>
        </div>
        <div class="col-md-3 d-flex justify-content-end align-items-center p-3">
          <div class="d-flex align-items-center gap-2">
            <button class="btn btn-primary buton-regresar-p" @click="goInterfazPrincipal" style="white-space: nowrap;">
              <i class="bi bi-caret-left-fill"></i> 
              <span class="button-text"> Regresar</span>
            </button>
            <button class="btn btn-primary btn-cerrar-sesion-p me-3" @click="confirmarCerrarSesion" style="white-space: nowrap;">
              <i class="fa-solid fa-right-to-bracket me-1"></i> Cerrar Sesión
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content Section -->
    <div class="container-fluid mt-5">
      <div class="col">
        <section class="container custom-container">
          <div class="d-flex justify-content-between align-items-center mb-3"></div>
          <div class="d-flex justify-content-between align-items-center">
            <!-- Botones pequeños en columna -->
            <div class="d-grid gap-2 col-4 mx-auto">
              <button class="btn btn btn-primary buton-perfil mb-2" @click="goToEditProfile">Editar Perfil</button>
              <button class="btn btn btn-primary buton-perfil mb-2" @click="goToManageRoles">Gestionar Roles</button>
              <button class="btn btn btn-primary buton-perfil mb-2" @click="goToManageUsers">Gestionar Usuarios</button>
              <button class="btn btn btn-primary buton-perfil mb-3" @click="confirmarCancelacion">Cancelar
                Cuenta</button>
            </div>
            <!-- Logo al lado de los botones -->
            <div class="ms-4">
              <img src="../assets/img/logotipo.png" @click="goInterfazPrincipal" alt="Logo"
                class="img-fluid logo_perfil" />
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/services/api';
export default {
  mounted() {
    document.title = "Mi Perfil | TaskMaster Pro";
  },
  name: 'PerfilCompleto',
  methods: {
    async confirmarCerrarSesion() {
      if (confirm("¿Estás seguro que quieres cerrar sesión?")) {
        // Lógica para cerrar sesión, por ejemplo, redirigir a la página de login
        const response = await api.post("/logout");
        this.$router.push("/iniciar-sesion");
        alert(response.data.message);
      }
    },
    goToEditProfile() {
      // Redirige a la página de edición del perfil
      this.$router.push("/editar-perfil");
    },
    goToManageRoles() {
      // Redirige a la página de gestión de roles
      this.$router.push("/administrar-roles");
    },
    goToManageUsers() {
      // Redirige a la página de gestión de usuarios
      this.$router.push("/administrar-usuarios");
    },
    goInterfazPrincipal() {
      this.$router.push('/interfaz-principal');
    },
    async confirmarCancelacion() {
      if (confirm("¿Estás seguro que quieres cancelar tu cuenta?")) {
        const response = await api.delete("/editProfile");
        alert(response.data.message);
        this.$router.push("/iniciar-sesion");
      }
    },
  }
}
</script>
<style scoped>
@import "@/../../assets/css/perfil.css";
</style>

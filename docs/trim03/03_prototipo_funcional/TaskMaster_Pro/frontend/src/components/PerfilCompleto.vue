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
        <div class="col-md-8">
          <h2>Mi Perfil</h2>
        </div>
        <div class="col-md-2 d-flex justify-content-end">
         <button class="btn btn-cerrar-sesion me-3" @click="cerrarSesion">
            <i class="fa-solid fa-right-to-bracket me-1"></i> Cerrar Sesión
          </button>
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
              <img src="../assets/img/logotipo.png" alt="Logo" class="img-fluid logo_perfil" />
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
<<<<<<< Updated upstream:docs/trim03/03_prototipo_funcional/TaskMaster_Pro/frontend/src/components/PerfilCompleto.vue
import api from '@/services/api';
export default {
  mounted(){
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
=======
import api from "@/services/api";

export default {
  methods: {
    async cerrarSesion() {
      try {
        // Llamada a la API para cerrar sesión
        await api.post("/logout");

        // Limpieza de cualquier dato local (si aplica)
        sessionStorage.clear();
        localStorage.clear();

        // Redirección al login
        this.$router.push("/login");
      } catch (error) {
        console.error("Error al cerrar sesión:", error);
        // Mostrar un mensaje de error al usuario
        alert("Hubo un problema al intentar cerrar sesión. Intenta nuevamente.");
>>>>>>> Stashed changes:trim03/04_prototipo_funcional/TaskMaster_Pro/frontend/src/components/PerfilCompleto.vue
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
    async confirmarCancelacion() {
      if (confirm("¿Estás seguro que quieres cancelar tu cuenta?")) {
        const response = await api.delete("/editProfile");
        alert(response.data.message);
        this.$router.push("/iniciar-sesion");
      }
    }
  }
}
</script>
<style scoped>
@import "@/../../assets/css/perfil.css";
</style>

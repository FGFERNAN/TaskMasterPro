<template>
  <div class="bg-custom">
    <!-- Navbar for mobile -->
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
        <!-- Sidebar for larger screens -->
        <div class="col-md-3 custom-col d-none d-lg-block">
          <img src="../assets/img/logos/logotipo.png" class="logo-inicio" width="300">
          <ul class="nav flex-column">
            <!-- Usamos router-link para redirigir en Vue -->
            <li class="nav-item">
              <router-link to="/perfil-completo" class="nav-link mi-link">
                <i class="fa-solid fa-home me-1"></i> Inicio
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/administrar-roles" class="nav-link mi-link">
                <i class="fa-solid fa-user-cog me-1"></i> Roles
              </router-link>
            </li>
          </ul>
        </div>

        <div class="col custom-col-main">
          <header>
            <div class="header d-flex justify-content-end align-items-center p-3">
              <div class="d-flex align-items-center">
                <span>{{ username }}</span>
                <a @click="irPerfil" class="ms-3 puntero">
                  <img src="../assets/img/mariposa34.jpg" alt="Perfil" class="rounded-circle" width="40">
                </a>
              </div>
            </div>
          </header>

          <section class="container-fluid mt-4">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <div class="d-flex align-items-center">
                <h2>Roles</h2>
                <button class="btn btn-success ms-3" @click="redirectToCreateRole"><i
                    class="fa-solid fa-plus me-1"></i></button>
              </div>
              <div class="d-flex align-items-center">
                <input v-model="searchQuery" type="text" class="form-control" placeholder="Buscar Roles">
              </div>
            </div>

            <!-- Table responsive container -->
            <div class="table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(role) in filteredRoles" :key="role.id">
                    <td>
                      <input type="radio" @click="redirectToEditRole" v-model="selectedRole" :value="role.nombre"> {{
                        role.nombre }}
                    </td>
                    <td class="description">{{ role.descripcion }}</td>
                    <td>
                      <button class="btn btn-sm btn-secondary buton-form" @click="redirectToAssignRole"><i
                          class="fa-solid fa-user-plus"></i></button>
                      <button class="btn btn-sm btn-secondary" @click="redirectToEditRole(role.id)"><i
                          class="fa-solid fa-pen"></i></button>
                      <button class="btn btn-sm btn-danger" @click="deleteRole(role.id)"><i
                          class="fa-solid fa-trash"></i></button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/services/api';
export default {
  mounted() {
    document.title = "Roles | TaskMaster Pro";
    this.getRole();
  },
  data() {
    return {
      searchQuery: '',
      roles: [],
      username: ''
    };
  },
  created() {
    this.getUsername(); // Obtiene el nombre del usuario al cargar el componente
  },
  computed: {
    filteredRoles() {
      return this.roles.filter(role => role.nombre.toLowerCase().includes(this.searchQuery.toLowerCase()));
    }
  },
  methods: {
    async getRole() {
      try {
        const response = await api.get('/role');
        this.roles = response.data.data;
        console.log(response.data);
      } catch (error) {
        if (error.response && error.response.data) {
          const serverErrors = error.response.data;
          if (serverErrors.message === 'Error fetching roles: ') {
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
    redirectToCreateRole() {
      this.$router.push('crear-rol');
    },
    redirectToAssignRole() {
      this.$router.push('/asignarRol');
    },
    redirectToEditRole(roleId) {
      this.$router.push({ name: 'EditarRol', params: { id: roleId } });
    },
    async deleteRole(roleId) {
      try {
        if (confirm('¿Estás seguro que deseas eliminar el rol?')) {
          const response = await api.delete(`/role/${roleId}}`);
          this.roles = this.roles.filter(role => role.id !== roleId);
          console.log(response.data.message);
          alert(response.data.message);
        }
      } catch (error) {
        if (error.response && error.response.data) {
          const serverErrors = error.response.data;
          if (serverErrors.message === 'Role not exists') {
            console.log(serverErrors.message);
            alert(serverErrors.message);
          } else if (serverErrors.mensaje === 'No tienes permisos para realizar esta acción.') {
            console.log(serverErrors.mensaje);
            this.$router.push('/error403');
          } else if (serverErrors.message === 'Rol no eliminado') {
            console.log(serverErrors.message);
            alert(serverErrors.message);
          } else if (serverErrors.message === 'ROLE_IN_USE') {
            console.log(serverErrors);
            alert('No se puede eliminar el rol porque está asignado a un usuario.');
          }
        }
      }
    },
    async getUsername() {
      try {
        const response = await api.get('/session');
        this.username = response.data.nombre;
      } catch (error) {
        console.log("Error al obtener el usuario", error)
        this.username = "Invitado";
      }
    },
    irPerfil() {
      this.$router.push('/perfil-completo');
    }
  }
};
</script>
<style scoped>
@import "@/../../assets/css/misTareas.css";
</style>

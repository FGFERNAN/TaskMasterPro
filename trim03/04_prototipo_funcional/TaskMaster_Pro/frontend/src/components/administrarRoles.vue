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
                <span>Administrador</span>
                <a href="perfil.html" class="ms-3">
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
                    <th>Permisos</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(role, index) in filteredRoles" :key="role.id">
                    <td>
                      <input type="radio" v-model="selectedRole" :value="role.name"> {{ role.name }}
                    </td>
                    <td>{{ role.description }}</td>
                    <td>
                      <input type="checkbox" v-for="permission in role.permissions" :key="permission">
                    </td>
                    <td>
                      <button class="btn btn-sm btn-secondary buton-form" @click="redirectToAssignRole"><i class="fa-solid fa-user-plus"></i></button>
                      <button class="btn btn-sm btn-secondary" @click="redirectToEditRole(role.id)"><i class="fa-solid fa-pen"></i></button>
                      <button class="btn btn-sm btn-danger btn-eliminar" @click="deleteRole(index)"><i class="fa-solid fa-trash"></i></button>
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


export default {
  data() {
    return {
      selectedRole: null,
      searchQuery: '',
      roles: [
        { id: 1, name: 'Administrador', description: 'Descripción del rol', permissions: [{ name: 'Permiso 1', checked: true }] },
        { id: 2, name: 'Líder Proyecto', description: 'Descripción del rol', permissions: [{ name: 'Permiso 2', checked: false }] },
        { id: 3, name: 'Miembro Proyecto', description: 'Descripción del rol', permissions: [{ name: 'Permiso 3', checked: true }] },
        { id: 4, name: 'StakeHolder', description: 'Descripción del rol', permissions: [{ name: 'Permiso 4', checked: false }] }
      ]
    };
  },
  computed: {
    filteredRoles() {
      return this.roles.filter(role => role.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
    }
  },
  methods: {
    redirectToCreateRole() {
      this.$router.push('creacion-rol');
    },
    redirectToAssignRole() {
      this.$router.push('/asignarRol');
    },
    redirectToEditRole() {
      this.$router.push('/editar-rol');
    },
    deleteRole(index) {
      if (confirm('¿Estás seguro que deseas eliminar el rol?')) {
        this.roles.splice(index, 1);
      }
    }
  }
};
</script>
<style scoped>
@import "@/../../assets/css/misTareas.css";
</style>

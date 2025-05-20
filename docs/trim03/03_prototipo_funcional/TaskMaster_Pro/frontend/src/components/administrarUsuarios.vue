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
            <router-link to="/administrar-usuarios" class="nav-link mi-link">
              <i class="fa-solid fa-user-cog me-1"></i> Usuarios
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row">
        <!-- Sidebar for larger screens -->
        <div class="col-md-3 custom-col d-none d-lg-block">
          <img src="../assets/img/logos/logotipo.png" class="logo-inicio" width="300" />
          <ul class="nav flex-column">
            <li class="nav-item">
              <router-link to="/perfil-completo" class="nav-link mi-link">
                <i class="fa-solid fa-home me-1"></i> Inicio
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/administrar-usuarios" class="nav-link mi-link">
                <i class="fa-solid fa-user-cog me-1"></i> Usuarios
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
                  <img src="../assets/img/mariposa34.jpg" alt="Perfil" class="rounded-circle" width="40" />
                </a>
              </div>
            </div>
          </header>

          <section class="container-fluid mt-4">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <div class="d-flex align-items-center">
                <h2>Usuarios</h2>
                <!-- Usamos router-link para redirigir -->
                <button class="btn btn-success ms-3" @click="redirectToRecoveruser"><i
                    class="fa-solid fa-plus me-1"></i></button>
              </div>
              <div class="d-flex align-items-center">
                <input v-model="searchQuery" type="text" class="form-control" placeholder="Buscar Usuarios">
              </div>
            </div>

            <!-- Table responsive container -->
            <div class="table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Telefono</th>
                    <th>Rol</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(user) in filteredUser" :key="user.id">
                    <td>{{ user.id }}</td>
                    <td>{{ user.nombre }} {{ user.apellidos }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.telefono }}</td>
                    <td>
                      <select class="form-select" disabled>
                        <option :value="user.rolID">{{ user.rolID }}</option>
                      </select>
                    </td>
                    <td>
                      <!-- Usamos el método redirectToEditUser para redirigir a editar usuario -->
                      <button class="btn btn-sm btn-secondary" @click="redirectToEditUser(user.id)"><i
                          class="fa-solid fa-pen"></i></button>
                      <button class="btn btn-sm btn-danger " @click="deleteUser(user.id)"><i class="fa-solid fa-trash"></i></button>
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
    document.title = "Usuarios | TaskMaster Pro";
    this.getUsers();
  },
  data() {
    return {
      searchQuery: '',
      users: [],
      username: ''
    };
  },
  created() {
    this.getUsername(); // Obtiene el nombre del usuario al cargar el componente
  },
  computed: {
    filteredUser() {
      return this.users.filter(user => {
        const fullName = `${user.nombre} ${user.apellidos}`.toLowerCase();
        return fullName.includes(this.searchQuery.toLowerCase());
      })
    }
  },
  methods: {
    async getUsers() {
      try {
        const response = await api.get('/user');
        this.users = response.data.data;
        console.log(response.data);
      } catch (error) {
        if (error.response && error.response.data) {
          const serverErrors = error.response.data;
          if (serverErrors.message === 'Error fetching users: ') {
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

    // Redirige a la página de crear usuario
    redirectToRecoveruser() {
      console.log('Redirigiendo a crear-usuario');
      this.$router.push('/crear-usuario');
    },
    // Redirige a la página de editar usuario
    redirectToEditUser(userId) {
      this.$router.push({ name: 'EditarUsuario', params: { id: userId }});
    },
    async deleteUser(userId) {
      try {
        if (confirm('¿Estás seguro que deseas eliminar el usuario?')) {
        const response =  await api.delete(`/user/${userId}}`);
        this.users = this.users.filter(user => user.id !== userId);
        console.log(response.data.message);
        alert(response.data.message);
      }
      } catch (error) {
        if(error.response && error.response.data){
          const serverErrors = error.response.data;
          if(serverErrors.message === 'User not exists'){
            console.log(serverErrors.message);
            alert(serverErrors.message);
          } else if (serverErrors.message === 'Usuario no eliminado'){
            console.log(serverErrors.message);
            alert('No se puede eliminar un usuario administrador.');
          } else if (serverErrors.mensaje === 'Usuario no autenticado') {
            console.log(serverErrors.mensaje);
            alert(`${serverErrors.mensaje}, debes loguearte para acceder a las funciones de esta ruta.`);
            this.$router.push('/iniciar-sesion');
          } else if (serverErrors.mensaje === 'No tienes permisos para realizar esta acción.') {
            console.log(serverErrors.mensaje);
            this.$router.push('/error403');
          } else if(serverErrors.message === 'Error deleting user: '){
            console.log('Ocurrio un error inesperado del lado del servidor: ', serverErrors);
            alert('Ocurrio un error inesperado del lado del servidor, revisa la consola para obtener más detalles');
          } else{
            console.log(error.response.data);
            alert(error.response.data.mensaje);
          }
        }
      }
    },
    async getUsername(){
      try{
        const response = await api.get('/session');
        this.username = response.data.nombre;
      } catch(error){
        console.log("Error al obtener el usuario", error)
        this.username = "Invitado";
      }
    },
    irPerfil(){
      this.$router.push('/perfil-completo');
    }
  }
};
</script>

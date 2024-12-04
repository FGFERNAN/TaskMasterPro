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
                <span>Administrador</span>
                <a href="perfil.html" class="ms-3">
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
            </div>

            <!-- Table responsive container -->
            <div class="table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Numero de documento</th>
                    <th>Telefono</th>
                    <th>Contraseña</th>
                    <th>Rol</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr id="fila-admin">
                    <td><input type="radio" name="nombre" />Johan Garcia</td>
                    <td>1030533364</td>
                    <td>3107847573</td>
                    <td>*************</td>
                    <td>
                      <select class="form-select" disabled>
                        <option selected>Administrador</option>
                        <option>Líder Proyecto</option>
                        <option>Miembro Proyecto</option>
                        <option>StakeHolder</option>
                      </select>
                    </td>
                    <td>
                      <!-- Usamos el método redirectToEditUser para redirigir a editar usuario -->
                      <button class="btn btn-sm btn-secondary" @click="redirectToEditUser"><i
                          class="fa-solid fa-pen"></i></button>
                      <button class="btn btn-sm btn-danger btn-eliminar"><i class="fa-solid fa-trash"></i></button>
                    </td>
                  </tr>
                  <tr id="fila-lider">
                    <td><input type="radio" name="nombre" />Erika Triana</td>
                    <td>1234567890</td>
                    <td>3103110309</td>
                    <td>*************</td>
                    <td>
                      <select class="form-select" disabled>
                        <option>Administrador</option>
                        <option selected>Líder Proyecto</option>
                        <option>Miembro Proyecto</option>
                        <option>StakeHolder</option>
                      </select>
                    </td>
                    <td>
                      <!-- Usamos el método redirectToEditUser para redirigir a editar usuario -->
                      <button class="btn btn-sm btn-secondary" @click="redirectToEditUser"><i
                          class="fa-solid fa-pen"></i></button>
                      <button class="btn btn-sm btn-danger btn-eliminar"><i class="fa-solid fa-trash"></i></button>
                    </td>
                  </tr>
                  <tr id="fila-miembro">
                    <td><input type="radio" name="nombre" />Andres Garzon</td>
                    <td>1054544267</td>
                    <td>3243850895</td>
                    <td>*************</td>
                    <td>
                      <select class="form-select" disabled>
                        <option>Administrador</option>
                        <option>Líder Proyecto</option>
                        <option selected>Miembro Proyecto</option>
                        <option>StakeHolder</option>
                      </select>
                    </td>
                    <td>
                      <!-- Usamos el método redirectToEditUser para redirigir a editar usuario -->
                      <button class="btn btn-sm btn-secondary" @click="redirectToEditUser"><i
                          class="fa-solid fa-pen"></i></button>
                      <button class="btn btn-sm btn-danger btn-eliminar"><i class="fa-solid fa-trash"></i></button>
                    </td>
                  </tr>
                  <tr id="fila-stakeholder">
                    <td><input type="radio" name="nombre" />Nikole Bernal</td>
                    <td>1083486290</td>
                    <td>3102963881</td>
                    <td>*************</td>
                    <td>
                      <select class="form-select" disabled>
                        <option>Administrador</option>
                        <option>Líder Proyecto</option>
                        <option>Miembro Proyecto</option>
                        <option selected>StakeHolder</option>
                      </select>
                    </td>
                    <td>
                      <!-- Usamos el método redirectToEditUser para redirigir a editar usuario -->
                      <button class="btn btn-sm btn-secondary" @click="redirectToEditUser"><i
                          class="fa-solid fa-pen"></i></button>
                      <button class="btn btn-sm btn-danger btn-eliminar"><i class="fa-solid fa-trash"></i></button>
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
  methods: {
    // Redirige a la página de crear usuario
    redirectToRecoveruser() {
      console.log('Redirigiendo a crear-usuario');
      this.$router.push('/crear-usuario');
    },
    // Redirige a la página de editar usuario
    redirectToEditUser() {
      console.log('Redirigiendo a editar usuario');
      this.$router.push('/editar-usuario'); // Redirige a la vista editar sin necesidad de pasar ID
    }
  }
};
</script>

<template>
  <div class="bg-custom">
    <div class="container-fluid">
      <!-- Header -->
      <div class="row no-gutters header-custom">
        <div class="col-12 d-flex align-items-center justify-content-between p-3">
          <button class="btn btn-primary buton-regresar" @click="goBack">
            <svg class="svg bi bi-caret-left-fill" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
              fill="currentColor" viewBox="0 0 16 16">
              <path
                d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
            </svg>
            <span class="button-text"> Regresar</span>
          </button>
          <h1 class="mb-0 text-center flex-grow-1">
            <i class="fa-solid fa-user-plus me-2"></i>
            Crear Usuario
          </h1>
          <img src="../assets/img/logotipo.png" alt="Logo" class="logo" />
        </div>
      </div>
      <form ref="form" @submit.prevent="handleSubmit" class="container form-create-project-editar-perfil needs-validation"
        novalidate>
        <div class="row mb-4"></div>
        <!-- Nombre -->
        <div class="row mb-3">
          <label for="nombreUsuario" class="col-sm-2 col-form-label">Nombre:</label>
          <div class="col-sm-10 has-validation">
            <div class="input-group mb-3">
              <span class="input-group-text border-input">
                <i class="fa-solid fa-user"></i>
              </span>
              <input type="text" class="form-control border-input" id="nombreUsuario" placeholder="Name"
                v-model="nombre" minlength="5" required />
              <div class="invalid-feedback">
                Por favor ingrese el nombre.
              </div>
            </div>
          </div>
        </div>
        <!-- Apellido -->
        <div class="row mb-3">
          <label for="apellidoUsuario" class="col-sm-2 col-form-label">Apellido:</label>
          <div class="col-sm-10 has-validation">
            <div class="input-group mb-3">
              <span class="input-group-text border-input" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg"
                  width="16" height="16" fill="currentColor" class="bi bi-person-vcard-fill" viewBox="0 0 16 16">
                  <path
                    d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm9 1.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5M9 8a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4A.5.5 0 0 0 9 8m1 2.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5m-1 2C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 0 2 13h6.96q.04-.245.04-.5M7 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0" />
                </svg></span>
              <input type="text" class="form-control border-input" id="apellidoUsuario" placeholder="Last Name"
                v-model="apellidos" minlength="5" required />
              <div class="invalid-feedback">
                Por favor ingrese el apellido.
              </div>
            </div>
          </div>
        </div>
        <!-- Correo Electrónico -->
        <div class="row mb-3">
          <label for="correoUsuario" class="col-sm-2 col-form-label">Correo Electrónico:</label>
          <div class="col-sm-10 has-validation">
            <div class="input-group mb-3">
              <span class="input-group-text border-input">
                <i class="fa-solid fa-at"></i>
              </span>
              <input type="email" class="form-control border-input" id="correoUsuario" placeholder="Email"
                v-model="email" minlength="15" maxlength="150" required />
              <div class="invalid-feedback">Por favor ingrese el correo electrónico (máximo 150 caracteres).</div>
            </div>
          </div>
        </div>

        <div class="row mb-3">
          <label for="numeroCelular" class="col-sm-2 col-form-label">Número de Celular:</label>
          <div class="col-sm-10 has-validation">
            <div class="input-group mb-3">
              <span class="input-group-text border-input"><i class="fa-solid fa-phone"></i></span>
              <input type="number" id="numeroCelular" class="form-control border-input" v-model="telefono"
                placeholder="Phone Number" min="1000000000" max="9999999999" required />
              <div class="invalid-feedback">Por favor ingrese el número de celular (10 caracteres).</div>
            </div>
          </div>
        </div>

        <div class="row mb-3">
          <label for="tipoDocumento" class="col-sm-2 col-form-label">Tipo Documento:</label>
          <div class="col-sm-10">
            <div class="input-group mb-3">
              <span class="input-group-text border-input"><i class="fa-solid fa-id-card"></i></span>
              <select id="tipoDocumento" class="form-select border-input" v-model="tipo_documento" required>
                <option value="" selected disabled>Seleccionar</option>
                <option value="1">Tarjeta de Identidad</option>
                <option value="2">Cédula de Ciudadanía</option>
                <option value="3">Cedula de Extranjeria</option>
              </select>
              <div class="invalid-feedback">Por favor seleccione un tipo de documento.</div>
            </div>
          </div>
        </div>

        <!-- Nuevo campo: Número de Documento -->
        <div class="row mb-3">
          <label for="numeroDocumento" class="col-sm-2 col-form-label">Número de Documento:</label>
          <div class="col-sm-10 has-validation">
            <div class="input-group mb-3">
              <span class="input-group-text border-input" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg"
                  width="16" height="16" fill="currentColor" class="bi bi-123" viewBox="0 0 16 16">
                  <path
                    d="M2.873 11.297V4.142H1.699L0 5.379v1.137l1.64-1.18h.06v5.961zm3.213-5.09v-.063c0-.618.44-1.169 1.196-1.169.676 0 1.174.44 1.174 1.106 0 .624-.42 1.101-.807 1.526L4.99 10.553v.744h4.78v-.99H6.643v-.069L8.41 8.252c.65-.724 1.237-1.332 1.237-2.27C9.646 4.849 8.723 4 7.308 4c-1.573 0-2.36 1.064-2.36 2.15v.057zm6.559 1.883h.786c.823 0 1.374.481 1.379 1.179.01.707-.55 1.216-1.421 1.21-.77-.005-1.326-.419-1.379-.953h-1.095c.042 1.053.938 1.918 2.464 1.918 1.478 0 2.642-.839 2.62-2.144-.02-1.143-.922-1.651-1.551-1.714v-.063c.535-.09 1.347-.66 1.326-1.678-.026-1.053-.933-1.855-2.359-1.845-1.5.005-2.317.88-2.348 1.898h1.116c.032-.498.498-.944 1.206-.944.703 0 1.206.435 1.206 1.07.005.64-.504 1.106-1.2 1.106h-.75z" />
                </svg></span>
              <input type="text" id="numeroDocumento" class="form-control border-input"
                v-model="id" placeholder="Número de Documento" minlength="6" maxlength="10" required />
              <div class="invalid-feedback">Por favor ingrese el número de documento (máximo 10 caracteres).</div>
            </div>
          </div>
        </div>

        <!-- Nuevo campo: Contraseña -->
        <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label">Contraseña:</label>
          <div class="col-sm-10 has-validation">
            <div class="input-group mb-3">
              <span class="input-group-text border-input" id="basic-addon1"><i class="fa-solid fa-lock"></i></span>
              <input :type="passwordFieldType" v-model="password" class="form-control border-input" placeholder="Password" aria-label="Username"
                aria-describedby="basic-addon1" minlength="8" maxlength="20" required />
                <button class="btn btn-outline-secondary border-input" type="button" @click="togglePasswordVisibility">
                <i :class="passwordVisible ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'"></i>
              </button>
              <div class="invalid-feedback">
                Por favor ingrese la contraseña (máximo 20 caracteres).
              </div>
            </div>
          </div>
        </div>

        <!-- Nuevo campo: Rol -->
        <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label ">Rol:</label>
          <div class="col-sm-10">
            <div class="input-group mb-3">
              <span class="input-group-text border-input" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg"
                  width="16" height="16" fill="currentColor" class="bi bi-person-gear" viewBox="0 0 16 16">
                  <path
                    d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m.256 7a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1zm3.63-4.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.043c-.612-.18-.612-1.048 0-1.229l.149-.043a.64.64 0 0 0 .38-.921l-.074-.136c-.306-.561.309-1.175.87-.87l.136.075a.64.64 0 0 0 .92-.382l.045-.149zM8 12.5c.301 0 .578-.143.78-.381.173-.181.38-.3.599-.3s.426.119.599.3c.202.238.479.381.78.381.584 0 1.057-.473 1.057-1.057 0-.24-.085-.459-.228-.638-.142-.18-.336-.311-.56-.394 0 0-.736-.383-.628-.318-.176.033-.324.136-.496.243-.211.137-.392.346-.497.582-.065.13-.111.27-.147.419-.043-.074-.085-.152-.134-.232-.015-.003-.035-.008-.05-.008s-.036.005-.05.008c-.05.08-.09.158-.134.232-.036-.149-.082-.289-.147-.419-.105-.236-.286-.445-.497-.582-.172-.107-.32-.21-.496-.243-.108-.065-.148.145-.628.318-.225.083-.418.214-.56.394-.143.179-.228.398-.228.638 0 .584.473 1.057 1.057 1.057z" />
                </svg></span>
                <select id="rol" class="form-select border-input" v-model="rolID" required>
                <option value="" selected disabled>Seleccionar</option>
                <option value="1">Administrador</option>
                <option value="2">Lider de Proyecto</option>
                <option value="3">Miembro de Proyecto</option>
                <option value="4">Cliente/StakeHolder</option>
              </select>
            </div>
          </div>
        </div>

        <div class="d-grid gap-2 col-3 mx-auto">
          <button class="btn btn-primary buton-form mb-4" id="guardar" type="submit">Guardar</button>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
import api from '@/services/api';
export default {
  mounted() {
    document.title = "Crear Usuario | TaskMaster Po";
  },
  data() {
    return {
      formData: {
        id: "",
        nombre: "",
        apellidos: "",
        email: "",
        telefono: "",
        password: "",
        rolID: "",
        tipo_documento: "",
      },
      passwordVisible: false,
    };
  },
  computed: {
    // Computed property para cambiar el tipo del input
    passwordFieldType() {
      return this.passwordVisible ? 'text' : 'password';
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    async handleSubmit() {
      const form = this.$refs.form;

      // Desactiva validación automática del navegador y aplica validación manual con Bootstrap
      if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return;
      }
      try {
        const response = await api.post("/user", {
          id: this.id,
          nombre: this.nombre,
          apellidos: this.apellidos,
          email: this.email,
          telefono: this.telefono,
          password: this.password,
          rolID: this.rolID,
          tipo_documento: this.tipo_documento
        });
        console.log(response.data);
        alert(response.data.message);
        this.$router.push("/administrar-usuarios");
      } catch (error) {
        if(error.response && error.response.data){
          const serverErrors = error.response.data;
          if(serverErrors.message === 'Usuario no creado'){
            console.log(serverErrors.message);
            alert('Ingresa los parametros necesarios para realizar la creación');
          } else if(serverErrors.message === 'Error creating users: '){
            console.log(serverErrors.message);
            alert('Ocurrio un error inesperado del lado del servidor, revisa la consola para obtener más detalles');
          } else if(serverErrors.mensaje === 'Usuario no autenticado'){
            console.log(serverErrors.mensaje);
            alert(`${serverErrors.mensaje}, debes loguearte para acceder a las funciones de esta ruta.`);
            this.$router.push('/iniciar-sesion');
          } else if(serverErrors.mensaje === 'No tienes permisos para realizar esta acción.'){
            console.log(serverErrors.mensaje);
            alert(serverErrors.mensaje);
          } else {
           console.log('Ocurrio un error inesperado del lado del servidor: ', serverErrors);
            alert('Ocurrio un error inesperado del lado del servidor, revisa la consola para obtener más detalles');
          }
        }
      }
    },
    togglePasswordVisibility() {
      // Cambia el estado de visibilidad de la contraseña
      this.passwordVisible = !this.passwordVisible;
    },
  },
};
</script>
<style scoped>
@import "@/../../assets/css/EditarPerfil.css";
</style>

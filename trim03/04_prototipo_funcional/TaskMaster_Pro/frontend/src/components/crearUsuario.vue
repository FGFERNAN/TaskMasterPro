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
      <form @submit.prevent="submitForm" class="container form-create-project-editar-perfil needs-validation" novalidate>
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
                v-model="formData.nombre" maxlength="50" required />
              <div class="invalid-feedback">
                Por favor ingrese el nombre (máximo 50 caracteres).
              </div>
            </div>
          </div>
        </div>
        <!-- Apellido -->
        <div class="row mb-3">
          <label for="apellidoUsuario" class="col-sm-2 col-form-label">Apellido:</label>
          <div class="col-sm-10 has-validation">
            <div class="input-group mb-3">
              <span class="input-group-text border-input">
                <i class="fa-solid fa-id-badge"></i>
              </span>
              <input type="text" class="form-control border-input" id="apellidoUsuario" placeholder="Last Name"
                v-model="formData.apellido" maxlength="50" required />
              <div class="invalid-feedback">
                Por favor ingrese el apellido (máximo 50 caracteres).
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
                v-model="formData.correo" maxlength="100" required />
              <div class="invalid-feedback">Por favor ingrese el correo electrónico (máximo 100 caracteres).</div>
            </div>
          </div>
        </div>

        <div class="row mb-3">
          <label for="numeroCelular" class="col-sm-2 col-form-label">Número de Celular:</label>
          <div class="col-sm-10 has-validation">
            <div class="input-group mb-3">
              <span class="input-group-text border-input"><i class="fa-solid fa-phone"></i></span>
              <input type="number" id="numeroCelular" class="form-control border-input" v-model="formData.celular"
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
              <select id="tipoDocumento" class="form-select border-input" v-model="formData.tipoDocumento" required>
                <option value="" disabled>Seleccionar</option>
                <option value="1">Cédula de Ciudadanía</option>
                <option value="2">Tarjeta de Identidad</option>
                <option value="3">Registro Civil</option>
                <option value="4">Cédula de Extranjería</option>
                <option value="6">Carné de Identidad</option>
                <option value="7">Documento Nacional de Identidad</option>
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
              <span class="input-group-text border-input"><i class="fa-solid fa-id-card"></i></span>
              <input type="text" id="numeroDocumento" class="form-control border-input"
                v-model="formData.numeroDocumento" placeholder="Número de Documento" maxlength="10" required />
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
              <input type="password" class="form-control border-input" placeholder="Password" aria-label="Username"
                aria-describedby="basic-addon1" minlength="8" maxlength="20" required />
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
              <select id="rol" class="form-select border-input" v-model="formData.rol" required>
                <option value="" disabled>Seleccionar</option>
                <option value="1">Administrador</option>
                <option value="2">Lider de Proyecto</option>
                <option value="3">Miembro de Proyecto</option>
                <option value="4">Cliente/StakeHolder</option>
              </select>
            </div>
          </div>
        </div>

        <div class="d-flex justify-content-center">
          <button class="btn btn-success" type="submit">Guardar</button>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  name: "CrearUsuario",
  data() {
    return {
      formData: {
        nombre: "",
        apellido: "",
        correo: "",
        telefono: "",
        tipoDocumento: "",
        numeroDocumento: "",
        contraseña: "",
      },
    };
  },
  methods: {
    goBack() {
      window.history.back();
    },
    submitForm() {
      if (this.validateForm()) {
        console.log("Formulario enviado:", this.formData);
        // Lógica adicional para manejar el envío del formulario
      } else {
        console.error("Por favor complete todos los campos requeridos.");
      }
    },
    validateForm() {
      // Aquí se puede añadir lógica personalizada para validar el formulario
      return Object.values(this.formData).every((field) => field !== "");
    },
  },
};
</script>
<style scoped>
@import "@/../../assets/css/EditarPerfil.css";
</style>


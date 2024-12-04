<template>
  <div class="bg-custom">
    <div class="container-fluid">
      <div class="row no-gutters header-custom">
        <div class="col-12 d-flex align-items-center justify-content-between p-3">
          <button class="btn btn-primary buton-regresar" @click="goBack">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="bi bi-caret-left-fill" viewBox="0 0 16 16">
              <path
                d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
            </svg>
            <span class="button-text"> Regresar</span>
          </button>
          <h1 class="mb-0 text-center flex-grow-1">
            <i class="fa-solid fa-user-pen me-2"></i> <!-- Ícono de comentario de Bootstrap -->
            Editar Perfil
          </h1>
          <img src="../assets/img/logotipo.png" alt="Logo" class="logo" />
        </div>
      </div>

      <form @submit="handleSubmit" class="container form-create-project-editar-perfil needs-validation" novalidate>
        <div class="row mb-4"></div>

        <!-- Nombre -->
        <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label">Nombre:</label>
          <div class="col-sm-10">
            <div class="input-group mb-3">
              <span class="input-group-text border-input" id="basic-addon1"><i class="fa-solid fa-user"></i></span>
              <input type="text" v-model="form.nombre" class="form-control border-input" placeholder="Name"
                aria-label="Username" aria-describedby="basic-addon1" maxlength="50" required />
              <div class="invalid-feedback">
                Por favor ingrese el nombre (máximo 50 caracteres).
              </div>
            </div>
          </div>
        </div>

        <!-- Apellido -->
        <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label">Apellido:</label>
          <div class="col-sm-10">
            <div class="input-group mb-3">
              <span class="input-group-text border-input" id="basic-addon1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  class="bi bi-person-vcard-fill" viewBox="0 0 16 16">
                  <path
                    d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm9 1.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5M9 8a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4A.5.5 0 0 0 9 8m1 2.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5m-1 2C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 0 2 13h6.96q.04-.245.04-.5M7 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0" />
                </svg>
              </span>
              <input type="text" v-model="form.apellido" class="form-control border-input" placeholder="Last Name"
                aria-label="Username" aria-describedby="basic-addon1" maxlength="50" required />
              <div class="invalid-feedback">
                Por favor ingrese el apellido (máximo 50 caracteres).
              </div>
            </div>
          </div>
        </div>

        <!-- Correo Electrónico -->
        <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label">Correo Electrónico:</label>
          <div class="col-sm-10">
            <div class="input-group mb-3">
              <span class="input-group-text border-input" id="basic-addon1"><i class="fa-solid fa-at"></i></span>
              <input type="email" v-model="form.email" class="form-control border-input" placeholder="Email"
                aria-label="Username" aria-describedby="basic-addon1" maxlength="100" required />
              <div class="invalid-feedback">
                Por favor ingrese el correo electrónico (máximo 100 caracteres).
              </div>
            </div>
          </div>
        </div>

        <!-- Contraseña -->
        <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label">Contraseña:</label>
          <div class="col-sm-10">
            <div class="input-group mb-3">
              <span class="input-group-text border-input" id="basic-addon1"><i class="fa-solid fa-lock"></i></span>
              <input type="password" v-model="form.password" class="form-control border-input" placeholder="Password"
                aria-label="Username" aria-describedby="basic-addon1" minlength="8" maxlength="20" />
              <div class="invalid-feedback">
                Por favor ingrese la contraseña (máximo 20 caracteres).
              </div>
            </div>
          </div>
        </div>

        <!-- Número de Celular -->
        <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label">Número de Celular:</label>
          <div class="col-sm-10">
            <div class="input-group mb-3">
              <span class="input-group-text border-input" id="basic-addon1"><i class="fa-solid fa-phone"></i></span>
              <input type="tel" v-model="form.celular" class="form-control border-input" pattern="[0-9]{10}"
                placeholder="Phone number" required />
              <div class="invalid-feedback">
                Por favor ingrese el número de celular (máximo 10 caracteres).
              </div>
            </div>
          </div>
        </div>

        <!-- Tipo Documento -->
        <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label">Tipo Documento:</label>
          <div class="col-sm-10">
            <div class="input-group mb-3">
              <span class="input-group-text border-input" id="basic-addon1"><i class="fa-solid fa-id-card"></i></span>
              <select v-model="form.tipoDocumento" class="form-select border-input" required>
                <option value="" disabled>Seleccionar</option>
                <option value="1">Cédula de Ciudadanía</option>
                <option value="2">Tarjeta de Identidad</option>
                <option value="3">Registro Civil</option>
                <option value="4">Cédula de Extranjería</option>
                <option value="6">Carné de Identidad</option>
                <option value="7">Documento Nacional de Identidad</option>
              </select>
              <div class="invalid-feedback">
                Por favor seleccione un tipo de documento.
              </div>
            </div>
          </div>
        </div>

        <!-- Número Documento -->
        <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label">Número Documento:</label>
          <div class="col-sm-10">
            <div class="input-group mb-3">
              <span class="input-group-text border-input" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg"
                  width="16" height="16" fill="currentColor" class="bi bi-123" viewBox="0 0 16 16">
                  <path
                    d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                </svg></span>
              <input type="number" v-model="form.numeroDocumento" class="form-control border-input"
                placeholder="Número de documento" aria-label="Username" aria-describedby="basic-addon1" required />
              <div class="invalid-feedback">
                Por favor ingrese el número de documento.
              </div>
            </div>
          </div>
        </div>

        <!-- Foto de perfil (al final del formulario) -->
        <div class="profile-pic-container mb-4">
          <div class="profile-pic">
            <img v-if="form.profilePic" :src="form.profilePic" alt="Profile Picture" />
            <div v-else>Foto</div>
            <label class="edit-icon" for="fileInput">
              <i class="fa-solid fa-pencil-alt"></i>
            </label>
            <input type="file" id="fileInput" accept="image/*" @change="handleFileChange" style="display: none;" />
          </div>
          <span class="text-muted">Seleccione su foto de perfil.</span>
        </div>

        <!-- Botones -->
        <div class="buttons">
          <div class="d-grid gap-2 col-3 mx-auto">
            <button class="btn btn-primary buton-form mb-4" type="submit">Confirmar</button>
          </div>
          <button type="button" class="btn btn-danger mb-4 fw-bold" onclick="confirmarCancelacion()">Cancelar
            Cuenta</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        nombre: 'Johan Felipe',
        apellido: 'Garcia Salazar',
        email: 'fgfernan2508@gmail.com',
        password: '',
        celular: '',
        tipoDocumento: '',
        numeroDocumento: '',
        profilePic: '', // Aquí se almacena la URL de la foto seleccionada
      },
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1); // Navegar hacia atrás
    },
    handleSubmit(event) {
      event.preventDefault();
      console.log('Formulario enviado', this.form);
    },
    handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.form.profilePic = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    confirmarCancelacion() {
      console.log("Cuenta cancelada");
    }
  },
};
</script>
<style scoped>
@import "@/../../assets/css/EditarPerfil.css";
</style>

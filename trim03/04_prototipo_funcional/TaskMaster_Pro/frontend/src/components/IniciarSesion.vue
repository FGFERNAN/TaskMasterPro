<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="text-center">
          <img src="../assets/img/logotipo.png" class="img-fluid mx-auto d-block logo1" width="400" alt="Logo" />
        </div>
        <form ref="form" @submit.prevent="handleSubmit" class="mx-auto needs-validation custom-iniciarSesion" novalidate>
          <div class="mb-3">
            <label for="email" class="form-label">Correo Electrónico</label>
            <div class="input-group mb-3 has-validation">
              <span class="input-group-text"><i class="fa-regular fa-envelope"></i></span>
              <div class="form-floating">
                <input v-model="email" type="email" class="form-control border-input"
                  :class="{ 'is-invalid': errors.email }" id="email" placeholder="Correo electrónico" required />
                <label for="email">Correo Electrónico</label>
                <div class="invalid-feedback">
                  {{ errors.email || "Correo Invalido (Por favor ingresar el correo en el siguiente formato 'xxxx@xxx.xxx')." }}
                </div>
              </div>
            </div>
          </div>

          <div class="mb-3 mt-4">
            <label for="password" class="form-label">Contraseña</label>
            <div class="input-group mb-3 has-validation">
              <span class="input-group-text"><i class="fa-solid fa-lock"></i></span>
              <div class="form-floating">
                <input v-model="password" type="password" class="form-control border-input"
                  :class="{ 'is-invalid': errors.password }" id="password" placeholder="Contraseña" maxlength="20"
                  minlength="8" required />
                <label for="password">Contraseña</label>
                <div class="invalid-feedback">
                  {{ errors.password || "Contraseña Invalida, asegurate de que cumpla los requisitos minimos (tener minimo 8 caracteres, una letra mayuscula, una letra minuscula y un caracter especial (#,$,*).)" }}
                </div>
              </div>
            </div>

            <div class="form-check form-switch ver-contraseña">
              <input v-model="showPassword" class="form-check-input" type="checkbox" role="switch" id="viewPassword"
                @change="togglePasswordVisibility" />
              <label class="form-check-label" for="viewPassword">Ver Contraseña</label>
            </div>
          </div>

          <div class="d-grid gap-2 col-6 mx-auto">
            <button class="btn btn-primary mt-3 buton-iniciar-sesion" type="submit">
              Iniciar Sesión
            </button>
            <button type="button" class="btn btn-primary mt-2 mb-4 buton-iniciar-sesion"
              @click="redirectToRecoverPassword">
              Recuperar Contraseña
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

import api from "@/services/api";

export default {
  data() {
    return {
      email: '',
      password: '',
      showPassword: false,
      errors: {},
    };
  },
  methods: {
    async handleSubmit() {
      const form = this.$refs.form;

      // Desactiva validación automática del navegador y aplica validación manual con Bootstrap
      if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return;
      }
      this.errors = {};
      try {
        const response = await api.post("/login", {
          email: this.email,
          password: this.password,
        });
        console.log(response.data);
        this.$router.push("/perfil-completo");
      } catch (error) {
        if (error.response && error.response.data) {
          const serverErrors = error.response.data;
          if (serverErrors.message === 'Password Error') {
            this.errors.password = 'Contraseña incorrecta.';
          } else if (serverErrors.message === 'The user not created') {
            this.errors.email = 'El correo no está registrado.';
          }
        }
      }
    },
    togglePasswordVisibility() {
      const passwordField = document.getElementById('password');
      passwordField.type = this.showPassword ? 'text' : 'password';
    },
    redirectToRecoverPassword() {
      // Redirección a la vista de Recuperar Contraseña
      this.$router.push('/recuperar-contraseña');
    },
  },
};
</script>

<style scoped>
/* Personaliza estilos aquí */
.bg-custom {
  background-color: #f7f7f7;
  /* Ajusta según tu diseño */
}
</style>

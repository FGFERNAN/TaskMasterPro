<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="text-center">
          <img
            src="../assets/img/logotipo.png" 
            class="img-fluid mx-auto d-block logo1"
            width="400"
            alt="Logo"
          />
        </div>
        <form @submit.prevent="handleSubmit" class="mx-auto needs-validation custom-iniciarSesion" >
          <div class="mb-3">
            <label for="email" class="form-label">Correo Electrónico</label>
            <div class="input-group mb-3 has-validation">
              <span class="input-group-text"><i class="fa-regular fa-envelope"></i></span>
              <div class="form-floating">
                <input
                  v-model="email"
                  type="email"
                  class="form-control border-input"
                  id="email"
                  placeholder="Correo electrónico"
                  required
                />
                <label for="email">Correo Electrónico</label>
                <div class="invalid-feedback">
                  Por favor ingrese su correo electrónico.
                </div>
              </div>
            </div>
          </div>

          <div class="mb-3 mt-4">
            <label for="password" class="form-label">Contraseña</label>
            <div class="input-group mb-3 has-validation">
              <span class="input-group-text"><i class="fa-solid fa-lock"></i></span>
              <div class="form-floating">
                <input
                  v-model="password"
                  type="password"
                  class="form-control border-input"
                  id="password"
                  placeholder="Contraseña"
                  maxlength="20"
                  minlength="8"
                  required
                />
                <label for="password">Contraseña</label>
                <div class="invalid-feedback">
                  Por favor ingrese su contraseña (mínimo 8 caracteres).
                </div>
              </div>
            </div>

            <div class="form-check form-switch ver-contraseña">
              <input
                v-model="showPassword"
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="viewPassword"
                @change="togglePasswordVisibility"
              />
              <label class="form-check-label" for="viewPassword">Ver Contraseña</label>
            </div>
          </div>

          <div class="d-grid gap-2 col-6 mx-auto">
            <button class="btn btn-primary mt-3 buton-iniciar-sesion" type="submit">
              Iniciar Sesión
            </button>
            <button
              type="button"
              class="btn btn-primary mt-2 mb-4 buton-iniciar-sesion"
              @click="redirectToRecoverPassword"
            >
              Recuperar Contraseña
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      showPassword: false,
    };
  },
  methods: {
    handleSubmit() {
      // Manejo del formulario al iniciar sesión
      alert('Formulario enviado');
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
  background-color: #f7f7f7; /* Ajusta según tu diseño */
}
</style>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="text-center">
          <h1 class="d-block mt-3">Recuperar Contraseña</h1>
        </div>
        <form @submit.prevent="handleSubmit" ref="form" class="mx-auto needs-validation custom-recuperarContraseña"
          novalidate>

          <!-- Campo para Correo Electrónico -->
          <div class="mb-3">
            <label for="email" class="form-label">Correo Electrónico</label>
            <div class="input-group mb-3 has-validation">
              <span class="input-group-text"><i class="fa-regular fa-envelope"></i></span>
              <div class="form-floating">
                <input v-model="email" type="email" class="form-control border-input" id="email"
                  placeholder="Correo electrónico" required />
                <div class="invalid-feedback">
                  Por favor ingrese el correo.
                </div>
                <label for="email">Correo Electrónico</label>
              </div>
            </div>
          </div>

          <!-- Botón de Enviar -->
          <div class="d-grid gap-2 col-6 mx-auto">
            <button class="btn btn-primary mt-4 buton-recuperar-contraseña" type="submit">Recuperar contraseña</button>
            <button class="btn btn-primary mt-2 buton-intentar-accesso" @click="goLogin" type="button">Volver a intentar
              el acceso</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    document.title = "Recuperar Contraseña | TaskMaster Pro";
  },
  data() {
    return {
      email: ''
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
    },
    goLogin() {
      this.$router.push('/iniciar-sesion');
    }
  }
};
</script>

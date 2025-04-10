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
                <input v-model="email" type="email" class="form-control border-input"
                  :class="{ 'is-invalid': v$.email.$error || backendErrors.email, 'is-valid': !v$.email.$invalid && !backendErrors.email && email }"
                  id="email" placeholder="Correo electrónico" @blur="v$.email.$touch()" />
                <div v-for="error in v$.email.$errors" :key="error.$uid" class="invalid-feedback">
                  {{ error.$message }}
                </div>
                <div v-if="backendErrors.email" class="invalid-feedback">
                  {{ backendErrors.email }}
                </div>
                <div v-if="mensaje.email && !v$.email.$error && !backendErrors.email" class="valid-feedback">
                  {{ mensaje.email }}
                </div>
                <label for="email">Correo Electrónico</label>
              </div>
            </div>
          </div>
          <p class="text-center">
            ¿Tienes una cuenta?
            <a class="buton-intentar-accesso" @click="goLogin">
              Volver a intentar el acceso
            </a>
          </p>
          <!-- Botón de Enviar -->
          <div class="d-grid gap-2 col-6 mx-auto">
            <button class="btn btn-primary mt-4 buton-recuperar-contraseña" type="submit">Recuperar contraseña</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/services/api";
import { useVuelidate } from '@vuelidate/core';
import { required, email, helpers } from '@vuelidate/validators';
export default {
  setup() {
    return { v$: useVuelidate() };
  },
  mounted() {
    document.title = "Recuperar Contraseña | TaskMaster Pro";
  },
  data() {
    return {
      email: '',
      backendErrors: {},
      mensaje: {}
    };
  },
  validations() {
    return {
      email: {
        required: helpers.withMessage('El correo es obligatorio', required),
        email: helpers.withMessage('Ingrese un email valido', email),
      },
    }
  },
  methods: {
    async handleSubmit() {
      this.mensaje = {};
      this.backendErrors = {};
      const isValid = await this.v$.$validate();
      if (!isValid) return;
      try {
        const response = await api.post("/recoveryPassword", {
          email: this.email
        });
        console.log(response.data);
        alert(response.data.message);
        this.mensaje.email = 'Le hemos enviado un e-mail para que pueda recuperar la contraseña';
        this.v$.email.$reset();
      } catch (error) {
        if (error.response && error.response.data) {
          const serverErrors = error.response.data;
          if (serverErrors.message === 'El usuario no existe') {
            this.backendErrors.email = 'El usuario no existe';
            this.v$.email.$reset();
          } else {
            alert(serverErrors.message);
            console.log(serverErrors);
          }
        }
      }
    },
    goLogin() {
      this.$router.push('/iniciar-sesion');
    }
  }
};

</script>

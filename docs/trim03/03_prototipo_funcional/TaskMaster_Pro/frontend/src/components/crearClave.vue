<template>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="text-center">
            <h1 class="d-block mt-3">Crear Contraseña</h1>
          </div>
          <form @submit.prevent="handleSubmit" class="mx-auto needs-validation custom-recuperarContraseña">
            
            <!-- Campo para Nueva Contraseña -->
            <div class="mb-3">
              <label for="password" class="form-label">Nueva Contraseña*</label>
              <div class="input-group mb-3 has-validation">
                <span class="input-group-text"><i class="fa-solid fa-lock"></i></span>
                <div class="form-floating">
                  <input v-model="password" :type="showPassword ? 'text' : 'password'" 
                    class="form-control border-input" id="password"
                    placeholder="Nueva contraseña" required />
                  <label for="password">Ingresa una nueva contraseña</label>
                </div>
                
              </div>
            </div>
  
            <!-- Campo para Repetir Contraseña -->
            <div class="mb-3 mt-4">
              <label for="confirmPassword" class="form-label">Repetir Contraseña*</label>
              <div class="input-group mb-3 has-validation">
                <span class="input-group-text"><i class="fa-solid fa-lock"></i></span>
                <div class="form-floating">
                  <input v-model="confirmPassword" :type="showPassword ? 'text' : 'password'" 
                    class="form-control border-input" id="confirmPassword"
                    placeholder="Repetir contraseña" required />
                  <label for="confirmPassword">Confirmar contraseña</label>
                </div>
              
              </div>
            </div>
            <div class="form-check form-switch ver-contraseña">
              <input v-model="showPassword" class="form-check-input" type="checkbox" role="switch" id="viewPassword"
                @change="togglePasswordVisibility" />
              <label class="form-check-label" for="viewPassword">Ver Contraseña</label>
            </div>
         
  
            <!-- Botón de Enviar -->
            <div class="d-grid gap-2 col-4 mx-auto">
              <button class="btn btn-primary mt-3 buton-recuperar-contraseña" type="submit">Guardar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      document.title = "Crear Clave | TaskMaster Pro";
    },
    data() {
      return {
        password: "",
        confirmPassword: "",
        showPassword: false,
        showConfirmPassword: false
      };
    },
    methods: {
      handleSubmit() {
        alert("Contraseña establecida correctamente.");
      },
      togglePassword(field) {
        if (field === 1) {
          this.showPassword = !this.showPassword;
        } else if (field === 2) {
          this.showConfirmPassword = !this.showConfirmPassword;
        }
      }
    }
  };
  </script>
  
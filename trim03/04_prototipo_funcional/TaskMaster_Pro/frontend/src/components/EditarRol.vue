<template>
  <div class="bg-custom">
    <!-- Contenedor de encabezado -->
    <div class="container-fluid">
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
            <i class="fa-solid fa-user-pen me-2"></i> Editar Rol
          </h1>
          <img src="../assets/img/logotipo.png" alt="Logo" class="logo">
        </div>
      </div>
      <form class="container-fluid form-create-project needs-validation" novalidate>
        <div class="row mb-4"></div>
        <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label">Nombre:</label>
          <div class="col-sm-10 has-validation">
            <div class="input-group mb-3">
              <span class="input-group-text border-input" id="basic-addon1"><i class="fa-solid fa-user-tag"></i></span>
              <input type="text" class="form-control border-input" placeholder="Name" aria-label="Username"
                aria-describedby="basic-addon1" value="Administrador" maxlength="50" required />
              <div class="invalid-feedback">
                Por favor ingrese el nombre (máximo 50 caracteres).
              </div>
            </div>
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputPassword3" class="col-sm-2 col-form-label">Descripción:</label>
          <div class="col-sm-10 has-validation">
            <div class="form-floating mb-3">
              <textarea class="form-control border-input" placeholder="Leave a comment here" id="floatingTextarea"
                required>El rol que administra el software</textarea>
              <label for="floatingTextarea">Description</label>
              <div class="invalid-feedback">Por favor ingrese la descripción.</div>
            </div>
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label ">Permisos:</label>
          <div class="col-sm-10">
            <div class="input-group mb-3">
              <span class="input-group-text border-input" id="basic-addon1 "><i
                  class="fa-solid fa-users-gear"></i></span>
              <select class="form-select border-input" id="inputGroupSelect01" required>
                <option value="" style="display: none;">Seleccionar</option>
                <option selected value="1">Permisos 1</option>
                <option value="2">Permisos 2</option>
                <option value="3">Permisos 3</option>
                <option value="4">Permisos 4</option>
              </select>
              <div class="invalid-feedback">Por favor seleccione un estado.</div>
            </div>
          </div>
        </div>
        <div class="d-grid gap-2 col-6 mx-auto">
          <button class="btn btn-primary buton-form mb-4" type="submit">Guardar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    // Redireccionar a otra vista al hacer clic en "Regresar"
    goBack() {
      this.$router.push('administrar-roles');  // Cambia '/ruta-deseada' por la ruta real a la que quieres redirigir
    },
  },

  mounted() {
    (() => {
      'use strict';

      const forms = document.querySelectorAll('.needs-validation');

      Array.from(forms).forEach((form) => {
        form.addEventListener(
          'submit',
          (event) => {
            if (!form.checkValidity()) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add('was-validated');
          },
          false
        );
      });
    })();
  },
};
</script>
<style scoped>
@import "@/../../assets/css/style.css";
</style>

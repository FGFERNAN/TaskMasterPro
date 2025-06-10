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
            Crear Tarea
          </h1>
          <img src="../assets/img/logotipo.png" alt="Logo" class="logo" />
        </div>
      </div>
      <form class="container form-create-project needs-validation" novalidate @submit.prevent="validateForm">
        <div class="row mb-4"></div>

        <!-- Nombre -->
        <div class="row mb-3">
          <label class="col-sm-2 col-form-label">Nombre:</label>
          <div class="col-sm-10 has-validation">
            <div class="input-group mb-3">
              <span class="input-group-text border-input"><i class="fa-solid fa-list-check"></i></span>
              <input type="text" class="form-control border-input" placeholder="Name" maxlength="30" required />
              <div class="invalid-feedback">
                Por favor ingrese el nombre (máximo 30 caracteres).
              </div>
            </div>
          </div>
        </div>

        <!-- Descripción -->
        <div class="row mb-3">
          <label class="col-sm-2 col-form-label">Descripción:</label>
          <div class="col-sm-10 has-validation">
            <div class="form-floating mb-3">
              <textarea class="form-control border-input" placeholder="Leave a comment here" required></textarea>
              <label>Descripción</label>
              <div class="invalid-feedback">
                Por favor ingrese la descripción.
              </div>
            </div>
          </div>
        </div>

        <!-- Fecha Inicio -->
        <div class="row mb-3">
          <label class="col-sm-2 col-form-label">Fecha Inicio:</label>
          <div class="col-sm-10 mb-3 has-validation">
            <input type="date" class="form-control border-input" required />
            <div class="invalid-feedback">
              Por favor seleccione la fecha de inicio.
            </div>
          </div>
        </div>

        <!-- Fecha Fin -->
        <div class="row mb-3">
          <label class="col-sm-2 col-form-label">Fecha Fin:</label>
          <div class="col-sm-10 mb-3 has-validation">
            <input type="date" class="form-control border-input" required />
            <div class="invalid-feedback">
              Por favor seleccione la fecha de fin.
            </div>
          </div>
        </div>

        <!-- Estado -->
        <div class="row mb-3">
          <label class="col-sm-2 col-form-label">Estado:</label>
          <div class="col-sm-10">
            <div class="input-group mb-3">
              <span class="input-group-text border-input"><i class="fa-solid fa-chart-simple"></i></span>
              <select class="form-select border-input" required>
                <option value="" style="display: none;">Seleccionar</option>
                <option value="1">Pendiente</option>
                <option value="2">En Curso</option>
                <option value="3">Terminada</option>
              </select>
              <div class="invalid-feedback">
                Por favor seleccione un estado.
              </div>
            </div>
          </div>
        </div>

        <!-- Prioridad -->
        <div class="row mb-3">
          <label class="col-sm-2 col-form-label">Prioridad:</label>
          <div class="col-sm-10">
            <div class="input-group mb-3">
              <span class="input-group-text border-input">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  class="bi bi-kanban" viewBox="0 0 16 16">
                  <path
                    d="M13.5 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm-11-1a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                  <path
                    d="M6.5 3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zm-4 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zm8 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z" />
                </svg>
              </span>
              <select class="form-select border-input" required>
                <option value="" style="display: none;">Seleccionar</option>
                <option value="1">Alta</option>
                <option value="2">Media</option>
                <option value="3">Baja</option>
              </select>
              <div class="invalid-feedback">
                Por favor seleccione la prioridad.
              </div>
            </div>
          </div>
        </div>

        <!-- Botón Guardar -->
        <div class="d-grid gap-2 col-6 mx-auto">
          <button class="btn btn-primary buton-form mb-4" type="submit">Guardar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    document.title = "Crear Tarea | TaskMaster Pro";
  },
  name: 'CrearTarea',
  methods: {
    goBack() {
      history.back();
    },
    validateForm(event) {
      const form = event.target;
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }
  }
}
</script>

<style scoped>
@import "@/../../assets/css/EditarPerfil.css";
</style>

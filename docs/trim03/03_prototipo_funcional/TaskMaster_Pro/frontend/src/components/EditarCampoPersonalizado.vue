<template>
  <div class="bg-custom container-fluid">
    <div class="row no-gutters header-custom">
      <div class="col-12 d-flex align-items-center justify-content-between p-3">
        <button class="btn btn-primary buton-regresar" @click="goBack">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            class="bi bi-caret-left-fill" viewBox="0 0 16 16">
            <path
              d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
          </svg>
          <span class="button-text">Regresar</span>
        </button>
        <h1 class="mb-0 text-center flex-grow-1">Editar Campo</h1>
        <img src="../../public/assets/img/logotipo.png" alt="Logo" class="img-fluid logo">
      </div>
    </div>

    <!-- Formulario -->
    <form action="campoAgregado.html" class="container form-create-project needs-validation" novalidate ref="form">
      <div class="row mb-4"></div>

      <!-- Nombre -->
      <div class="row mb-3">
        <label class="col-sm-2 col-form-label">Nombre:</label>
        <div class="col-sm-10 has-validation">
          <div class="input-group mb-3">
            <span class="input-group-text border-input">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-input-cursor" viewBox="0 0 16 16">
                <path
                  d="M10 5h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4v1h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4zM6 5V4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v-1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z"/>
                <path fill-rule="evenodd"
                  d="M8 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13A.5.5 0 0 1 8 1" />
              </svg>
            </span>
            <input type="text" class="form-control border-input" placeholder="Name" maxlength="50"
              value="Presupuesto" required>
            <div class="invalid-feedback">Por favor ingrese el nombre (máximo 50 caracteres).</div>
          </div>
        </div>
      </div>

      <!-- Tipo -->
      <div class="row mb-3">
        <label class="col-sm-2 col-form-label">Tipo:</label>
        <div class="col-sm-10">
          <div class="input-group mb-3">
            <span class="input-group-text border-input">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-list-ul" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
              </svg>
            </span>
            <select class="form-select border-input" required>
              <option value="" style="display: none;">Seleccionar</option>
              <option value="text">Texto</option>
              <option value="number" selected>Número</option>
              <option value="date">Fecha</option>
            </select>
            <div class="invalid-feedback">Por favor seleccione un tipo.</div>
          </div>
        </div>
      </div>

      <!-- Valor -->
      <div class="row mb-3">
        <label class="col-sm-2 col-form-label">Valor:</label>
        <div class="col-sm-10 has-validation">
          <div class="input-group mb-3">
            <span class="input-group-text border-input">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-braces" viewBox="0 0 16 16">
                <path
                  d="M2.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C3.25 2 2.49 2.759 2.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6M13.886 7.9v.163c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456V7.332c-1.114 0-1.49-.362-1.49-1.456V4.352C13.51 2.759 12.75 2 11.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6" />
              </svg>
            </span>
            <input type="text" class="form-control border-input" placeholder="Value" value="1.200.000" required>
            <div class="invalid-feedback">Por favor ingrese el valor.</div>
          </div>
        </div>
      </div>

      <!-- Botón -->
      <div class="d-grid gap-2 col-6 mx-auto">
        <button class="btn btn-primary buton-form mb-4" type="submit">Guardar</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'EditarCampoPersonalizado',
  mounted() {
    const form = this.$refs.form;

    form.addEventListener('submit', event => {
      const confirmar = confirm('¿Deseas modificar el campo personalizado?');
      if (!confirmar) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }

      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add('was-validated');
    });
  },
  methods: {
    goBack() {
      history.back();
    }
  }
}
</script>

<style scoped>
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css');
@import '../../public/assets/css/style.css';
</style>
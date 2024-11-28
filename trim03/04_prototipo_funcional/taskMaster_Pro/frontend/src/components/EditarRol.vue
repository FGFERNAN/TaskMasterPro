<template>
    <div class="bg-custom">
      <!-- Contenedor de encabezado -->
      <div class="container-fluid">
        <div class="row no-gutters header-custom">
          <div class="col-12 d-flex align-items-center justify-content-between p-3">
            <button class="btn btn-primary buton-regresar" @click="goBack">
                <svg class="svg bi bi-caret-left-fill" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
              </svg>
              <span class="button-text">Regresar</span>
            </button>
            <h1 class="mb-0 text-center flex-grow-1">
              <i class="fa-solid fa-user-pen me-2"></i> Editar Rol
            </h1>
            <img  src="../assets/img/logotipo.png" alt="Logo" class="img-fluid logo">
          </div>
        </div>
        <form class="container-fluid form-create-project needs-validation" novalidate>
          <div class="row mb-4"></div>
          <div class="row mb-3">
            <label for="inputEmail3" class="col-sm-2 col-form-label">Nombre:</label>
            <div class="col-sm-10 has-validation">
              <div class="input-group mb-3">
                <span class="input-group-text border-input" id="basic-addon1"><i class="fa-solid fa-user-tag"></i></span>
                <input
                  type="text"
                  class="form-control border-input"
                  placeholder="Name"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value="Administrador"
                  maxlength="50"
                  required
                />
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
                <textarea
                  class="form-control border-input"
                  placeholder="Leave a comment here"
                  id="floatingTextarea"
                  required
                >El rol que administra el software</textarea>
                <label for="floatingTextarea">Description</label>
                <div class="invalid-feedback">Por favor ingrese la descripción.</div>
              </div>
            </div>
          </div>
          <div class="row mb-3">
            <label for="inputEmail3" class="col-sm-2 col-form-label ">Permisos:</label>
            <div class="col-sm-10">
              <div class="input-group mb-3">
                <span class="input-group-text border-input" id="basic-addon1 "><i class="fa-solid fa-users-gear"></i></span>
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
  

.bg-custom {
  background-color: #E4E2DD;
}


.custom-col {
  border-right: 0.1em solid black;
  min-height: 100vh;
  background-color: #E4E2DD;
  width: 350px;
}

.logo-inicio {
  margin-block-start: -3em;
}

.logo1{
  margin-block-start: -6em;
}


.mi-link {
  color: black;
  cursor: pointer;
}

.custom-dropdown .dropdown-menu {
  transform: translateX(15px) translateY(42px) !important;
  background-color: white;
}

.custom-col-main {
  background: white;

}

.custom-iniciarSesion {
  margin-top: -3.5em;
}

.buton-iniciar-sesion {
  background-color: #DAF5E3;
  color: black;
  border-color: black;
  font-weight: bold;
  border: 0.1em solid black;
}

.buton-iniciar-sesion:hover {
  background-color: #6DA2C1;
  border-color: black;
}

.buton-form{
  background-color: #2E7060;
  color: white;
  border-color: #2E7060;
  font-weight: bold;
}

.buton-form:hover{
  background-color: #6DA2C1;
  border-color: #6DA2C1;
}

.border-input {
  border: 1px solid black;
}

.custom-recuperarContraseña {
  margin-top: 4em;
}

.buton-recuperar-contraseña {
  background-color: #DAF5E3;
  color: black;
  border-color: black;
  font-weight: bold;
  border: 0.1em solid black;
  padding: 0.7em;
}

.buton-recuperar-contraseña:hover {
  background-color: #6DA2C1;
  border-color: black;
}

.header-custom {
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  border-radius: 8px;
}


h1 {
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-size: calc(1.375rem + 1.5vw);
  
}

.ver-contraseña {
  margin-inline-start: 73%;
}

.logo-creacion {
  margin-top: -9.5em;
}

.form-create-project {
  margin-top: 4em;
  max-width: 50%;
  padding-left: 3%;
  padding-right: 3%;
  background-color: #DAF5E3;
  border-radius: 8px;
  box-shadow: 3px 3px 9px rgba(0, 0, 0, 0.2);
}


.buton-regresar {
  background-color: #2E7060;
  color: white;
  border-color: #2E7060;
  font-weight: bold;
 
}

.buton-regresar:hover {
  background-color: #204b42;
  border-color: #2E7060 ;
  color: #ffffff;
}

.header i.fas.fa-bell {
  color: #333;
  /* Cambia el color del icono según el diseño */
  font-size: 24px;
  /* Ajusta el tamaño del icono si es necesario */
  cursor: pointer;
  margin-right: 20px;
  /* Agrega separación entre el icono y el botón */
}

.header i.fas.fa-bell:hover {
  color: #6DA2C1;
  /* Cambia el color del icono cuando se pasa el cursor sobre él */
}

.btn-cerrar-sesion {
  background-color: #DAF5E3;
  color: black;
 
}

.btn-cerrar-sesion:hover {
  background-color: #A1D9CC;
}

.btn-perfil {
  background-color: #6DA2C2;
  color: white;
  
}

.btn-perfil:hover {
  background-color: #508199;
  color: white;
}

.project-box {
  border: 2px solid #000; /* Borde negro */
  height: 13em; /* Altura del cuadro */
  margin-bottom: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
}

.project-box img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Hace que la imagen se ajuste sin deformarse */
}

.label-project {
  cursor: pointer;
  color: #000;
}

.label-project:hover {
  color: #6DA2C1;
  font-weight: bold;
}

.project-container {
  border: 2px solid #000; /* Borde del contenedor principal */
  padding: 3%;
  background-color: #DAF5E3; /* Color de fondo para diferenciar el contenedor */
  margin-block-end: 3em;
  margin-top: 2em;
}

.color-badge{
  background-color: #2E7060;
  box-shadow: 4px 6px 6px rgba(0, 0, 0, 0.3);;
}

.color-badge-plantillas{
  background-color: #6DA2C1;
  box-shadow: 4px 6px 6px rgba(0, 0, 0, 0.3);;
}

input[type="radio"]{
  border: 1px solid #bebebe;
  margin-inline-end: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

input[type="radio"]:checked{
  background-color: #204b42;
}

.buton-crear{
  width: 50px;
  height: 50px;
  background-color: #2E7060;
  border-color: #000;
}

.buton-crear:hover{
  background-color: #DAF5E3;
  color: black;
  border-color: black;
}

.btn-primary{
  --bs-btn-active-color: black;
  --bs-btn-active-bg: #DAF5E3;
  --bs-btn-active-border-color: #DAF5E3;
}

.btn-regresar {
  background-color: #2E7060;
  color: white;
  border-color: #2E7060;
}
.btn-regresar:hover {
  background-color: #204b42;
  border-color: #204b42;
  color: white;
}

.logo {
  max-width: 18%;
  height: auto;
}

@media (max-width: 576px) {
  h1 {
      font-size: 1.3rem;
  }
  
  .logo {
      max-width: 120px;
  }
  
  .buton-regresar {
    --bs-btn-padding-x: 0.75rem;
    --bs-btn-padding-y: 0.375rem;
    --bs-btn-font-size: 1rem;
  }
  .button-text {
    display: none;
}
.form-create-project{
  max-width: 70%;
}
}

@media (min-width: 577px) and (max-width: 768px) {
  h1{
    font-size: 1.7rem;
  }
  .buton-regresar {
    --bs-btn-padding-x: 0.75rem;
    --bs-btn-padding-y: 0.375rem;
    --bs-btn-font-size: 1rem;
  }
  .logo {
    max-width: 150px;
}
.form-create-project{
  max-width: 70%;
}
  
}

@media (min-width: 769px) and (max-width: 992px) {
  h1{
    font-size: 2rem;
  }
  .buton-regresar {
    --bs-btn-padding-x: 0.90rem;
    --bs-btn-padding-y: 0.475rem;
    --bs-btn-font-size: 1rem;
  }
  .logo {
    max-width: 180px;
}
.form-create-project{
  max-width: 70%;
}
}

@media (min-width: 993px) and (max-width: 1199.98px) {
  h1{
    font-size: 2.4rem;
  }
  .buton-regresar {
    --bs-btn-padding-x: 1rem;
    --bs-btn-padding-y: 0.475rem;
    --bs-btn-font-size: 1.1rem;
  }
  .logo {
    max-width: 220px;
}
.form-create-project{
  max-width: 60%;
}
.svg{
  width: 20px;
  height: 30px;
}
}
@media (min-width: 1200px) {
  .buton-regresar {
    --bs-btn-padding-x: 1.3rem;
    --bs-btn-padding-y: 0.475rem;
    --bs-btn-font-size: 1.3rem;
}
.svg{
  width: 20px;
  height: 30px;
}

}
</style>
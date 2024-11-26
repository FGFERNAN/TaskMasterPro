<template>
    <div class="bg-custom">
      <div class="container-fluid">
        <div class="row no-gutters header-custom">
          <div class="col-12 d-flex align-items-center justify-content-between p-3">
            <button class="btn btn-primary buton-regresar" @click="goBack">
              <svg
                class="svg"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"
                />
              </svg>
              <span class="button-text">Regresar</span>
            </button>
            <h1 class="mb-0 text-center flex-grow-1">
              <i class="fa-solid fa-user-pen"></i>
              Editar Usuario
            </h1>
            <img src="../assets/img/logotipo.png"   alt="Logotipo" class="img-fluid logo"/>
          </div>
        </div>
        <form @submit.prevent="submitForm" class="container form-create-project needs-validation" novalidate>
          <div class="row mb-4"></div>
          <div class="row mb-3" v-for="(field, index) in fields" :key="index">
            <label :for="field.id" class="col-sm-2 col-form-label">{{ field.label }}</label>
            <div class="col-sm-10 has-validation">
              <div class="input-group mb-3">
                <span class="input-group-text border-input" id="basic-addon1">
                  <i :class="field.icon"></i>
                </span>
                <input
                  v-if="field.type !== 'select'"
                  :type="field.type"
                  :id="field.id"
                  class="form-control border-input"
                  :placeholder="field.placeholder"
                  v-model="field.value"
                  :maxlength="field.maxlength"
                  :required="field.required"
                />
                <select
                  v-else
                  class="form-select border-input"
                  :id="field.id"
                  v-model="field.value"
                  required
                >
                  <option v-for="option in field.options" :key="option.value" :value="option.value">
                    {{ option.text }}
                  </option>
                </select>
                <div class="invalid-feedback">
                  {{ field.feedback }}
                </div>
              </div>
            </div>
          </div>
          <div class="d-grid gap-2 col-3 mx-auto">
            <button class="btn btn-primary buton-form mb-4" id="guardar" type="submit">Guardar</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        fields: [
          {
            id: "nombreUsuario",
            label: "Nombre:",
            type: "text",
            icon: "fa-solid fa-user",
            placeholder: "Name",
            maxlength: 50,
            value: "Andrés",
            required: true,
            feedback: "Por favor ingrese el nombre (máximo 50 caracteres).",
          },
          {
            id: "apellidoUsuario",
            label: "Apellido:",
            type: "text",
            icon: "fa-solid fa-user",
            placeholder: "Last Name",
            maxlength: 50,
            value: "Garzon",
            required: true,
            feedback: "Por favor ingrese el apellido (máximo 50 caracteres).",
          },
          {
            id: "correoUsuario",
            label: "Correo Electrónico:",
            type: "email",
            icon: "fa-solid fa-at",
            placeholder: "Email",
            maxlength: 100,
            value: "therixes@gmail.com",
            required: true,
            feedback: "Por favor ingrese el correo electrónico (máximo 100 caracteres).",
          },
          {
            id: "celularUsuario",
            label: "Número de Celular:",
            type: "number",
            icon: "fa-solid fa-phone",
            placeholder: "Phone Number",
            value: "3243850895",
            required: true,
            feedback: "Por favor ingrese el número de celular (10 caracteres).",
          },
          {
            id: "tipoDocumento",
            label: "Tipo Documento:",
            type: "select",
            icon: "fa-solid fa-id-card",
            options: [
              { value: "", text: "Seleccionar" },
              { value: "1", text: "Cédula de Ciudadanía" },
              { value: "2", text: "Tarjeta de Identidad" },
            ],
            value: "2",
            required: true,
            feedback: "Por favor seleccione un tipo de documento.",
          },
          {
            id: "numeroDocumento",
            label: "Número Documento:",
            type: "number",
            icon: "fa-solid fa-123",
            placeholder: "Document Number",
            value: "1054544267",
            required: true,
            feedback: "Por favor ingrese el número de documento (10 caracteres).",
          },
          {
            id: "passwordUsuario",
            label: "Contraseña:",
            type: "password",
            icon: "fa-solid fa-lock",
            placeholder: "Password",
            maxlength: 20,
            value: "12345678",
            required: true,
            feedback: "Por favor ingrese la contraseña (máximo 20 caracteres).",
          },
          {
            id: "rolUsuario",
            label: "Rol:",
            type: "select",
            icon: "fa-solid fa-user-gear",
            options: [
              { value: "", text: "Seleccionar" },
              { value: "1", text: "Administrador" },
              { value: "2", text: "Líder de Proyecto" },
            ],
            value: "2",
            required: true,
            feedback: "Por favor seleccione un rol.",
          },
        ],
      };
    },
    methods: {
      goBack() {
        history.back();
      },
      submitForm() {
        alert("Formulario enviado correctamente");
      },
    },
  };
  </script>
  
  <style scoped>


.bg-custom {
    background-color: #E4E2DD;
  }
  

.form-create-project {
    margin-block-start: 4em;
    max-width: 60%;
    padding-left: 3%;
    padding-right: 3%;
    background-color: #DAF5E3;
    border-radius: 8px;
    box-shadow: 3px 3px 9px rgba(0, 0, 0, 0.2);
  }

  h1 {
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    font-size: calc(1.375rem + 1.5vw);
  }
  

.input-nombre {
    margin-top: 2em;
  }

  .border-input {
    border: 1px solid black;
  }


.profile-pic-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.profile-pic {
    width: 150px;
    height: 150px;
    background-color: #fff;
    border: 2px solid #ccc;
    border-radius: 50%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.profile-pic img {
    max-width: 100%;
    border-radius: 50%;
}

.profile-pic .edit-icon {
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: #000;
    color: #fff;
    border-radius: 50%;
    padding: 10px;
    cursor: pointer;
}

.profile-pic-container span {
    margin-top: 10px;
    font-size: 16px;
}

.buttons {
    margin-top: 20px;
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

.buton-regresar {
    background-color: #2E7060;
    color: white;
    border-color: #2E7060;
    font-weight: bold;
}

.buton-regresar:hover {
    background-color: #204b42;
    border-color: #2E7060;
    color: #ffffff;
}

.container-custom {
    width: 100%;
    height: 15%;
    /* Usa 100% de la altura de la pantalla */
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4%;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  }
  
  .logo-header {
    position: absolute;
    right: 4%;
    width: 20%;
    height: 20%;
  
  }
  .btn-primary{
    --bs-btn-active-color: black;
    --bs-btn-active-bg: #DAF5E3;
    --bs-btn-active-border-color: #DAF5E3;
  }

  
.header-custom {
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  border-radius: 8px;
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
  
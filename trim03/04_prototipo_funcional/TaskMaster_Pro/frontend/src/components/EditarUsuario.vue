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
            <img src="../assets/img/logotipo.png" alt="Logotipo" class="img-fluid logo"/>
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
import "../assets/css/EditarPerfil.css";

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
  
  
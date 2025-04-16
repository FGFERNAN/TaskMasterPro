<template>
  <div class="container-fluid">
    <div class="row no-gutters header-custom">
      <div class="col-12 d-flex align-items-center justify-content-between p-3">
        <button class="btn btn-primary buton-regresar" @click="$router.back()">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            class="bi bi-caret-left-fill" viewBox="0 0 16 16">
            <path
              d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
          </svg>
          <span class="button-text"> Regresar</span>
        </button>
        <h1 class="mb-0 text-center flex-grow-1" @click="goToProjectEdit">
          Editar Proyecto </h1>

        <!-- Logo -->
        <img src="../assets/img/logotipo.png" alt="Logo" class="logo" />
      </div>
    </div>

    <form @submit.prevent="submitForm" class="container form-create-project needs-validation" novalidate>
      <div class="row mb-4">
      </div>
      <!-- Nombre -->
      <div class="row mb-3">
        <label class="col-sm-2 col-form-label">Nombre:</label>
        <div class="col-sm-10">
          <div class="input-group mb-3">
            <span class="input-group-text border-input"><i class="fa-regular fa-folder"></i></span>
            <input type="text" class="form-control border-input" v-model="nombre" maxlength="50" />
          </div>
          <div class="invalid-feedback d-block">

          </div>
        </div>
      </div>

      <!-- Descripción -->
      <div class="row mb-3">
        <label class="col-sm-2 col-form-label">Descripción:</label>
        <div class="col-sm-10">
          <div class="form-floating mb-3">
            <textarea class="form-control border-input" placeholder="Leave a comment here"
              v-model="descripcion"></textarea>
            <label for="floatingTextarea">Description</label>
            <div class="invalid-feedback d-block">

            </div>
          </div>
        </div>
      </div>

      <!-- Fecha Inicio -->
      <div class="row mb-3">
        <label class="col-sm-2 col-form-label">Fecha Inicio:</label>
        <div class="col-sm-10">
          <div class="input-group mb-3">
            <input type="date" class="form-control border-input" v-model="fechaInicio" />
            <div class="invalid-feedback d-block">

            </div>
          </div>
        </div>
      </div>

      <!-- Fecha Fin -->
      <div class="row mb-3">
        <label class="col-sm-2 col-form-label">Fecha Fin:</label>
        <div class="col-sm-10">
          <div class="input-group mb-3">
            <input type="date" class="form-control border-input" v-model="fechaFin" />
            <div class="invalid-feedback d-block">

            </div>
          </div>
        </div>
      </div>

      <!-- Estado -->
      <div class="row mb-3">
        <label class="col-sm-2 col-form-label">Estado:</label>
        <div class="col-sm-10">
          <div class="input-group mb-3">
            <span class="input-group-text border-input" id="basic-addon1"><i
                class="fa-solid fa-chart-simple"></i></span>
            <select class="form-select border-input" v-model="estado">
              <option value="" disabled>Seleccionar</option>
              <option value="1">En Progreso</option>
              <option value="2">Completado</option>
              <option value="En Espera">En Espera</option>
              <option value="4">Cancelado</option>
            </select>
            <div class="invalid-feedback d-block">

            </div>
          </div>
        </div>
      </div>

      <!-- Prioridad -->
      <div class="row mb-3">
        <label class="col-sm-2 col-form-label">Prioridad:</label>
        <div class="col-sm-10">
          <div class="input-group mb-3">
            <span class="input-group-text border-input" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg"
                width="16" height="16" fill="currentColor" class="bi bi-kanban" viewBox="0 0 16 16">
                <path
                  d="M13.5 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm-11-1a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                <path
                  d="M6.5 3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zm-4 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zm8 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z" />
              </svg></span>
            <select class="form-select border-input" v-model="prioridad">
              <option value="" disabled>Seleccionar</option>
              <option value="Alta">Alta</option>
              <option value="2">Media</option>
              <option value="3">Baja</option>
            </select>
            <div class="invalid-feedback d-block">

            </div>
          </div>
        </div>
      </div>

      <!-- Botón Agregar Campo Personalizado -->
      <div class="row mb-4 text-center">
        <label class="col-sm-4 col-form-label">Campos Personalizados:</label>
        <div class="col-sm-6">
          <button class="btn btn-primary buton-form" type="button" @click="$router.push('/crearCampo')">
            <i class="fa-solid fa-plus"></i> Agregar
          </button>
        </div>
      </div>

      <!-- Botón Guardar -->
      <div class="d-grid gap-2 col-6 mx-auto">
        <button class="btn btn-primary buton-form mb-4" type="submit">Guardar</button>
      </div>
    </form>
  </div>
</template>
<script>
import api from '@/services/api';
import { required, minLength } from '@vuelidate/validators';
import { helpers } from '@vuelidate/validators';
import useVuelidate from '@vuelidate/core';

export default {
  data() {
    return {
      nombre: "",
      descripcion: "",
      fechaInicio: "",
      fechaFin: "",
      estado: "",
      prioridad: "",
      v$: useVuelidate()
    };
  },
  mounted() {
    document.title = "Editar Proyecto | TaskMaster Pro";
    const projectId = this.$route.params.id;
    this.getProjectById(projectId);
  },
  validations() {
    return {
      project: {
        name: {
          required: helpers.withMessage('El nombre es obligatorio', required),
          minLength: helpers.withMessage('Mínimo 3 caracteres', minLength(3))
        },
        description: {
          required: helpers.withMessage('La descripción es obligatoria', required),
          minLength: helpers.withMessage('Mínimo 10 caracteres', minLength(10))
        },
        startDate: {
          required: helpers.withMessage('La fecha de inicio es obligatoria', required),
        },
        endDate: {
          required: helpers.withMessage('La fecha de fin es obligatoria', required),
        },
        status: {
          required: helpers.withMessage('El estado es obligatorio', required),
        },
        priority: {
          required: helpers.withMessage('La prioridad es obligatoria', required),
        }
      }
    };
  },
  methods: {
    async submitForm() {
      this.v$.$touch();
      if (this.v$.$invalid) {
        alert("Por favor, corrige los errores antes de guardar.");
        return;
      }

      if (confirm("¿Estás seguro que deseas modificar el proyecto?")) {
        alert("Proyecto guardado correctamente");
        // Aquí podrías emitir un evento o enviar a una API
      }
    },
    goToProjectEdit() {
      this.$router.push({ path: '/editar-proyecto' });
    },
    async getProjectById(projectId) {
      try {
        const response = await api.get(`/project/${projectId}`);
        this.nombre = response.data.data.nombre;
        this.descripcion = response.data.data.descripcion;
        this.fechaInicio = response.data.data.fechaInicio;
        this.fechaFin = response.data.data.fechaFin;
        this.estado = response.data.data.estado;
        this.prioridad = response.data.data.prioridad;
      } catch (error) {
        if (error.response && error.response.data) {
          const serverErrors = error.response.data;
          if (serverErrors.message === 'Proyecto no encontrado') {
            console.log(serverErrors);
            alert(`${serverErrors.message} en la base de datos`);
          } else if (serverErrors.mensaje === 'Usuario no autenticado') {
            console.log(serverErrors.mensaje);
            alert(`${serverErrors.mensaje}, debes loguearte para acceder a las funciones de esta ruta.`);
            this.$router.push('/iniciar-sesion');
          } else {
            console.log(serverErrors);
            this.$router.push('/error500');
          }
        }
      }
    }
  },

};
</script>

<style scoped>
@import "@/../../assets/css/EditarPerfil.css";
@import "@/../../assets/css/style.css";
</style>
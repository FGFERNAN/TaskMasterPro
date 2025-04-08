<template>
    <div class="container-fluid">
      <div class="row no-gutters header-custom">
        <div class="col-12 d-flex align-items-center justify-content-between p-3">
          <button class="btn btn-primary buton-regresar" @click="$router.back()">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
              <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
            </svg>
            <span class="button-text">Regresar</span>
          </button>
          <h1 class="mb-0 text-center flex-grow-1">Editar Proyecto</h1>
          <img src="../assets/img/logotipo.png" alt="Logo" class="logo" />
        </div>
      </div>
      <form @submit.prevent="submitForm" class="container form-create-project needs-validation" novalidate>
        <div class="row mb-3">
          <label class="col-sm-2 col-form-label">Nombre:</label>
          <div class="col-sm-10">
            <div class="input-group mb-3">
              <span class="input-group-text border-input"><i class="fa-regular fa-folder"></i></span>
              <input type="text" class="form-control border-input" v-model="project.name" maxlength="5" required />
            </div>
          </div>
        </div>
        <div class="row mb-3">
          <label class="col-sm-2 col-form-label">Descripción:</label>
          <div class="col-sm-10">
            <textarea class="form-control border-input" v-model="project.description" required></textarea>
          </div>
        </div>
        <div class="row mb-3">
          <label class="col-sm-2 col-form-label">Fecha Inicio:</label>
          <div class="col-sm-10">
            <input type="date" class="form-control border-input" v-model="project.startDate" required />
          </div>
        </div>
        <div class="row mb-3">
          <label class="col-sm-2 col-form-label">Fecha Fin:</label>
          <div class="col-sm-10">
            <input type="date" class="form-control border-input" v-model="project.endDate" required />
          </div>
        </div>
        <div class="row mb-3">
          <label class="col-sm-2 col-form-label">Estado:</label>
          <div class="col-sm-10">
            <select class="form-select border-input" v-model="project.status" required>
              <option value="">Seleccionar</option>
              <option value="1">En Progreso</option>
              <option value="2">Completado</option>
              <option value="3">En Espera</option>
              <option value="4">Cancelado</option>
            </select>
          </div>
        </div>
        <div class="row mb-3">
          <label class="col-sm-2 col-form-label">Prioridad:</label>
          <div class="col-sm-10">
            <select class="form-select border-input" v-model="project.priority" required>
              <option value="">Seleccionar</option>
              <option value="1">Alta</option>
              <option value="2">Media</option>
              <option value="3">Baja</option>
            </select>
          </div>
        </div>
        <div class="row mb-4 text-center">
          <label class="col-sm-4 col-form-label">Campos Personalizados:</label>
          <div class="col-sm-6">
            <button class="btn btn-primary buton-form" type="button" @click="$router.push('/crearCampo')">
              <i class="fa-solid fa-plus"></i> Agregar
            </button>
          </div>
        </div>
        <div class="d-grid gap-2 col-6 mx-auto">
          <button class="btn btn-primary buton-form mb-4" type="submit">Guardar</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  
  export default {
    setup() {
      const router = useRouter();
      const project = ref({
        name: "Veterinaria",
        description: "Proyecto de Veterinaria",
        startDate: "2024-08-12",
        endDate: "2024-12-02",
        status: "3",
        priority: "2",
      });
  
      const submitForm = () => {
        if (confirm("¿Estás seguro que deseas modificar el proyecto?")) {
          alert("Proyecto guardado correctamente");
        }
      };
  
      return { project, submitForm, router };
    },
  };
  </script>
  <style scoped>
  @import "@/../../assets/css/EditarPerfil.css";
  </style>
 
  
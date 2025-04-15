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
        <h1 class="mb-0 text-center flex-grow-1" @click="goToProjectEdit ">
          Editar Proyecto </h1>

<!-- Logo -->
<img src="../assets/img/logotipo.png" alt="Logo" class="logo" />
      </div>
    </div>

    <form @submit.prevent="submitForm" class="container form-create-project needs-validation" novalidate>
      <!-- Nombre -->
      <div class="row mb-3">
        <label class="col-sm-2 col-form-label">Nombre:</label>
        <div class="col-sm-10">
          <div class="input-group mb-3">
            <span class="input-group-text border-input"><i class="fa-regular fa-folder"></i></span>
            <input
              type="text"
              class="form-control border-input"
              v-model="project.name"
              maxlength="50"
              :class="{ 'is-invalid': v$.project.name.$error }"
            />
          </div>
          <div v-if="v$.project.name.$error" class="invalid-feedback d-block">
            <div v-for="error in v$.project.name.$errors" :key="error.$uid">{{ error.$message }}</div>
          </div>
        </div>
      </div>

      <!-- Descripción -->
      <div class="row mb-3">
        <label class="col-sm-2 col-form-label">Descripción:</label>
        <div class="col-sm-10">
          <textarea
            class="form-control border-input"
            v-model="project.description"
            :class="{ 'is-invalid': v$.project.description.$error }"
          ></textarea>
          <div v-if="v$.project.description.$error" class="invalid-feedback d-block">
            <div v-for="error in v$.project.description.$errors" :key="error.$uid">{{ error.$message }}</div>
          </div>
        </div>
      </div>

      <!-- Fecha Inicio -->
      <div class="row mb-3">
        <label class="col-sm-2 col-form-label">Fecha Inicio:</label>
        <div class="col-sm-10">
          <input
            type="date"
            class="form-control border-input"
            v-model="project.startDate"
            :class="{ 'is-invalid': v$.project.startDate.$error }"
          />
          <div v-if="v$.project.startDate.$error" class="invalid-feedback d-block">
            <div v-for="error in v$.project.startDate.$errors" :key="error.$uid">{{ error.$message }}</div>
          </div>
        </div>
      </div>

      <!-- Fecha Fin -->
      <div class="row mb-3">
        <label class="col-sm-2 col-form-label">Fecha Fin:</label>
        <div class="col-sm-10">
          <input
            type="date"
            class="form-control border-input"
            v-model="project.endDate"
            :class="{ 'is-invalid': v$.project.endDate.$error }"
          />
          <div v-if="v$.project.endDate.$error" class="invalid-feedback d-block">
            <div v-for="error in v$.project.endDate.$errors" :key="error.$uid">{{ error.$message }}</div>
          </div>
        </div>
      </div>

      <!-- Estado -->
      <div class="row mb-3">
        <label class="col-sm-2 col-form-label">Estado:</label>
        <div class="col-sm-10">
          <select
            class="form-select border-input"
            v-model="project.status"
            :class="{ 'is-invalid': v$.project.status.$error }"
          >
            <option value="">Seleccionar</option>
            <option value="1">En Progreso</option>
            <option value="2">Completado</option>
            <option value="3">En Espera</option>
            <option value="4">Cancelado</option>
          </select>
          <div v-if="v$.project.status.$error" class="invalid-feedback d-block">
            <div v-for="error in v$.project.status.$errors" :key="error.$uid">{{ error.$message }}</div>
          </div>
        </div>
      </div>

      <!-- Prioridad -->
      <div class="row mb-3">
        <label class="col-sm-2 col-form-label">Prioridad:</label>
        <div class="col-sm-10">
          <select
            class="form-select border-input"
            v-model="project.priority"
            :class="{ 'is-invalid': v$.project.priority.$error }"
          >
            <option value="">Seleccionar</option>
            <option value="1">Alta</option>
            <option value="2">Media</option>
            <option value="3">Baja</option>
          </select>
          <div v-if="v$.project.priority.$error" class="invalid-feedback d-block">
            <div v-for="error in v$.project.priority.$errors" :key="error.$uid">{{ error.$message }}</div>
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
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import useVuelidate from '@vuelidate/core';
import { required, minLength  } from '@vuelidate/validators';
import { helpers } from '@vuelidate/validators';


export default {
  setup() {
    const router = useRouter();

    const project = ref({
      name: "",
      description: "",
      startDate: "",
      endDate: "",
      status: "",
      priority: "",
    });

    const validations = computed(() => ({
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
    }));

    const v$ = useVuelidate(validations, { project });

    const submitForm = async () => {
      v$.value.$touch();
      if (v$.value.$invalid) {
        alert("Por favor, corrige los errores antes de guardar.");
        return;
      }
        
      
      if (confirm("¿Estás seguro que deseas modificar el proyecto?")) {
        alert("Proyecto guardado correctamente");
        // Aquí podrías emitir un evento o enviar a una API
      }
    };
    
  
    const goToProjectEdit = () => {
      router.push({ path: '/editar-proyecto' });
  };

    return { project, submitForm, router, v$, goToProjectEdit};
  },
};


</script>

  <style scoped>
  @import "@/../../assets/css/EditarPerfil.css";
  @import "@/../../assets/css/style.css";
  </style>
 
  
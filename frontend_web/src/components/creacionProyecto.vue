<template>
  <div class="bg-custom">
    <div class="container-fluid">
      <div class="row no-gutters header-custom">
        <div class="col-12 d-flex align-items-center justify-content-between p-3">
          <button class="btn btn-primary buton-regresar" @click="goBack">
            <svg class="svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              viewBox="0 0 16 16">
              <path
                d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
            </svg>
            <span class="button-text"> Regresar</span>
          </button>
          <h1 class="mb-0 text-center flex-grow-1">
            Creación Proyecto
          </h1>
          <img src="../assets/img/logotipo.png" alt="Logo" class="logo" />
        </div>
      </div>

      <form class="container form-create-project needs-validation" novalidate @submit.prevent="handleSubmit">
        <div class="row mb-4"></div>
        <div class="row mb-3">
          <label class="col-sm-2 col-form-label">Nombre:</label>
          <div class="col-sm-10 has-validation">
            <div class="input-group mb-3">
              <span class="input-group-text border-input">
                <i class="fa-solid fa-folder-open"></i>
              </span>
              <input v-model="nombre" type="text" class="form-control border-input"
                :class="{ 'is-invalid': v$.nombre.$error || backendErrors.nombre, 'is-valid': !v$.nombre.$invalid && !backendErrors.nombre && nombre }"
                placeholder="Name" @blur="v$.nombre.$touch()" />
              <div v-for="error in v$.nombre.$errors" :key="error.$uid" class="invalid-feedback">
                {{ error.$message }}
              </div>
              <div v-if="backendErrors.nombre" class="invalid-feedback">
                {{ backendErrors.nombre }}
              </div>
            </div>
          </div>
        </div>

        <div class="row mb-3">
          <label class="col-sm-2 col-form-label">Descripción:</label>
          <div class="col-sm-10 has-validation">
            <div class="form-floating mb-3">
              <textarea v-model="descripcion" class="form-control border-input"
                :class="{ 'is-invalid': v$.descripcion.$error, 'is-valid': !v$.descripcion.$invalid }"
                id="floatingTextarea" placeholder="Leave a comment here" @blur="v$.descripcion.$touch()"></textarea>
              <label for="floatingTextarea">Description</label>
              <div v-for="error in v$.descripcion.$errors" :key="error.$uid" class="invalid-feedback">
                {{ error.$message }}
              </div>
            </div>
          </div>
        </div>

        <div class="row mb-3">
          <label class="col-sm-2 col-form-label">Fecha Inicio:</label>
          <div class="col-sm-10 mb-3 has-validation">
            <input v-model="fechaInicio" type="date" class="form-control border-input"
              :class="{ 'is-invalid': v$.fechaInicio.$error || backendErrors.fechaInicio, 'is-valid': !v$.fechaInicio.$invalid && !backendErrors.fechaInicio && fechaInicio }"
              @blur="v$.fechaInicio.$touch()" />
            <div v-for="error in v$.fechaInicio.$errors" :key="error.$uid" class="invalid-feedback">
              {{ error.$message }}
            </div>
            <div v-if="backendErrors.fechaInicio" class="invalid-feedback">
              {{ backendErrors.fechaInicio }}
            </div>
          </div>
        </div>

        <div class="row mb-3">
          <label class="col-sm-2 col-form-label">Fecha Fin:</label>
          <div class="col-sm-10 mb-3 has-validation">
            <input v-model="fechaFin" type="date" class="form-control border-input"
              :class="{ 'is-invalid': v$.fechaFin.$error || backendErrors.fechaFin, 'is-valid': !v$.fechaFin.$invalid && !backendErrors.fechaFin && fechaFin }"
              @blur="v$.fechaFin.$touch()" />
            <div v-for="error in v$.fechaFin.$errors" :key="error.$uid" class="invalid-feedback">
              {{ error.$message }}
            </div>
            <div v-if="backendErrors.fechaFin" class="invalid-feedback">
              {{ backendErrors.fechaFin }}
            </div>
          </div>
        </div>

        <div class="row mb-3">
          <label class="col-sm-2 col-form-label">Estado:</label>
          <div class="col-sm-10">
            <div class="input-group mb-3">
              <span class="input-group-text border-input">
                <i class="fa-solid fa-chart-simple"></i>
              </span>
              <select v-model="estado" class="form-select border-input"
                :class="{ 'is-invalid': v$.estado.$error, 'is-valid': !v$.estado.$invalid }" @blur="v$.estado.$touch()">
                <option value="" disabled>Seleccionar</option>
                <option value="En Progreso">En Progreso</option>
                <option value="Completado">Completado</option>
                <option value="En Espera">En Espera</option>
                <option value="Cancelado">Cancelado</option>
              </select>
              <div v-for="error in v$.estado.$errors" :key="error.$uid" class="invalid-feedback">
                {{ error.$message }}
              </div>
            </div>
          </div>
        </div>

        <div class="row mb-3">
          <label class="col-sm-2 col-form-label">Prioridad:</label>
          <div class="col-sm-10">
            <div class="input-group mb-3">
              <span class="input-group-text border-input">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-kanban"
                  viewBox="0 0 16 16">
                  <path
                    d="M13.5 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm-11-1a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                  <path
                    d="M6.5 3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zm-4 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zm8 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z" />
                </svg>
              </span>
              <select v-model="prioridad" class="form-select border-input"
                :class="{ 'is-invalid': v$.prioridad.$error, 'is-valid': !v$.prioridad.$invalid }"
                @blur="v$.prioridad.$touch()">
                <option value="" disabled>Seleccionar</option>
                <option value="Alta">Alta</option>
                <option value="Media">Media</option>
                <option value="Baja">Baja</option>
              </select>
              <div v-for="error in v$.prioridad.$errors" :key="error.$uid" class="invalid-feedback">
                {{ error.$message }}
              </div>
            </div>
          </div>
        </div>

        <div class="row mb-4 text-center">
          <label class="col-sm-4 col-form-label">Campos Personalizados:</label>
          <div class="col-sm-6">
            <button class="btn btn-primary buton-form" type="button" @click="goToCrearCampo">
              <i class="fa-solid fa-plus"></i> Agregar
            </button>
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
import api from '@/services/api';
import { useVuelidate } from '@vuelidate/core';
import { required, helpers } from '@vuelidate/validators';
import { maxLength } from 'vuelidate/lib/validators';
import { minLength } from 'vuelidate/lib/validators';
export default {
  setup() {
    return { v$: useVuelidate() };
  },
  mounted() {
    document.title = "Crear Proyecto | TaskMaster Pro";
  },
  data() {
    return {
      nombre: '',
      descripcion: '',
      fechaInicio: '',
      fechaFin: '',
      estado: '',
      prioridad: '',
      backendErrors: {}
    }
  },
  validations() {
    return {
      nombre: {
        required: helpers.withMessage('El nombre es obligatorio', required),
        minLength: helpers.withMessage('Minimo 3 caracteres', minLength(3)),
        strong: helpers.withMessage(
          'Debe contener solo letras',
          (value) => /^[A-Za-záéúíóñÑÁÉÚÍÓ\s]{3,}$/.test(value)
        )
      },
      descripcion: {
        required: helpers.withMessage('La descripcion es obligatoria', required),
        minLength: helpers.withMessage('Minimo 10 caracteres', minLength(10)),
        maxLength: helpers.withMessage('Maximo 1000 caracteres', maxLength(1000))
      },
      fechaInicio: {
        required: helpers.withMessage('La fecha de inicio es obligatoria', required),
      },
      fechaFin: {
        required: helpers.withMessage('La fecha de fin es obligatoria', required),
      },
      estado: {
        required: helpers.withMessage('El estado es obligatorio', required),
      },
      prioridad: {
        required: helpers.withMessage('La prioridad es obligatoria', required)
      }
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    goToCrearCampo() {
      this.$router.push('/crear-campo');
    },
    async handleSubmit() {
      const isValid = await this.v$.$validate();
      if (!isValid) return;
      try {
        const response = await api.post('/project', {
          nombre: this.nombre,
          descripcion: this.descripcion,
          fechaInicio: this.fechaInicio,
          fechaFin: this.fechaFin,
          estado: this.estado,
          prioridad: this.prioridad
        });
        console.log(response.data);
        alert(response.data.message);
        this.$router.push("/interfaz-principal");
      } catch (error) {
        if (error.response && error.response.data) {
          const serverErrors = error.response.data;
          if (serverErrors.message === 'Proyecto no creado') {
            console.log(serverErrors.message);
            alert('Ingresa los parametros necesarios para realizar la creación');
          } else if (serverErrors.mensaje === 'Usuario no autenticado') {
            console.log(serverErrors.mensaje);
            alert(`${serverErrors.mensaje}, debes loguearte para acceder a las funciones de esta ruta.`);
            this.$router.push('/iniciar-sesion');
          } else if (serverErrors.mensaje === 'No tienes permisos para realizar esta acción.') {
            console.log(serverErrors.mensaje);
            this.$router.push('/error403');
          } else if (serverErrors.message === 'La fecha de inicio no puede ser posterior a la fecha de fin') {
            this.backendErrors.fechaFin = `${serverErrors.message}`;
            this.backendErrors.fechaInicio = `${serverErrors.message}`;
            this.v$.fechaFin.$reset();
            this.v$.fechaInicio.$reset();
          } else if (serverErrors.message === 'El nombre ingresado ya se encuentra registrado en otro proyecto activo') {
            this.backendErrors.nombre = `${serverErrors.message}`;
            this.v$.nombre.$reset();
          } else {
            console.log(serverErrors);
            this.$router.push('/error500');
          }
        }
      }
    },
  },
}
</script>

<style scoped>
/* Puedes usar el style.css o copiar aquí los estilos personalizados */
</style>

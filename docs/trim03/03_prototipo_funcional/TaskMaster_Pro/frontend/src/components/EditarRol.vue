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
      <form ref="form" @submit.prevent="updateRole" class="container-fluid form-create-project needs-validation" novalidate>
        <div class="row mb-4"></div>
        <div class="row mb-3">
          <label for="nombre" class="col-sm-2 col-form-label">Nombre:</label>
          <div class="col-sm-10 has-validation">
            <div class="input-group mb-3">
              <span class="input-group-text border-input" id="basic-addon1"><i class="fa-solid fa-user-tag"></i></span>
              <input type="text" id="nombre" class="form-control border-input" :class="{ 'is-invalid': v$.nombre.$error, 'is-valid': !v$.nombre.$invalid }" placeholder="Name" aria-label="Username"
                aria-describedby="basic-addon1" v-model="nombre" @blur="v$.nombre.$touch()"/>
                <div v-for="error in v$.nombre.$errors" :key="error.$uid" class="invalid-feedback">
                {{ error.$message }}
              </div>
            </div>
          </div>
        </div>
        <div class="row mb-3">
          <label for="descripcion" class="col-sm-2 col-form-label">Descripción:</label>
          <div class="col-sm-10 has-validation">
            <div class="form-floating mb-3">
              <textarea class="form-control border-input" :class="{ 'is-invalid': v$.descripcion.$error, 'is-valid': !v$.descripcion.$invalid }" v-model="descripcion" placeholder="Leave a comment here" id="descripcion" 
              @blur="v$.descripcion.$touch()">El rol que administra el software</textarea>
              <label for="floatingTextarea">Description</label>
              <div v-for="error in v$.descripcion.$errors" :key="error.$uid" class="invalid-feedback">
                  {{ error.$message }}
                </div>
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
    document.title = "Editar Rol | TaskMaster Pro";
    const roleId = this.$route.params.id;
    this.getRoleById(roleId);
  },
  data(){
    return{
      nombre: "",
      descripcion: ""
    };
  },
  validations(){
    return {
      nombre: {
        required: helpers.withMessage('El nombre es obligatorio', required),
        maxLength: helpers.withMessage('Maximo 50 caracteres', maxLength(50)),
        strong: helpers.withMessage(
          'Debe contener solo letras',
          (value) => /^[A-Za-záéúíóñÑÁÉÚÍÓ\s]{1,50}$/.test(value)
        )
      },
      descripcion: {
        required: helpers.withMessage('La descripcion es obligatoria', required),
        minLength: helpers.withMessage('Minimo 10 caracteres', minLength(10)),
        maxLength: helpers.withMessage('Maximo 1000 caracteres', maxLength(1000))
      }
    }
  },
  methods: {
    // Redireccionar a otra vista al hacer clic en "Regresar"
    goBack() {
      this.$router.go(-1); 
    },

    async getRoleById(roleId){
      try {
        const response = await api.get(`/role/${roleId}`);
        this.nombre = response.data.data.nombre;
        this.descripcion = response.data.data.descripcion;
      } catch(error) {
        if(error.response && error.response.data){
          const serverErrors = error.response.data;
          if(serverErrors.message === 'Rol no encontrado'){
            console.log(serverErrors);
            alert(`${serverErrors.message} en la base de datos`);
          } else if(serverErrors.message === 'Error fetching role: '){
            console.log(serverErrors);
            alert(`Ocurrio un error inesperado del lado del servidor: ${serverErrors.message}, vuelve a intentar más tarde`);
          } else{
            console.log(error.reponse);
            alert(error.response.data.mensaje);
          }
        }
      }
    },
    async updateRole(){
      const isValid = await this.v$.$validate();
      if (!isValid) return;
      try{
        const response = await api.put(`/role/${this.roles.id}`, {
          nombre: this.nombre,
          descripcion: this.descripcion
        });
        console.log(response.data.message);
        alert(response.data.message);
        this.$router.push('/administrar-roles');
      } catch (error) {
        if(error.response && error.response.data){
          const serverErrors = error.response.data;
          if(serverErrors.message === 'Rol no actualizado'){
            console.log(serverErrors.message);
            alert('Ingresa los parametros necesarios para realizar la creación');
          } else if(serverErrors.message === 'Unregistered role'){
            console.log(serverErrors.message);
            alert(`El rol que estas intentando editar no existe en la base de datos, ${serverErrors.message}`);
          } else if(serverErrors.mensaje === 'Usuario no autenticado'){
            console.log(serverErrors.mensaje);
            alert(`${serverErrors.mensaje}, debes loguearte para acceder a las funciones de esta ruta.`);
            this.$router.push('/iniciar-sesion');
          } else if(serverErrors.mensaje === 'No tienes permisos para realizar esta acción.'){
            console.log(serverErrors.mensaje);
            this.$router.push('/error403');
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
@import "@/../../assets/css/style.css";
</style>

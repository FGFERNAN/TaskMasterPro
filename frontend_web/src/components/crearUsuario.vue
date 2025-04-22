<template>
  <div class="bg-custom">
    <div class="container-fluid">
      <!-- Header -->
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
            <i class="fa-solid fa-user-plus me-2"></i>
            Crear Usuario
          </h1>
          <img src="../assets/img/logotipo.png" alt="Logo" class="logo" />
        </div>
      </div>
      <form ref="form" @submit.prevent="handleSubmit"
        class="container form-create-project-editar-perfil needs-validation" novalidate>
        <div class="row mb-4"></div>
        <!-- Nombre -->
        <div class="row mb-3">
          <label for="nombreUsuario" class="col-sm-2 col-form-label">Nombre:</label>
          <div class="col-sm-10 has-validation">
            <div class="input-group mb-3">
              <span class="input-group-text border-input">
                <i class="fa-solid fa-user"></i>
              </span>
              <input type="text" class="form-control border-input"
                :class="{ 'is-invalid': v$.nombre.$error, 'is-valid': !v$.nombre.$invalid }" id="nombreUsuario"
                placeholder="Name" v-model="nombre" @blur="v$.nombre.$touch()" />
              <div v-for="error in v$.nombre.$errors" :key="error.$uid" class="invalid-feedback">
                {{ error.$message }}
              </div>
            </div>
          </div>
        </div>
        <!-- Apellido -->
        <div class="row mb-3">
          <label for="apellidoUsuario" class="col-sm-2 col-form-label">Apellidos:</label>
          <div class="col-sm-10 has-validation">
            <div class="input-group mb-3">
              <span class="input-group-text border-input" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg"
                  width="16" height="16" fill="currentColor" class="bi bi-person-vcard-fill" viewBox="0 0 16 16">
                  <path
                    d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm9 1.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5M9 8a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4A.5.5 0 0 0 9 8m1 2.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5m-1 2C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 0 2 13h6.96q.04-.245.04-.5M7 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0" />
                </svg></span>
              <input type="text" class="form-control border-input"
                :class="{ 'is-invalid': v$.apellidos.$error, 'is-valid': !v$.apellidos.$invalid }" id="apellidoUsuario"
                placeholder="Last Name" v-model="apellidos" @blur="v$.apellidos.$touch()" />
              <div v-for="error in v$.apellidos.$errors" :key="error.$uid" class="invalid-feedback">
                {{ error.$message }}
              </div>
            </div>
          </div>
        </div>
        <!-- Correo Electrónico -->
        <div class="row mb-3">
          <label for="correoUsuario" class="col-sm-2 col-form-label">Correo Electrónico:</label>
          <div class="col-sm-10 has-validation">
            <div class="input-group mb-3">
              <span class="input-group-text border-input">
                <i class="fa-solid fa-at"></i>
              </span>
              <input type="email" v-model="email" class="form-control border-input"
                :class="{ 'is-invalid': v$.email.$error || backendErrors.email, 'is-valid': !v$.email.$invalid && !backendErrors.email && email }"
                id="correoUsuario" placeholder="Email" @blur="v$.email.$touch()" />
              <div v-for="error in v$.email.$errors" :key="error.$uid" class="invalid-feedback">
                {{ error.$message }}
              </div>
              <div v-if="backendErrors.email" class="invalid-feedback">
                {{ backendErrors.email }}
              </div>
            </div>
          </div>
        </div>

        <div class="row mb-3">
          <label for="numeroCelular" class="col-sm-2 col-form-label">Número de Celular:</label>
          <div class="col-sm-10 has-validation">
            <div class="input-group mb-3">
              <span class="input-group-text border-input"><i class="fa-solid fa-phone"></i></span>
              <input type="text" id="numeroCelular" class="form-control border-input" @blur="v$.telefono.$touch()"
                :class="{
                  'is-invalid': v$.telefono.$error,
                  'is-valid': !v$.telefono.$invalid && telefono
                }" v-model="telefono" placeholder="Phone Number" />
              <div v-for="error in v$.telefono.$errors" :key="error.$uid" class="invalid-feedback">
                {{ error.$message }}
              </div>
            </div>
          </div>
        </div>

        <div class="row mb-3">
          <label for="tipoDocumento" class="col-sm-2 col-form-label">Tipo Documento:</label>
          <div class="col-sm-10">
            <div class="input-group mb-3">
              <span class="input-group-text border-input"><i class="fa-solid fa-id-card"></i></span>
              <select id="tipoDocumento" v-model="tipo_documento" class="form-select border-input"
                :class="{ 'is-invalid': v$.tipo_documento.$error, 'is-valid': !v$.tipo_documento.$invalid }"
                @blur="v$.tipo_documento.$touch()">
                <option value="" selected disabled>Seleccionar</option>
                <option value="1">Tarjeta de Identidad</option>
                <option value="2">Cédula de Ciudadanía</option>
                <option value="3">Cedula de Extranjeria</option>
              </select>
              <div v-for="error in v$.tipo_documento.$errors" :key="error.$uid" class="invalid-feedback">
                {{ error.$message }}
              </div>
            </div>
          </div>
        </div>

        <!-- Nuevo campo: Número de Documento -->
        <div class="row mb-3">
          <label for="numeroDocumento" class="col-sm-2 col-form-label">Número de Documento:</label>
          <div class="col-sm-10 has-validation">
            <div class="input-group mb-3">
              <span class="input-group-text border-input" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg"
                  width="16" height="16" fill="currentColor" class="bi bi-123" viewBox="0 0 16 16">
                  <path
                    d="M2.873 11.297V4.142H1.699L0 5.379v1.137l1.64-1.18h.06v5.961zm3.213-5.09v-.063c0-.618.44-1.169 1.196-1.169.676 0 1.174.44 1.174 1.106 0 .624-.42 1.101-.807 1.526L4.99 10.553v.744h4.78v-.99H6.643v-.069L8.41 8.252c.65-.724 1.237-1.332 1.237-2.27C9.646 4.849 8.723 4 7.308 4c-1.573 0-2.36 1.064-2.36 2.15v.057zm6.559 1.883h.786c.823 0 1.374.481 1.379 1.179.01.707-.55 1.216-1.421 1.21-.77-.005-1.326-.419-1.379-.953h-1.095c.042 1.053.938 1.918 2.464 1.918 1.478 0 2.642-.839 2.62-2.144-.02-1.143-.922-1.651-1.551-1.714v-.063c.535-.09 1.347-.66 1.326-1.678-.026-1.053-.933-1.855-2.359-1.845-1.5.005-2.317.88-2.348 1.898h1.116c.032-.498.498-.944 1.206-.944.703 0 1.206.435 1.206 1.07.005.64-.504 1.106-1.2 1.106h-.75z" />
                </svg></span>
              <input type="text" v-model="id" id="numeroDocumento" class="form-control border-input"
              :class="{ 'is-invalid': v$.id.$error || backendErrors.id, 'is-valid': !v$.id.$invalid && !backendErrors.id && id }" placeholder="Número de Documento"
                @blur="v$.id.$touch()" />
              <div v-for="error in v$.id.$errors" :key="error.$uid" class="invalid-feedback">
                {{ error.$message }}
              </div>
              <div v-if="backendErrors.id" class="invalid-feedback">
                {{ backendErrors.id }}
              </div>
            </div>
          </div>
        </div>

        <!-- Nuevo campo: Contraseña -->
        <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label">Contraseña:</label>
          <div class="col-sm-10 has-validation">
            <div class="input-group mb-3">
              <span class="input-group-text border-input" id="basic-addon1"><i class="fa-solid fa-lock"></i></span>
              <input :type="passwordFieldType" v-model="password" class="form-control border-input"
                :class="{ 'is-invalid': v$.password.$error, 'is-valid': !v$.password.$invalid }"
                @blur="v$.password.$touch()" placeholder="Password" aria-label="Username"
                aria-describedby="basic-addon1" />
              <button class="btn btn-outline-secondary border-input" type="button" @click="togglePasswordVisibility">
                <i :class="passwordVisible ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'"></i>
              </button>
              <div v-for="error in v$.password.$errors" :key="error.$uid" class="invalid-feedback">
                {{ error.$message }}
              </div>
            </div>
          </div>
        </div>

        <!-- Nuevo campo: Rol -->
        <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label ">Rol:</label>
          <div class="col-sm-10">
            <div class="input-group mb-3">
              <span class="input-group-text border-input" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg"
                  width="16" height="16" fill="currentColor" class="bi bi-person-gear" viewBox="0 0 16 16">
                  <path
                    d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m.256 7a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1zm3.63-4.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.043c-.612-.18-.612-1.048 0-1.229l.149-.043a.64.64 0 0 0 .38-.921l-.074-.136c-.306-.561.309-1.175.87-.87l.136.075a.64.64 0 0 0 .92-.382l.045-.149zM8 12.5c.301 0 .578-.143.78-.381.173-.181.38-.3.599-.3s.426.119.599.3c.202.238.479.381.78.381.584 0 1.057-.473 1.057-1.057 0-.24-.085-.459-.228-.638-.142-.18-.336-.311-.56-.394 0 0-.736-.383-.628-.318-.176.033-.324.136-.496.243-.211.137-.392.346-.497.582-.065.13-.111.27-.147.419-.043-.074-.085-.152-.134-.232-.015-.003-.035-.008-.05-.008s-.036.005-.05.008c-.05.08-.09.158-.134.232-.036-.149-.082-.289-.147-.419-.105-.236-.286-.445-.497-.582-.172-.107-.32-.21-.496-.243-.108-.065-.148.145-.628.318-.225.083-.418.214-.56.394-.143.179-.228.398-.228.638 0 .584.473 1.057 1.057 1.057z" />
                </svg></span>
              <select id="rol" v-model="rolID" class="form-select border-input"
                :class="{ 'is-invalid': v$.rolID.$error, 'is-valid': !v$.rolID.$invalid }" @blur="v$.rolID.$touch()">
                <option value="" selected disabled>Seleccionar</option>
                <option value="1">Administrador</option>
                <option value="2">Lider de Proyecto</option>
                <option value="3">Miembro de Proyecto</option>
                <option value="4">Cliente/StakeHolder</option>
              </select>
              <div v-for="error in v$.rolID.$errors" :key="error.$uid" class="invalid-feedback">
                {{ error.$message }}
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
import api from '@/services/api';
import { useVuelidate } from '@vuelidate/core';
import { required, email, helpers } from '@vuelidate/validators';
import { maxLength } from 'vuelidate/lib/validators';
import { minLength } from 'vuelidate/lib/validators';

const phoneValidator = (value) =>
  !value || (value.length === 10 && /^\d+$/.test(value));
export default {
    setup() {
      return { v$: useVuelidate() };
    },
  mounted() {
    document.title = "Crear Usuario | TaskMaster Po";
  },
  data() {
    return {
      id: "",
      nombre: "",
      apellidos: "",
      email: "",
      telefono: "",
      password: "",
      rolID: "",
      tipo_documento: "",
      passwordVisible: false,
      backendErrors: {}
    };
  },
  validations() {
    return {
      email: {
        required: helpers.withMessage('El correo es obligatorio', required),
        email: helpers.withMessage('Ingrese un email valido', email),
      },
      password: {
        required: helpers.withMessage('La contraseña es obligatoria', required),
        minLength: helpers.withMessage('Minimo 8 caracteres', minLength(8)),
        maxLength: helpers.withMessage('Maximo 20 caracteres', maxLength(20)),
        strong: helpers.withMessage(
          'Debe contener mayusculas, minusculas y un caracter especial (#$*)',
          (value) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*[#$*]).{8,}$/.test(value)
        )
      },
      nombre: {
        required: helpers.withMessage('El nombre es obligatorio', required),
        minLength: helpers.withMessage('Minimo 3 caracteres', minLength(3)),
        strong: helpers.withMessage(
          'Debe contener solo letras',
          (value) => /^[A-Za-záéúíóñÑÁÉÚÍÓ\s]{3,}$/.test(value)
        )
      },
      apellidos: {
        required: helpers.withMessage('Los apellidos son obligatorios', required),
        minLength: helpers.withMessage('Minimo 3 caracteres', minLength(3)),
        strong: helpers.withMessage(
          'Debe contener solo letras',
          (value) => /^[A-Za-záéúíóñÑÁÉÚÍÓ\s]{3,}$/.test(value)
        )
      },
      telefono: {
        phone: helpers.withMessage(
          'El telefono debe tener 10 digitos numericos',
          phoneValidator
        )
      },
      tipo_documento: {
        required: helpers.withMessage('El tipo de documento es obligatorio', required)
      },
      id: {
        required: helpers.withMessage('El numero de documento es obligatorio', required),
        minLength: helpers.withMessage('Minimo 6 digitos', minLength(6)),
        maxLength: helpers.withMessage('Maximo 10 digitos', maxLength(10)),
        strong: helpers.withMessage(
          'Debe contener solo numeros',
          (value) => /^[0-9]{6,10}$/.test(value)
        )
      },
      rolID: {
        required: helpers.withMessage('El rol es obligatorio', required)
      }
    }
  },
  computed: {
    // Computed property para cambiar el tipo del input
    passwordFieldType() {
      return this.passwordVisible ? 'text' : 'password';
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    async handleSubmit() {
      const isValid = await this.v$.$validate();
      if (!isValid) return;
      // Desactiva validación automática del navegador y aplica validación manual con Bootstrap
      try {
        const response = await api.post("/user", {
          id: this.id,
          nombre: this.nombre,
          apellidos: this.apellidos,
          email: this.email,
          telefono: this.telefono,
          password: this.password,
          rolID: this.rolID,
          tipo_documento: this.tipo_documento
        });
        console.log(response.data);
        alert(response.data.message);
        this.$router.push("/administrar-usuarios");
      } catch (error) {
        if (error.response && error.response.data) {
          const serverErrors = error.response.data;
          if (serverErrors.message === 'Usuario no creado') {
            console.log(serverErrors.message);
            alert('Ingresa los parametros necesarios para realizar la creación');
          } else if (serverErrors.mensaje === 'Usuario no autenticado') {
            console.log(serverErrors.mensaje);
            alert(`${serverErrors.mensaje}, debes loguearte para acceder a las funciones de esta ruta.`);
            this.$router.push('/iniciar-sesion');
          } else if (serverErrors.mensaje === 'No tienes permisos para realizar esta acción.') {
            console.log(serverErrors.mensaje);
            this.$router.push('/error403');
          } else if (serverErrors.message === 'El correo electronico ingresado, ya se encuentra registrado en el sistema') {
            this.backendErrors.email = 'El correo electronico ingresado, ya se encuentra registrado en el sistema';
            this.v$.email.$reset();
          } else if(serverErrors.message === 'El numero de documento ingresado, ya se encuentra registrado en el sistema') {
            this.backendErrors.id = `${serverErrors.message}`;
            this.v$.id.$reset();
          } else {
            console.log(serverErrors);
            this.$router.push('/error500');
          }
        }
      }
    },
    togglePasswordVisibility() {
      // Cambia el estado de visibilidad de la contraseña
      this.passwordVisible = !this.passwordVisible;
    },
  },
};
</script>
<style scoped>
@import "@/../../assets/css/EditarPerfil.css";
</style>

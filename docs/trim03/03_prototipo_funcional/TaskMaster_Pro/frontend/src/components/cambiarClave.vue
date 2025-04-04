<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="text-center">
                    <h1 class="d-block mt-3">Modificar Contraseña</h1>
                </div>
                <form @submit.prevent="handleSubmit" ref="form"
                    class="mx-auto needs-validation custom-recuperarContraseña" novalidate>
                    <div class="mb-3">
                        <label for="password" class="form-label">Contraseña Actual*</label>
                        <div class="input-group mb-3 has-validation">
                            <span class="input-group-text"><i class="fa-solid fa-lock"></i></span>
                            <div class="form-floating">
                                <input v-model="password" :type="showPassword ? 'text' : 'password'"
                                    class="form-control border-input"
                                    :class="{ 'is-invalid': v$.password.$error, 'is-valid': !v$.password.$invalid }"
                                    id="password" placeholder="Nueva contraseña" @blur="v$.password.$touch()" />
                                <div v-for="error in v$.password.$errors" :key="error.$uid" class="invalid-feedback">
                                    {{ error.$message }}
                                </div>
                                <label for="password">Ingresa la contraseña actual</label>
                            </div>

                        </div>
                    </div>

                    <!-- Campo para Nueva Contraseña -->
                    <div class="mb-3">
                        <label for="password" class="form-label">Nueva Contraseña*</label>
                        <div class="input-group mb-3 has-validation">
                            <span class="input-group-text"><i class="fa-solid fa-lock"></i></span>
                            <div class="form-floating">
                                <input v-model="newPassword" :type="showPassword ? 'text' : 'password'"
                                    class="form-control border-input"
                                    :class="{ 'is-invalid': v$.newPassword.$error, 'is-valid': !v$.newPassword.$invalid }"
                                    id="password" placeholder="Nueva contraseña" @blur="v$.newPassword.$touch()" />
                                <div v-for="error in v$.newPassword.$errors" :key="error.$uid" class="invalid-feedback">
                                    {{ error.$message }}
                                </div>
                                <label for="password">Ingresa una nueva contraseña</label>
                            </div>

                        </div>
                    </div>

                    <!-- Campo para Repetir Contraseña -->
                    <div class="mb-3 mt-4">
                        <label for="confirmPassword" class="form-label">Repetir Contraseña*</label>
                        <div class="input-group mb-3 has-validation">
                            <span class="input-group-text"><i class="fa-solid fa-lock"></i></span>
                            <div class="form-floating">
                                <input v-model="confirmPassword" :type="showPassword ? 'text' : 'password'"
                                    class="form-control border-input"
                                    :class="{ 'is-invalid': v$.confirmPassword.$error || backendErrors.confirmPassword, 'is-valid': !v$.confirmPassword.$invalid && !backendErrors.confirmPassword && confirmPassword }"
                                    id="confirmPassword" placeholder="Repetir contraseña"
                                    @blur="v$.confirmPassword.$touch()" />
                                <div v-for="error in v$.confirmPassword.$errors" :key="error.$uid"
                                    class="invalid-feedback">
                                    {{ error.$message }}
                                </div>
                                <div v-if="backendErrors.confirmPassword" class="invalid-feedback">
                                    {{ backendErrors.confirmPassword }}
                                </div>
                                <label for="confirmPassword">Confirmar contraseña</label>
                            </div>

                        </div>
                    </div>
                    <div class="form-check form-switch ver-contraseña">
                        <input v-model="showPassword" class="form-check-input" type="checkbox" role="switch"
                            id="viewPassword" @change="togglePasswordVisibility" />
                        <label class="form-check-label" for="viewPassword">Ver Contraseña</label>
                    </div>


                    <!-- Botón de Enviar -->
                    <div class="d-grid gap-2 col-4 mx-auto">
                        <button class="btn btn-primary mt-3 buton-recuperar-contraseña" type="submit">Guardar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import api from '@/services/api';
import { useVuelidate } from '@vuelidate/core';
import { required, helpers } from '@vuelidate/validators';
import { minLength, maxLength } from 'vuelidate/lib/validators';
export default {
    setup() {
        return { v$: useVuelidate() };
    },
    mounted() {
        document.title = "Crear Clave | TaskMaster Pro";
    },
    data() {
        return {
            password: "",
            newPassword: "",
            confirmPassword: "",
            showPassword: false,
            backendErrors: {},
        };
    },
    validations() {
        return {
            password: {
                required: helpers.withMessage('La contraseña actual es obligatoria', required),
            },
            newPassword: {
                required: helpers.withMessage('Ingresa la nueva contraseña', required),
                minLength: helpers.withMessage('Minimo 8 caracteres', minLength(8)),
                maxLength: helpers.withMessage('Maximo 20 caracteres', maxLength(20)),
                strong: helpers.withMessage(
                    'Debe contener mayusculas, minusculas y un caracter especial (#$*)',
                    (value) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*[#$*]).{8,}$/.test(value)
                )
            },
            confirmPassword: {
                required: helpers.withMessage('Confirma tu contraseña', required),
            }
        }
    },
    methods: {
        async handleSubmit() {
            const isValid = await this.v$.$validate();
            if (!isValid) {
                return;
            }
            else if (this.newPassword === this.confirmPassword) {
                try {
                    const response = await api.put('/editProfile', {
                        password: this.password,
                        newPassword: this.newPassword
                    });
                    console.log(response.data);
                    alert(response.data.message);
                    this.$router.push('/perfil-completo');
                } catch (error) {
                    if (error.response && error.response.data) {
                        const serverErrors = error.response.data;
                        if (serverErrors.message === 'Contraseña no actualizada') {
                            console.log(serverErrors);
                            alert(`${serverErrors.message}, ingresa los parametros necesarios para realizar esta acción`);
                        } else if (serverErrors.message === 'Password Error') {
                            console.log(serverErrors);
                            alert(`Tu contraseña actual no coincide con la ingresada`);
                        } else if (serverErrors.message === 'Unregistered user') {
                            console.log(serverErrors);
                            alert(`${serverErrors.message}, el usuario que intentas actualizar no se encuentra en la base de datos.`);
                        } else if (serverErrors.mensaje === 'Usuario no autenticado') {
                            console.log(serverErrors);
                            alert(`${serverErrors.mensaje}, debes loguearte para editar tu perfil.`);
                            this.$router.push('/iniciar-sesion');
                        }
                    }
                }
            } else {
                this.backendErrors.confirmPassword = 'Contraseñas no coinciden';
                this.v$.confirmPassword.$reset();
            }
        },
        togglePassword(field) {
            if (field === 1) {
                this.showPassword = !this.showPassword;
            } else if (field === 2) {
                this.showConfirmPassword = !this.showConfirmPassword;
            }
        }
    }
};
</script>
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
                                    class="form-control border-input" minlength="8" id="password" placeholder="Nueva contraseña"
                                    required />
                                <div class="invalid-feedback">
                                    Por favor ingrese la contraseña actual.
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
                                    class="form-control border-input" :class="{ 'is-invalid': errors.newPassword }"
                                    id="password" placeholder="Nueva contraseña" minlength="8" maxlength="20" required />
                                <div class="invalid-feedback">
                                    {{ errors.newPassword || "Por favor ingrese la nueva contraseña." }}
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
                                    class="form-control border-input" :class="{ 'is-invalid': errors.confirmPassword }" id="confirmPassword"
                                    placeholder="Repetir contraseña" minlength="8" maxlength="20" required />
                                    <div class="invalid-feedback">
                                    {{ errors.confirmPassword || "Por favor confirme su nueva contraseña." }}
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
export default {
    mounted() {
        document.title = "Crear Clave | TaskMaster Pro";
    },
    data() {
        return {
            password: "",
            newPassword: "",
            confirmPassword: "",
            showPassword: false,
            errors: {},
        };
    },
    methods: {
        async handleSubmit() {
            const form = this.$refs.form;
            if (!form.checkValidity()) {
                form.classList.add('was-validated');
                return;
            } else if (this.newPassword === this.confirmPassword) {
                this.errors = {};
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
                this.errors.newPassword = 'Contraseñas no coinciden';
                this.errors.confirmPassword = 'Contraseñas no coinciden';
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
const nombres = document.getElementById('nombre');
const apellidos = document.getElementById('apellido');
const num_documento = document.getElementById('num_documento');
const fecha_nacimiento = document.getElementById('fecha');
const tipo_documento = document.getElementById('tipo_documento');
const edad = document.getElementById('edad');
const telefono = document.getElementById('num_telefono');
const genero = document.getElementById('genero');
const habilidades = document.getElementsByName('status');
const hobbies = document.getElementsByName('flexRadioDefault');
const correo = document.getElementById('correo');
const contraseña = document.getElementById('contraseña');
const enviar = document.getElementById('enviar');
const limpiar = document.getElementById('limpiar');
const form = document.getElementById('formulario');

class validacion {
    constructor(nombres, apellidos, tipo_documento, num_documento, fecha_nacimiento, genero, edad, color_favorito, telefono, habilidades, hobbies, correo, contraseña) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.tipo_documento = tipo_documento;
        this.num_documento = num_documento;
        this.fecha_nacimiento = fecha_nacimiento;
        this.genero = genero;
        this.edad = edad;
        this.color_favorito = color_favorito;
        this.telefono = telefono;
        this.habilidades = habilidades;
        this.hobbies = hobbies;
        this.correo = correo;
        this.contraseña = contraseña;
    }
    validarNombres() {
        const expNombre = /^[A-Za-záéúíóñÑÁÉÚÍÓ\s]{3,}$/;
        const validarNombre = expNombre.exec(nombres.value);

        if (validarNombre) {
            alert('Nombre Validado Exitosamente');
            nombres.classList.remove('is-invalid');
            nombres.classList.add('is-valid');
            return true;
        } else {
            alert('Nombre Invalido (por favor ingresar solo letras y minimo 3 caracteres)');
            nombres.classList.remove('is-valid');
            nombres.classList.add('is-invalid');
            return false;
        }
    }
    validarApellidos() {
        const expApellido = /^[A-Za-záéúíóñÑÁÉÚÍÓ\s]{3,}$/;
        const validarApellidos = expApellido.exec(apellidos.value);

        if (validarApellidos) {
            alert('Apellido Validado Exitosamente');
            apellidos.classList.remove('is-invalid');
            apellidos.classList.add('is-valid');
            return true;
        } else {
            alert('Apellido Invalido (por favor ingresar solo letras y minimo 3 caracteres)');
            apellidos.classList.remove('is-valid');
            apellidos.classList.add('is-invalid');
            return false;
        }
    }
    validarDocumento() {
        const expDocumento = /^[0-9]{10,}$/;
        const validarDocumento = expDocumento.exec(num_documento.value);

        if (validarDocumento) {
            alert('Numero de Documento Validado Exitosamente');
            num_documento.classList.remove('is-invalid');
            num_documento.classList.add('is-valid');
            return true;
        } else {
            alert('Numero de Documento Invalido (por favor ingresar solo numeros y minimo 10 caracteres)');
            num_documento.classList.remove('is-valid');
            num_documento.classList.add('is-invalid');  
            return false;
        }
    }
    validarEdad() {
        if (edad.value < 17) {
            tipo_documento.disabled = true;
            tipo_documento.value = 0;
            alert('Edad Invalida (Debes ser mayor de edad)');
            edad.classList.remove('is-valid');
            edad.classList.add('is-invalid');
            tipo_documento.classList.remove('is-valid');
            tipo_documento.classList.add('is-invalid');
            return false;

        } else {
            alert('Edad Validada Exitosamente');
            tipo_documento.disabled = false;
            tipo_documento.remove(1);
            edad.classList.remove('is-invalid');
            edad.classList.add('is-valid');
            tipo_documento.classList.remove('is-invalid');
            tipo_documento.classList.add('is-valid');
            return true;

        }
    }

    validarGenero(){
        if(genero.value <= 0){
            alert('Genero Invalido (por favor seleccionar un genero)');
            genero.classList.remove('is-valid');
            genero.classList.add('is-invalid');
            return false;
        }else{
            alert('Genero Validado Exitosamente')
            genero.classList.remove('is-invalid');
            genero.classList.add('is-valid');
            return true;
        }
    }


    validarTelefono() {
        const expTelefono = /^[0-9]{10,}$/;
        const validarTelefono = expTelefono.exec(telefono.value);

        if (validarTelefono) {
            alert('Numero de Telefono Validado Exitosamente');
            telefono.classList.remove('is-invalid');
            telefono.classList.add('is.valid');
            return true;
        } else {
            alert('Numero de Telefono Invalido (Por favor ingresar solo numeros y minimo 10 digitos)');
            telefono.classList.remove('is-valid');
            telefono.classList.add('is-invalid');
            return false;
        }
    }

    validarHabilidades() {
        var contador = 0;
        for (var i = 0; i < habilidades.length; i++) {
        if (habilidades[i].checked)
        contador++
        }
        if (contador == 0) {
        alert('Debes eleccionar minimo una habilidad');
        
        return false;
        }else{
            alert('Habilidades Validadas Exitosamente')
          
            return true;
        }
    }

    validarHobbies(){
        var contador = 0;
        for (var i = 0; i < hobbies.length; i++) {
        if (hobbies[i].checked)
        contador++
        }
        if (contador == 0) {
        alert('Debes eleccionar minimo un hobbie')
        return false;
        }else{
            alert('Hobbies Validadas Exitosamente');
            return true;
            
        }
    }

    validarCorreo() {
        const expCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const validarCorreo = expCorreo.exec(correo.value);

        if (validarCorreo) {
            alert('Correo Validado Exitosamente');
            correo.classList.remove('is-invalid');
            correo.classList.add('is-valid');
            return true;
        } else {
            alert('Correo Invalido (Por favor ingresar el correo en el siguiente formato [xxxx@xxx.xxx]');
            correo.classList.remove('is-valid');
            correo.classList.add('is-invalid');
            return false;
        }

    }

    validarContraseña() {
        const expContraseña = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[#\$*]).{8,}$/;
        const validarContraseña = expContraseña.exec(contraseña.value);

        if (validarContraseña) {
            alert('Contraseña Validada Exitosamente');
            contraseña.classList.remove('is-invalid');
            contraseña.classList.add('is-valid');
            return true;
        } else {
            alert('Contraseña Invalida, asegurate de que cumpla los requisitos minimos (tener minimo 8 caracteres, una letra mayuscula, una letra minuscula y un caracter especial (#,$,*).)');
            contraseña.classList.remove('is-valid');
            contraseña.classList.add('is-invalid');
            return false;
        }
    }
}
fecha_nacimiento.addEventListener('change', () => {
    var hoy = new Date();
    var cumpleanos = new Date(fecha_nacimiento.value);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    const inputEdad = document.getElementById('edad');
    const num_edad = document.getElementById('num_edad');
    inputEdad.value = edad;
    num_edad.textContent = edad;

})
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const datos = new validacion(nombres, apellidos, num_documento, edad, genero, telefono, habilidades, hobbies, correo, contraseña);
    const validaciones = [
        datos.validarNombres(),
        datos.validarApellidos(),
        datos.validarDocumento(),
        datos.validarEdad(),
        datos.validarGenero(),
        datos.validarTelefono(),
        datos.validarHabilidades(),
        datos.validarHobbies(),
        datos.validarCorreo(),
        datos.validarContraseña()
    ]

    const fullCheck = validaciones.every(validado => validado === true);

    if (fullCheck) {
        alert('Todos los campos han sido validados exitosamente');
        form.submit();
    } else {
        alert('Diligencia todos los campos con los requerimientos especificados');
    }
});

limpiar.addEventListener('click', () => {
    window.onload;
})




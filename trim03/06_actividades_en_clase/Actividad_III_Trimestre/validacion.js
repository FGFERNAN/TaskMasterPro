const nombres = document.getElementById('nombre');
const apellidos = document.getElementById('apellido');
const num_documento = document.getElementById('num_documento');
const fecha_nacimiento = document.getElementById('fecha');
const tipo_documento = document.getElementById('tipo_documento');
const tarjeta_identidad = document.getElementById('TI');
const edad = document.getElementById('edad');
const telefono = document.getElementById('num_telefono');
const genero = document.getElementById('genero');
const habilidades = document.getElementsByName('status');
const hobbies = document.getElementsByName('flexRadioDefault');
const num_edad = document.getElementById('num_edad');
const correo = document.getElementById('correo');
const contraseña = document.getElementById('contraseña');
const enviar = document.getElementById('enviar');
const limpiar = document.getElementById('limpiar');
const form = document.getElementById('formulario');

let objResult = new Object();
let validate = false;
let textResult = "";

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
            textResult = 'Nombre Validado Exitosamente'
            nombres.classList.remove('is-invalid');
            nombres.classList.add('is-valid');
            objResult.validate = true;
            objResult.textResult = "Ok Data: " + textResult;
            validate = true;
        } else {
            textResult = 'Nombre Invalido (por favor ingresar solo letras y minimo 3 caracteres)';
            nombres.classList.remove('is-valid');
            nombres.classList.add('is-invalid');
            objResult.validate = false;
            objResult.textResult = "Error: " + textResult;
            validate = false;
        }
        alert(JSON.stringify(objResult.textResult));
        return validate;
    }
    validarApellidos() {
        const expApellido = /^[A-Za-záéúíóñÑÁÉÚÍÓ\s]{3,}$/;
        const validarApellidos = expApellido.exec(apellidos.value);

        if (validarApellidos) {
            textResult = 'Apellido Validado Exitosamente';
            apellidos.classList.remove('is-invalid');
            apellidos.classList.add('is-valid');
            objResult.validate = true;
            objResult.textResult = "Ok Data: " + textResult;
            validate = true;
            
        } else {
            textResult = 'Apellido Invalido (por favor ingresar solo letras y minimo 3 caracteres)';
            apellidos.classList.remove('is-valid');
            apellidos.classList.add('is-invalid');
            objResult.validate = false;
            objResult.textResult = "Error: " + textResult;
            validate = false;
            
            
        }
        alert(JSON.stringify(objResult.textResult));
        return validate;
    }

    validarTipoDocumento(){
        if(tipo_documento.value <= 1 ){
            textResult = 'Tipo de Documento Invalido (No puedes seleccionar tarjeta de identidad)';
            tipo_documento.classList.remove('is-valid');
            tipo_documento.classList.add('is-invalid');
            objResult.validate = false;
            objResult.textResult = "Error: " + textResult;
            validate = false;
        }else{
            textResult = 'Tipo de Documento Validado Exitosamente';
            tipo_documento.classList.remove('is-invalid');
            tipo_documento.classList.add('is-valid');
            objResult.validate = true;
            objResult.textResult = "Ok Data: " + textResult;
            validate = true;
        }
        alert(JSON.stringify(objResult.textResult));
        return validate;
    }
    validarDocumento() {
        const expDocumento = /^[0-9]{10,}$/;
        const validarDocumento = expDocumento.exec(num_documento.value);

        if (validarDocumento) {
            textResult = 'Numero de Documento Validado Exitosamente';
            num_documento.classList.remove('is-invalid');
            num_documento.classList.add('is-valid');
            objResult.validate = true;
            objResult.textResult = "Ok Data: " + textResult;
            validate = true;
        } else {
            textResult = 'Numero de Documento Invalido (por favor ingresar solo numeros y minimo 10 caracteres)';
            num_documento.classList.remove('is-valid');
            num_documento.classList.add('is-invalid'); 
            objResult.validate = false;
            objResult.textResult = "Error: " + textResult; 
            validate = false;
        }
        alert(JSON.stringify(objResult.textResult));
        return validate;
    }
    validarEdad() {
        if (edad.value < 17) {
            tipo_documento.disabled = true;
            tipo_documento.value = 0;
            textResult = 'Edad Invalida (Debes ser mayor de edad)';
            edad.classList.remove('is-valid');
            edad.classList.add('is-invalid');
            tipo_documento.classList.remove('is-valid');
            tipo_documento.classList.add('is-invalid');
            fecha_nacimiento.classList.remove('is-valid');
            fecha_nacimiento.classList.add('is-invalid');
            objResult.validate = false;
            objResult.textResult = "Error: " + textResult;
            validate = false;

        } else {
            textResult = 'Edad Validada Exitosamente';
            tipo_documento.disabled = false;
            tarjeta_identidad.remove();
            edad.classList.remove('is-invalid');
            edad.classList.add('is-valid');
            fecha_nacimiento.classList.remove('is-invalid');
            fecha_nacimiento.classList.add('is-valid');
            objResult.validate = true;
            objResult.textResult = "Ok Data: " + textResult;
            validate = true;
        }
        alert(JSON.stringify(objResult.textResult));
        return validate;
    }

    validarGenero(){
        if(genero.value <= 0){
            textResult = 'Genero Invalido (por favor seleccionar un genero)';
            genero.classList.remove('is-valid');
            genero.classList.add('is-invalid');
            objResult.validate = false;
            objResult.textResult = "Error: " + textResult;
            validate = false;
        }else{
            textResult = 'Genero Validado Exitosamente'
            genero.classList.remove('is-invalid');
            genero.classList.add('is-valid');
            objResult.validate = true;
            objResult.textResult = "Ok Data: " + textResult;
            validate = true;
        }
        alert(JSON.stringify(objResult.textResult));
        return validate;
    }


    validarTelefono() {
        const expTelefono = /^[0-9]{10,}$/;
        const validarTelefono = expTelefono.exec(telefono.value);

        if (validarTelefono) {
            textResult = 'Numero de Telefono Validado Exitosamente';
            telefono.classList.remove('is-invalid');
            telefono.classList.add('is-valid');
            objResult.validate = true;
            objResult.textResult = "Ok Data: " + textResult;
            validate = true;
        } else {
            textResult = 'Numero de Telefono Invalido (Por favor ingresar solo numeros y minimo 10 digitos)';
            telefono.classList.remove('is-valid');
            telefono.classList.add('is-invalid');
            objResult.validate = false;
            objResult.textResult = "Error: " + textResult;
            validate =  false;
        }
        alert(JSON.stringify(objResult.textResult));
        return validate;
    }

    validarHabilidades() {
        var contador = 0;
        for (var i = 0; i < habilidades.length; i++) {
        if (habilidades[i].checked)
            contador++
        }
        if (contador == 0) {
            textResult = 'Debes seleccionar minimo una habilidad';
            objResult.validate = false;
            objResult.textResult = "Error: " + textResult;
            validate =  false;
        }else{
            textResult = 'Habilidades Validadas Exitosamente';
            objResult.validate = true;
            objResult.textResult = "Ok Data: " + textResult;
            validate = true;
        }
        alert(JSON.stringify(objResult.textResult));
        return validate;
    }

    validarHobbies(){
        var contador = 0;
        for (var i = 0; i < hobbies.length; i++) {
        if (hobbies[i].checked)
            contador++
        }
        if (contador == 0) {
            textResult = 'Debes seleccionar minimo un hobbie';
            objResult.validate = false;
            objResult.textResult = "Error: " + textResult;
            validate = false;
        }else{
            textResult = 'Hobbies Validados Exitosamente';
            objResult.validate = true;
            objResult.textResult = "Ok Data: " + textResult;
            validate = true;
        }
        alert(JSON.stringify(objResult.textResult));
        return validate;
    }

    validarCorreo() {
        const expCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const validarCorreo = expCorreo.exec(correo.value);

        if (validarCorreo) {
            textResult = 'Correo Validado Exitosamente';
            correo.classList.remove('is-invalid');
            correo.classList.add('is-valid');
            objResult.validate = true;
            objResult.textResult = "Ok Data: " + textResult;
            validate = true;
        } else {
            textResult = 'Correo Invalido (Por favor ingresar el correo en el siguiente formato [xxxx@xxx.xxx]';
            correo.classList.remove('is-valid');
            correo.classList.add('is-invalid');
            objResult.validate = false;
            objResult.textResult = "Error: " + textResult;
            validate = false;
        }
        alert(JSON.stringify(objResult.textResult));
        return validate;
    }

    validarContraseña() {
        const expContraseña = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[#\$*]).{8,}$/;
        const validarContraseña = expContraseña.exec(contraseña.value);

        if (validarContraseña) {
            textResult = 'Contraseña Validada Exitosamente';
            contraseña.classList.remove('is-invalid');
            contraseña.classList.add('is-valid');
            objResult.validate = true;
            objResult.textResult = "Ok Data: " + textResult;
            validate = true;
        } else {
            textResult = 'Contraseña Invalida, asegurate de que cumpla los requisitos minimos (tener minimo 8 caracteres, una letra mayuscula, una letra minuscula y un caracter especial (#,$,*).)';
            contraseña.classList.remove('is-valid');
            contraseña.classList.add('is-invalid');
            objResult.validate = false;
            objResult.textResult = "Error: " + textResult;
            validate = false;
        }
        alert(JSON.stringify(objResult.textResult));
        return validate;
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
    inputEdad.value = edad;
    num_edad.textContent = edad;

})
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const datos = new validacion(nombres, apellidos, tipo_documento, num_documento, edad, genero, telefono, habilidades, hobbies, correo, contraseña);
    const validaciones = [
        datos.validarNombres(),
        datos.validarApellidos(),
        datos.validarTipoDocumento(),
        datos.validarDocumento(),
        datos.validarEdad(),
        datos.validarGenero(),
        datos.validarTelefono(),
        datos.validarHabilidades(),
        datos.validarHobbies(),
        datos.validarCorreo(),
        datos.validarContraseña()
    ]

    const fullCheck = validaciones.every(valid => valid === true);

    if (fullCheck) {
        alert('Todos los campos han sido validados exitosamente');
        form.submit();
    } else {
        alert('Diligencia todos los campos con los requerimientos especificados');
    }
});

limpiar.addEventListener('click', () => {
    form.reset();
    nombres.classList.remove('is-invalid');
    apellidos.classList.remove('is-invalid');
    tipo_documento.classList.remove('is-invalid');
    tipo_documento.disabled = false;
    num_documento.classList.remove('is-invalid');
    fecha_nacimiento.classList.remove('is-invalid');
    genero.classList.remove('is-invalid');
    telefono.classList.remove('is-invalid');
    correo.classList.remove('is-invalid');
    contraseña.classList.remove('is-invalid');
    num_edad.textContent = 0;
})



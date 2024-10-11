//Extracción de inputs del formulario por medio del ID o el atributo name
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

//Variables globales para mensajes de retorno en formato JSON
let objResult = new Object();
let validate = false;
let textResult = "";

//Creacion de la clase con su respectivo contructor para posteriormente realizar un proceso de instaciación
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
    //Metodo para validar el el campo nombres del formulario
    validarNombres() {

        //Expresion regular: Letras mayusculas y minusculas, utilizando tildes y espacios para nombres compuestos, minimo 3 caracteres
        const expNombre = /^[A-Za-záéúíóñÑÁÉÚÍÓ\s]{3,}$/;

        //Ejecución de la expresion regular en el valor del input nombre
        const validarNombre = expNombre.exec(nombres.value);

        //Condicional  para validar que sucede si se cumple o no la expresion regular
        if (validarNombre) {

            //Mensaje que se ingresa al objeto que se convertira en cadena de texto JSON
            textResult = 'Nombre Validado Exitosamente'

            //Implementación de estilos a los input con clases de Boostrap
            nombres.classList.remove('is-invalid');
            nombres.classList.add('is-valid');
            objResult.validate = true;
            objResult.textResult = "Ok Data: " + textResult;

            //Si la validación es exitosa retornara true
            validate = true;
        } else {
            textResult = 'Nombre Invalido (por favor ingresar solo letras y minimo 3 caracteres)';
            nombres.classList.remove('is-valid');
            nombres.classList.add('is-invalid');
            objResult.validate = false;
            objResult.textResult = "Error: " + textResult;
            validate = false;
        }
        //Alerta donde se convierte en cadena de texto el objeto, se toma como propiedad el textResult del objeto para una alerta más limpia
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

    //Metodo de validación de tipo de documento
    validarTipoDocumento(){

        //Se realiza condicional tomando el valor de la opciones del select tipo de documento, especificamente la opcion 1 que se establecio
        //en el HTML como Tarjeta de Identidad
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

    //Metodo de validación de numero de documento
    validarDocumento() {

        //Expresion regular del número de documento, solo numeros y minimo 10 digitos
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

    //Metodo para validar edad
    validarEdad() {

        //Condicional para validar si la edad ingresasa es menor a 17 el tipo de documento tomara la propiedad disabled
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

            //Si la validacion se cumple se quita la propiedad disabled del tipo de documento y se elimina el option Tarjeta de Identidad
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

    //Metodo validación de genero
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

    //Metodo validacion de número de telefono
    validarTelefono() {

        //Expresion regular de validacion del telefono, solo números y minimo 10 digitos
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

    //Metodo para validación de habilidades
    validarHabilidades() {

        //Ciclo para recorrer todos lo input tipo checkbox del formulario y contar cuantos estan chequeados
        var contador = 0;
        for (var i = 0; i < habilidades.length; i++) {
        if (habilidades[i].checked)
            contador++
        }

        //Condicional para validación de que minimo un checkbox este seleccionado
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

    //Metodo oara validación de Hobbies
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

    //Metodo para validación de correo
    validarCorreo() {

        //Expresión regular para validar correo, mayusculas, minusculas, numeros, alunos caracteres especiales, obligatorio el @ y el . y luego del . entre 2 y 4 caracteres
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

        //Metodo para validación de contraseña
    validarContraseña() {

        //Expresion regular para validación de contraseña, minimo una mayuscula, una minuscula y un caracter especial entre (#,$,*), una longitud minima de 8 caracteres
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
//Algoritmo para calcular la edad segun la fecha de nacimiento ingresada
fecha_nacimiento.addEventListener('change', () => {
    var hoy = new Date();
    var cumpleanos = new Date(fecha_nacimiento.value);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    const inputEdad = document.getElementById('edad');

    //Se cambia el valor de forma dinamica del input tipo rango
    inputEdad.value = edad;

    //Se modifica el numero en el cual se visualiza el valor exacto del rango
    num_edad.textContent = edad;

})

//Manejo de envio de datos
form.addEventListener("submit", (event) => {

    //Se previene el envio del formulario
    event.preventDefault();

    //Se instancia la clase validacion por medio de su constructor
    const datos = new validacion(nombres, apellidos, tipo_documento, num_documento, edad, genero, telefono, habilidades, hobbies, correo, contraseña);

    //Se almacenas las validaciones en un arreglo
    const validaciones = [

        //Se ejecutan los metodos de la clase
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

    //Se crea una variable para guardar si todas las validaciones del formulario retornaron true
    const fullCheck = validaciones.every(valid => valid === true);

    //Condicional para validar si todo retorno true en las validaciones enviar el formulario 
    if (fullCheck) {
        alert('Todos los campos han sido validados exitosamente');
        form.submit();
    } else {
        alert('Diligencia todos los campos con los requerimientos especificados');
    }
});

//Escuchador del boton limpiar del formulario
limpiar.addEventListener('click', () => {

    //Se resetan todos los datos del formulario
    form.reset();

    //Se eliminan todas las clases personalizadas de boostrap para evitar que despues de limpiar se mantenga en rojo el borde de los input
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

    //Se limpia el contenido del número que calcula el valor del input tipo rango
    num_edad.textContent = 0;
})




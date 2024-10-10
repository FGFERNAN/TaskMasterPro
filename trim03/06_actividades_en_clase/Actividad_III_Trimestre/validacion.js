const nombres = document.getElementById('nombre');
const apellidos = document.getElementById('apellido');
const num_documento = document.getElementById('num_documento');
const fecha_nacimiento = document.getElementById('fecha');
const tipo_documento =  document.getElementById('tipo_documento');
const edad = document.getElementById('edad');
const telefono = document.getElementById('num_telefono');
const correo = document.getElementById('correo');
const contraseña = document.getElementById('contraseña');
const enviar = document.getElementById('enviar');

class validacion{
    constructor (nombres, apellidos, tipo_documento, num_documento, fecha_nacimiento, genero, edad, color_favorito, telefono, habilidades, hobbies, correo, contraseña){
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
    validarNombres(){
        const expNombre = /^[A-Za-záéúíóñÑÁÉÚÍÓ\s]{3,}$/;
        const validarNombre = expNombre.exec(nombres.value);

        if(validarNombre){
            alert('Nombre Validado Exitosamente');
        }else{
            alert('Nombre Invalido (por favor ingresar solo letras y minimo 3 caracteres)');
        }
    }
    validarApellidos(){
        const expApellido = /^[A-Za-záéúíóñÑÁÉÚÍÓ\s]{3,}$/;
        const validarApellidos = expApellido.exec(apellidos.value);

        if(validarApellidos){
            alert('Apellido Validado Exitosamente');
        }else{
            alert('Apellido Invalido (por favor ingresar solo letras y minimo 3 caracteres)');
        }
    }
    validarDocumento(){
        const expDocumento = /^[0-9]{10,}$/;
        const validarDocumento = expDocumento.exec(num_documento.value);

        if(validarDocumento){
            alert('Numero de Documento Validado Exitosamente')
        }else{
            alert('Numero de Documento Invalido (por favor ingresar solo numeros y minimo 10 caracteres)');
        }
    }
    validarTipoDocumento(){
        if(tipo_documento.value = 0){
            alert('selecciona un documento')
        }
    }
    validarEdad(){
        if(edad.value < 17){
            tipo_documento.disabled = true;
            tipo_documento.value = 0;
            alert('Edad Invalidada (Debes ser mayor de edad)');
        }else{
            alert('Edad Validada Exitosamente');
            tipo_documento.disabled = false;
            tipo_documento.remove(1);
        }
    }

    validarTelefono(){
        const expTelefono = /^[0-9]{10,}$/;
        const validarTelefono = expTelefono.exec(telefono.value);

        if(validarTelefono){
            alert('Numero de Telefono Validado Exitosamente');
        }else{
            alert('Numero de Telefono Invalido (Por favor ingresar solo numeros y minimo 10 digitos)')
        }
    }

    validarCorreo(){
        const expCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const validarCorreo = expCorreo.exec(correo.value);
        
        if(validarCorreo){
            alert('Correo Validado Exitosamente');
        }else{
            alert('Correo Invalido (Por favor ingresar el correo en el siguiente formato [xxxx@xxx.xxx]')
        }

    }

    validarContraseña(){
        const expContraseña = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[#\$*]).{8,}$/;
        const validarContraseña = expContraseña.exec(contraseña.value);

        if(validarContraseña){
            alert('Contraseña Validada Exitosamente');
        }else{
            alert('Contraseña Invalida, asegurate de que cumpla los requisitos minimos (tener minimo 8 caracteres, una letra mayuscula, una letra minuscula y un caracter especial (#,$,*).)');
        }
    }
}
fecha_nacimiento.addEventListener('change', () =>{
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
enviar.addEventListener("click", (event) => {
    event.preventDefault();
    const datos = new validacion(nombres,apellidos,num_documento, edad, telefono, correo, contraseña);
    datos.validarNombres();
    datos.validarApellidos();
    datos.validarDocumento();
    datos.validarEdad();
    datos.validarTelefono();
    datos.validarCorreo();
    datos.validarContraseña();
})




#language:es
  #author:JohanGarcia

Característica: Creacion de usuario en la pagina de TaskMaster Pro
  Como usuario de TaskMaster Pro
  Quiero poder crear un nuevo usuario
  Para agregar nuevos miembros al equipo de trabajo

  @CrearUsuario

  Esquema del escenario: Crear Usuario Exitosamente
    Dado que el usuario ha iniciado sesion y tiene permisos de administrador o lider de proyecto
    Y existen roles creados en el sistema para asignar al nuevo usuario
    Y ha dado click en el boton de crear usuario
    Cuando ingrese todos los campos del formulario de creacion de usuario
    Y hace click en el boton guardar
      | nombre   | apellidos   | correo electronico   | numero celular   | tipo documento   | numero documento   | contraseña   | rol   |
      | <nombre> | <apellidos> | <correo electronico> | <numero celular> | <tipo documento> | <numero documento> | <contraseña> | <rol> |
    Entonces el sistema debe mostrar un mensaje de usuario creado con exito
    Y redirige a la interfaz de administrar-usuarios

    Ejemplos:
      | nombre | apellidos | correo electronico | numero celular | tipo documento | numero documento | contraseña | rol           |
      | Johan  | Garcia    | felipe@gmail.com   | 3107847573     | Cedula         | 1030533364       | Fg1234*    | administrador |
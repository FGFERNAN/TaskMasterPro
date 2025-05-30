#language:es
  #author:JohanGarcia

Característica: Recuperación de contraseña en la pagina de TaskMaster Pro
  Como usuario de TaskMaster Pro
  Quiero poder recuperar mi contraseña
  Para acceder nuevamente al software de gestion de proyectos


  @RecuperarContraseña

  Esquema del escenario: Recuperar Contraseña Exitosamente
    Dado que el usuario se encuentra en la pagina de inicio de sesion
    Cuando seleccione la opcion de recuperar contraseña y ingrese su correo electronico y de click en el boton de recuperar contraseña
      | email   |
      | <email> |
    Entonces el sistema debe mostrar un mensaje de confirmacion y debe llegar un email de recuperación al correo ingresado

    Ejemplos:
      | email                  |
      | fgfernan2508@gmail.com |
#language:es
  #author:JohanGarcia

Característica: Autenticacion en la pagina de TaskMaster Pro
  Como usuario de TaskMaster Pro
  Quiero iniciar sesion en el sistema
  Para poder acceder a todas las funcionalidades del sistema.

  @autenticacion

  Escenario: Inicio de Sesion Valido
    Dado que el usuario se encuentra en la pagina de inicio de sesion de TaskMaster Pro
    Cuando ingrese las credenciales correctas (usuario y contraseña)
      | email                | password     |
      | nikole@gmail.com     | Nikole1234*  |
    Entonces se debe verificar que el usuario haya sido autenticado correctamente y redirigido a la interfaz principal del sistema
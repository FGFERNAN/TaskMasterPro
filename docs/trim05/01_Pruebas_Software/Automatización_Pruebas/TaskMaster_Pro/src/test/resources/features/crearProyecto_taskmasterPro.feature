#language:es
  #author:JohanGarcia

Característica: Creacion de proyecto en la pagina de TaskMaster Pro
  Como usuario de TaskMaster Pro
  Quiero poder crear un nuevo proyecto
  Para organizar y gestionar las tareas y recursos necesarios para alcanzar los objetivos del proyecto.

  Antecedentes:
    Dado que el usuario se encuentra en la pagina de inicio de sesion de TaskMaster Pro
    Cuando ingrese las credenciales correctas (usuario y contraseña)
      | email                  | password       |
      | fgfernan2508@gmail.com | enriqueGR2508* |

  @CrearProyecto

  Esquema del escenario: Crear Proyecto Exitosamente
    Cuando da click en el boton de crear proyecto y ingrese todos los campos del formulario de creacion y hace click en el boton Guardar
      | nombre   | descripcion   | fechaInicio   | fechaFin |
      | <nombre> | <descripcion> | <fechaInicio> | <fechaFin> |
    Entonces el sistema debe registrar correctamente el nuevo proyecto

    Ejemplos:
      | nombre         | descripcion                                                          | fechaInicio | fechaFin |
      | Automatizacion | Vamos a automatizar procesos clave para la validacion de un software | 30052025    | 31052025 |
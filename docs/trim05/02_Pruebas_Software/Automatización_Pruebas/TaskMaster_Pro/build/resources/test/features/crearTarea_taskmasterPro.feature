#language:es
  #author:JohanGarcia

Característica: Creacion de tarea en la pagina de TaskMaster Pro
  Como usuario de TaskMaster Pro
  Quiero poder crear una nueva tarea
  Para desglosar el trabajo en partes manejables y asignarlas a los miembros del equipo.

  Antecedentes:
    Dado que el usuario se encuentra en la pagina de inicio de sesion de TaskMaster Pro
    Cuando ingrese las credenciales correctas (usuario y contraseña)
      | email                  | password       |
      | fgfernan2508@gmail.com | enriqueGR2508* |

  @CrearTarea

  Esquema del escenario: Crear Tarea Exitosamente
    Cuando selecciona la opción de crear una nueva tarea
      | nombre   | descripcion   | fechaInicio   | fechaFin   | estado   | prioridad   |
      | <nombre> | <descripcion> | <fechaInicio> | <fechaFin> | <estado> | <prioridad> |
    Entonces el sistema debe mostrar un mensaje de confirmacion registrar correctamente la nueva tarea

    Ejemplos:
      | nombre          | descripcion                 | fechaInicio | fechaFin | estado   | prioridad |
      | Tarea de Prueba | Esta es una tarea de prueba | 30052025    | 31052025 | En Curso | Media     |
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
    Cuando selecciona la opción de crear un nuevo proyecto
      | nombre   | descripcion   | fechaInicio   | fechaFin   | estado   | prioridad   |
      | <nombre> | <descripcion> | <fechaInicio> | <fechaFin> | <estado> | <prioridad> |
    Entonces el sistema debe registrar correctamente el nuevo proyecto

    Ejemplos:
      | nombre   | descripcion            | fechaInicio | fechaFin | estado      | prioridad |
      | Proyecto | Este es un proyecto de | 30052025    | 31052025 | En Progreso | Media     |
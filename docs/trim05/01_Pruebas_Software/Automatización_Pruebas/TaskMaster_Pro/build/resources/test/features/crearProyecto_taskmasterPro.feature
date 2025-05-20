#language:es
  #author:JohanGarcia

Característica: Creacion de proyecto en la pagina de TaskMaster Pro
  Como usuario de TaskMaster Pro
  Quiero poder crear un nuevo proyecto
  Para organizar y gestionar las tareas y recursos necesarios para alcanzar los objetivos del proyecto.

  @CrearProyecto

  Esquema del escenario: Crear Proyecto Exitosamente
    Dado que el usuario ha iniciado sesion y tiene permisos de admin o lider de proyecto
    Y ha dado click en el boton de crear proyecto
    Cuando ingrese todos los campos del formulario de creacion
    Y hace click en el boton Guardar
      | nombre   | descripcion   | fecha inicio   | fecha fin   | estado   | prioridad   |
      | <nombre> | <descripcion> | <fecha inicio> | <fecha fin> | <estado> | <prioridad> |
    Entonces el sistema debe registrar correctamente el nuevo proyecto

    Ejemplos:
      | nombre      | descripcion      | fecha inicio | fecha fin  | estado     | prioridad |
      | Veterinaria | Historial Medico | 20/05/2025   | 21/05/2025 | Completado | Alta      |
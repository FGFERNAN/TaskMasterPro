#language:es
  #author:JohanGarcia

Característica: Eliminación de miembro de un proyecto en la pagina de TaskMaster Pro
  Como usuario de TaskMaster Pro
  Quiero poder eliminar un miembro asignado a un proyecto
  Para ajustar el equipo según sea necesario.

  Antecedentes:
    Dado que el usuario se encuentra en la pagina de inicio de sesion de TaskMaster Pro
    Cuando ingrese las credenciales correctas (usuario y contraseña)
      | email                  | password       |
      | fgfernan2508@gmail.com | enriqueGR2508* |

  @EliminarMiembro

  Escenario: Eliminar un Miembro Exitosamente
    Cuando seleccione un usuario asignado a un proyecto y hace click en el boton de eliminar usuario
    Entonces el sistema muestra un mensaje de miembro eliminado exitosamente y actualiza la lista de usuarios asignados a ese proyecto

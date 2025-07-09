#language:es
  #author:JohanGarcia

Característica: Eliminación de proyecto en la pagina de TaskMaster Pro
  Como usuario de TaskMaster Pro
  Quiero poder eliminar un proyecto existente
  Para mantener mi lista de proyectos organizada y actualizada.

  Antecedentes:
    Dado que el usuario se encuentra en la pagina de inicio de sesion de TaskMaster Pro
    Cuando ingrese las credenciales correctas (usuario y contraseña)
      | email                  | password       |
      | fgfernan2508@gmail.com | enriqueGR2508* |

  @EliminarProyecto

  Escenario: Eliminar un Proyecto Exitosamente
    Cuando seleccione la opción de eliminar un proyecto
    Entonces el sistema muestra un mensaje de proyecto eliminado exitosamente y actualiza la lista de proyectos eliminando su registro

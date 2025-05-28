#language:es
  #author:JohanGarcia

Característica: Eliminación de proyecto en la pagina de TaskMaster Pro
  Como usuario de TaskMaster Pro
  Quiero poder eliminar un proyecto existente
  Para mantener mi lista de proyectos organizada y actualizada.

  Antecedentes:
    Dado que el usuario se encuentra en la pagina de inicio de sesion de TaskMaster Pro
    Cuando ingrese las credenciales correctas (usuario y contraseña)
      | email                | password     |
      | nikole@gmail.com     | Nikole1234*  |

  @AsignarProyecto

  Escenario: Eliminar un Proyecto Exitosamente
    Cuando seleccione un proyecto de la lista y hace click en el boton de eliminar y confirma la eliminacion del proyecto
    Entonces el sistema muestra un mensaje de proyecto eliminado exitosamente y actualiza la lista de proyectos eliminando su registro

#language:es
  #author:JohanGarcia

Característica: Eliminación de proyecto en la pagina de TaskMaster Pro
  Como usuario de TaskMaster Pro
  Quiero poder eliminar un proyecto existente
  Para mantener mi lista de proyectos organizada y actualizada.

  @AsignarProyecto

  Escenario: Eliminar un Proyecto Exitosamente
    Dado que el usuario ha iniciado sesion y tiene el rol de admin o lider de proyecto
    Y existe al menos un proyecto creado para poder eliminarlo
    Cuando seleccione un proyecto de la lista
    Y hace click en el boton de eliminar
    Y confirma la eliminacion del proyecto
    Entonces el sistema muestra un mensaje de proyecto eliminado exitosamente
    Y actualiza la lista de proyectos eliminando su registro

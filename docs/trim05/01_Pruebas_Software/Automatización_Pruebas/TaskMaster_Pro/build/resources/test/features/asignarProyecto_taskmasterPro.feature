#language:es
  #author:JohanGarcia

Característica: Asignacion de proyecto en la pagina de TaskMaster Pro
  Como usuario de TaskMaster Pro
  Quiero poder agregar miembros a un proyecto
  Para poder repartir tareas y colaborar eficazmente para resultados más rapidos.

  @AsignarProyecto

  Escenario: Agregar Miembro Exitosamente
    Dado que el usuario ha iniciado sesion y tiene permisos de administrador o lider
    Y existe al menos un proyecto creado
    Y existe al menos un usuario registrado que pueda ser asignado al proyecto
    Cuando seleccione un proyecto existente
    Y selecciona la opcion miembros
    Y hace click en el boton agregar en el usuario que desee
    Entonces los usuarios seleccionados deben ser agregados correctamente al proyecto
    Y reflejarse en la lista de miembros del mismo

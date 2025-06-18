#language:es
  #author:JohanGarcia

Característica: Asignacion de proyecto en la pagina de TaskMaster Pro
  Como usuario de TaskMaster Pro
  Quiero poder agregar miembros a un proyecto
  Para poder repartir tareas y colaborar eficazmente para resultados más rapidos.

  Antecedentes:
    Dado que el usuario se encuentra en la pagina de inicio de sesion de TaskMaster Pro
    Cuando ingrese las credenciales correctas (usuario y contraseña)
      | email                  | password       |
      | fgfernan2508@gmail.com | enriqueGR2508* |

  @AsignarProyecto

  Escenario: Agregar Miembro Exitosamente
    Cuando hace click en el boton agregar en el usuario que desee
    | Nikole   Bernal |
    Entonces los usuarios seleccionados deben ser agregados correctamente al proyecto y reflejarse en la lista de miembros del mismo
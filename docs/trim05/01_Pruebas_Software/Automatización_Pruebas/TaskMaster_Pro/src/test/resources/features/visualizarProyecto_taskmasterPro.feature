#language:es
  #author:JohanGarcia

Característica: Visualización de proyecto en la pagina de TaskMaster Pro
  Como usuario de TaskMaster Pro
  Quiero poder visualizar los detalles de los proyectos
  Para obtener detalles y una visión general del progreso.

  Antecedentes:
    Dado que el usuario se encuentra en la pagina de inicio de sesion de TaskMaster Pro
    Cuando ingrese las credenciales correctas (usuario y contraseña)
      | email                  | password       |
      | fgfernan2508@gmail.com | enriqueGR2508* |

  @VisualizarProyecto

  Escenario: Visualizar un Proyecto Exitosamente
    Cuando seleccione un proyecto de la lista de proyectos en el menu
    Entonces el sistema muestra todos los detalles del proyecto seleccionado
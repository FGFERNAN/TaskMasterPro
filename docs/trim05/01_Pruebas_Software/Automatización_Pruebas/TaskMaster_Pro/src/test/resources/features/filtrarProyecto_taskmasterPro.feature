#language:es
  #author:JohanGarcia

Característica: Busqueda de proyecto en la pagina de TaskMaster Pro
  Como usuario de TaskMaster Pro
  Quiero poder buscar un proyecto existente
  Para encontrar rápidamente el proyecto que necesito.

  Antecedentes:
    Dado que el usuario se encuentra en la pagina de inicio de sesion de TaskMaster Pro
    Cuando ingrese las credenciales correctas (usuario y contraseña)
      | email                  | password       |
      | fgfernan2508@gmail.com | enriqueGR2508* |

  @FiltrarProyecto

  Escenario: Filtrar un Proyecto Exitosamente
    Cuando seleccione el icono de lupa y ingrese el nombre del proyecto y lo seleccione
    | nombre   |
    | Software |
    Entonces el sistema abre la interfaz de ese proyecto

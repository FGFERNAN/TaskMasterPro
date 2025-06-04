#language:es
  #author:JohanGarcia

Característica: Actualización de un proyecto existente en la pagina de TaskMaster Pro
  Como usuario de TaskMaster Pro
  Quiero poder editar un proyecto existente
  Para mantener la información actualizada según sea necesario

  Antecedentes:
    Dado que el usuario se encuentra en la pagina de inicio de sesion de TaskMaster Pro
    Cuando ingrese las credenciales correctas (usuario y contraseña)
      | email                  | password       |
      | fgfernan2508@gmail.com | enriqueGR2508* |

  @EditarProyecto

  Esquema del escenario: Editar Proyecto Exitosamente
    Cuando selecciona la opción de editar un proyecto y actualice los campos necesarios y de click en el boton Guardar
      | nombre   | descripcion   |
      | <nombre> | <descripcion> |
    Entonces el sistema debe mostrar una alerta confirmando los cambios con exito y se deben ver reflejados al abrir los detalles

    Ejemplos:
      | nombre         | descripcion          |
      | TaskMaster Pro | Gestion de Proyectos |
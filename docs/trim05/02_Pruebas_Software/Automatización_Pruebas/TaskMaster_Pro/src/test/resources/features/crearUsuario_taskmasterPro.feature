#language:es
  #author:JohanGarcia

Característica: Creacion de usuario en la pagina de TaskMaster Pro
  Como usuario de TaskMaster Pro
  Quiero poder crear un nuevo usuario
  Para agregar nuevos miembros al equipo de trabajo

  Antecedentes:
    Dado que el usuario se encuentra en la pagina de inicio de sesion de TaskMaster Pro
    Cuando ingrese las credenciales correctas (usuario y contraseña)
      | email                  | password       |
      | fgfernan2508@gmail.com | enriqueGR2508* |

  @CrearUsuario

  Esquema del escenario: Crear Usuario Exitosamente
    Cuando selecciona la opción de crear un nuevo usuario
      | nombre   | apellidos   | email   | phone   | id   | contrasena   | rol   |
      | <nombre> | <apellidos> | <email> | <phone> | <id> | <contrasena> | <rol> |
    Entonces el sistema debe mostrar un mensaje de usuario creado con exito y redirige a la interfaz de administrar-usuarios

    Ejemplos:
      | nombre  | apellidos | email             | phone | id  | contrasena | rol               |
      | Enrique | Garcia    | enrique@gmail.com | 310   | 100 | Fg123456*  | Lider de Proyecto |
USE task_master;

INSERT INTO modulos(nombre) VALUES ('Modulo Usuarios'),
('Modulo Gestion Proyecto'),
('Modulo Gestion Tareas'),
('Modulo Personalizacion'),
('Modulo Colaboracion');

SELECT * FROM modulos;

INSERT INTO roles(nombre, descripcion) VALUES ('Administrador', 'Administrador del sistema, que puede realizar cualquier accion disponible del software'),
('Lider de Proyecto', 'Lider de proyecto del sistema que como su nombre indica, es el responsable de crear proyectos, asiganarlos, eliminarlos y demas acciones que solo deberia
realizar un lider de proyectoconsultarPermisos para mayor orden en la gestion del mismo'),
('Miembro de Proyecto', 'Miembro de proyecto, es el rol, que puede solo editar proyectos, tareas, subir archivos, enviar mensajes y entre otras acciones que delimitan sus permisos de los del lider'),
('StakeHolder/cliente', 'StakeHolder/cliente, creado con el fin de tener mayoritariamente solo acciones de visualizacion y obtener reportes');
INSERT INTO roles(nombre, descripcion) VALUES ('Prueba', 'Prueba');

SELECT * FROM roles;

INSERT INTO acciones(nombre) VALUES ('Crear Rol'), ('Asignar Rol'), ('Actualizar Rol'), ('Eliminar Rol'), ('Consultar Roles'),
('Crear Usuario'), ('Consultar Usuarios'), ('Consultar Usuario ID'), ('Actualizar Usuario'), ('Eliminar Usuario');

INSERT INTO acciones(nombre) VALUES ('Consultar Rol ID');
INSERT INTO acciones(nombre) VALUES ('Crear Modulo'), ('Consultar Modulos'), ('Consultar Modulo ID'), ('Actualizar Modulo'),
('Eliminar Modulo');
INSERT INTO acciones(nombre) VALUES ('Editar Perfil');
INSERT INTO acciones(nombre) VALUES ('Cancelar Cuenta');
INSERT INTO acciones(nombre) VALUES ('Crear Proyecto'), ('Crear Plantillas Proyecto'), ('Definir Fechas'), ('Definir Prioridad'),
('Editar Proyecto'), ('Eliminar Proyecto'), ('Asignar Proyecto'), ('Cambiar Estado Proyecto'), ('Filtrar Proyecto'), ('Gestionar Permisos'),
('Agregar Miembros Proyecto'), ('Eliminar Miembros Proyecto');
INSERT INTO acciones(nombre) VALUES ('Visualizar Proyecto');

SELECT * FROM acciones;


INSERT INTO tipo_documento(nombre) VALUES ('Tarjeta de Identidad'), ('Cedula de Ciudadania'), ('Cedula de Extranjeria');

SELECT * FROM tipo_documento;


INSERT INTO usuarios(id, nombre, apellidos, email, password, rolID, tipo_documento) VALUES (1030533364, 'Johan', 'Garcia', 'fgfernan2508@gmail,com',
aes_encrypt('enriqueGR2508', 'holamundo'), 1, 2);
INSERT INTO usuarios(id, nombre, apellidos, email, password, rolID, tipo_documento) VALUES (123456789, 'Andres', 'Garzon', 'andresitow@gmail.com', 
aes_encrypt('Hola1234', 'clave'), 2, 2);
INSERT INTO usuarios(id, nombre, apellidos, email, password, rolID, tipo_documento) VALUES (80067922, 'Jorge', 'Garcia', 'enrique@gmail.com', 
aes_encrypt('HolaMundo', 'clave'), 3, 2);

SELECT * FROM usuarios;

SELECT usuarios.id, usuarios.nombre, usuarios.apellidos, usuarios.email, usuarios.telefono, usuarios.password, roles.nombre AS rol, tipo_documento.nombre AS tipo_documento FROM usuarios
	JOIN roles ON usuarios.rolID = roles.id
    JOIN tipo_documento ON usuarios.tipo_documento = tipo_documento.id;


## Permisos para administrador

INSERT INTO permisos (rolID, moduloID, accionesID) VALUES (1,1,1);
INSERT INTO permisos (rolID, moduloID, accionesID) VALUES (1,1,2),
(1,1,3), (1,1,4), (1,1,5), (1,1,11), (1,1,6), (1,1,7), (1,1,8),
(1,1,9), (1,1,10);
INSERT INTO permisos (rolID, moduloID, accionesID) VALUES (1,1,12),
(1,1,13), (1,1,14), (1,1,15), (1,1,16);
INSERT INTO permisos (rolID, moduloID, accionesID) VALUES (1,1,17);
INSERT INTO permisos (rolID, moduloID, accionesID) VALUES (1,1,18);
INSERT INTO permisos (rolID, moduloID, accionesID) VALUES (1,2,19),
(1,2,20), (1,2,21), (1,2,22), (1,2,23), (1,2,24), (1,2,25), (1,2,26),
(1,2,27), (1,2,28), (1,2,29), (1,2,30);
INSERT INTO permisos (rolID, moduloID, accionesID) VALUES (1,2,31);


## Permisos para Lider de Proyecto

INSERT INTO permisos (rolID, moduloID, accionesID) VALUES (2,1,6);
INSERT INTO permisos (rolID, moduloID, accionesID) VALUES (2,1,7),
(2,1,8), (2,1,9), (2,1,10);
INSERT INTO permisos (rolID, moduloID, accionesID) VALUES (2,1,17);
INSERT INTO permisos (rolID, moduloID, accionesID) VALUES (2,1,18);
INSERT INTO permisos (rolID, moduloID, accionesID) VALUES (2,2,19),
(2,2,20), (2,2,21), (2,2,22), (2,2,23), (2,2,24), (2,2,25), (2,2,26),
(2,2,27), (2,2,28), (2,2,29), (2,2,30);
INSERT INTO permisos (rolID, moduloID, accionesID) VALUES (2,2,31);


## Permisos para Miembro de Proyecto

INSERT INTO permisos (rolID, moduloID, accionesID) VALUES (3,1,7);
INSERT INTO permisos (rolID, moduloID, accionesID) VALUES (3,1,17);
INSERT INTO permisos (rolID, moduloID, accionesID) VALUES (3,1,18);
INSERT INTO permisos (rolID, moduloID, accionesID) VALUES (3,2,23),
(3,2,27);
INSERT INTO permisos (rolID, moduloID, accionesID) VALUES (3,2,31);


## Permisos para StakeHolder/Cliente

INSERT INTO permisos (rolID, moduloID, accionesID) VALUES (4,1,7);
INSERT INTO permisos (rolID, moduloID, accionesID) VALUES (4,1,17);
INSERT INTO permisos (rolID, moduloID, accionesID) VALUES (4,1,18);
INSERT INTO permisos (rolID, moduloID, accionesID) VALUES (4,2,31);


## Verificar Permisos 

SELECT usuarios.id, CONCAT(usuarios.nombre, ' ', usuarios.apellidos) AS Nombre_Completo, roles.nombre AS Nombre_Rol, modulos.nombre AS Nombre_Modulo, acciones.nombre AS Nombre_acciones FROM usuarios
JOIN roles ON usuarios.rolID = roles.id
JOIN permisos ON permisos.rolID= roles.id
JOIN acciones ON permisos.accionesID = acciones.id
JOIN modulos ON permisos.moduloID = modulos.id
ORDER BY usuarios.nombre, modulos.nombre, acciones.nombre;

## Segunda opcion para verificar un permiso especifico
SELECT permisos.id FROM permisos
JOIN modulos ON permisos.moduloID = modulos.id
JOIN acciones ON permisos.accionesID = acciones.id
WHERE permisos.rolID = ? AND modulos.nombre = ? AND acciones.nombre = ?;

## Procedimiento almacenado
CALL consultarPermisos (1, 'Modulo Usuarios', 'Crear Usuario');

## Procedimiento almacenado InsertUser
CALL insertUser(1, 'Pepito', 'Perez', 'holamundo@gmail.com', '3124331752', aes_encrypt('SENA','clave'), 2, 2);

# Creacion de vista 
CREATE VIEW getAllUsers AS
SELECT u.id, u.nombre, u.apellidos, u.email, u.telefono, u.password, r.nombre AS rol, t.nombre AS tipo_documento FROM usuarios u
	JOIN roles r ON u.rolID = r.id JOIN tipo_documento t ON u.tipo_documento = t.id;
    
## Modificación de vista
CREATE OR REPLACE VIEW getAllUsers AS
SELECT u.id, u.nombre, u.apellidos, u.email, u.telefono, u.password, r.nombre AS rol, t.nombre AS tipo_documento FROM usuarios u
	JOIN roles r ON u.rolID = r.id JOIN tipo_documento t ON u.tipo_documento = t.id;

## Como llamar una vista
SELECT * FROM getAllUsers;

## Creación de vista de proyectos
CREATE VIEW getAllProjects AS
SELECT p.id, p.nombre, p.descripcion, p.fechaInicio, p.fechaFin, p.estado, p.prioridad, e.nombre AS etiquetas FROM proyectos p
	JOIN etiquetas e ON p.etiquetasID = e.id;
    
# Como llamar la vista de proyectos
SELECT * FROM getAllProjects;

## Modificacion de vista de proyectos
CREATE OR REPLACE VIEW getAllProjects AS
SELECT p.id, p.nombre, p.descripcion, p.fechaInicio, p.fechaFin, p.estado, p.prioridad, e.nombre AS etiquetas FROM proyectos p
	LEFT JOIN etiquetas e ON p.etiquetasID = e.id;
    
SELECT * FROM getAllProjects WHERE fechaInicio AND fechaFIN IS NOT NULL;
SELECT * FROM getAllProjects WHERE (fechaInicio IS NULL OR fechaInicio = '') AND (fechaFin IS NULL OR fechaFin = '');

SELECT u.id, u.nombre, u.email FROM usuarios_proyectos up
	JOIN usuarios u ON up.usuarioID = u.id WHERE up.proyectoID = 7;
    
SELECT p.* FROM proyectos p
	JOIN usuarios_proyectos up ON p.id = up.proyectoID WHERE up.usuarioID = 1234567890;
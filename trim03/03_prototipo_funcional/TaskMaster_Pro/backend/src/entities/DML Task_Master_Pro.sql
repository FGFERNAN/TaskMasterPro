USE task_master;

INSERT INTO modulos(nombre) VALUES ('Modulo Usuarios'),
('Modulo Gestion Proyecto'),
('Modulo Gestion Tareas'),
('Modulo Personalizacion'),
('Modulo Colaboracion');

SELECT * FROM modulos;

INSERT INTO roles(nombre, descripcion) VALUES ('Administrador', 'Administrador del sistema, que puede realizar cualquier accion disponible del software'),
('Lider de Proyecto', 'Lider de proyecto del sistema que como su nombre indica, es el responsable de crear proyectos, asiganarlos, eliminarlos y demas acciones que solo deberia
realizar un lider de proyecto para mayor orden en la gestion del mismo'),
('Miembro de Proyecto', 'Miembro de proyecto, es el rol, que puede solo editar proyectos, tareas, subir archivos, enviar mensajes y entre otras acciones que delimitan sus permisos de los del lider'),
('StakeHolder/cliente', 'StakeHolder/cliente, creado con el fin de tener mayoritariamente solo acciones de visualizacion y obtener reportes');

SELECT * FROM roles;

INSERT INTO acciones(nombre) VALUES ('Crear Rol'), ('Asignar Rol'), ('Actualizar Rol'), ('Eliminar Rol'), ('Consultar Roles'),
('Crear Usuario'), ('Consultar Usuarios'), ('Consultar Usuario ID'), ('Actualizar Usuario'), ('Eliminar Usuario');

INSERT INTO acciones(nombre) VALUES ('Consultar Rol ID');
INSERT INTO acciones(nombre) VALUES ('Crear Modulo'), ('Consultar Modulos'), ('Consultar Modulo ID'), ('Actualizar Modulo'),
('Eliminar Modulo');

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


## Permisos para administrador

INSERT INTO permisos (rolID, moduloID, accionesID) VALUES (1,1,1);
INSERT INTO permisos (rolID, moduloID, accionesID) VALUES (1,1,2),
(1,1,3), (1,1,4), (1,1,5), (1,1,11), (1,1,6), (1,1,7), (1,1,8),
(1,1,9), (1,1,10);
INSERT INTO permisos (rolID, moduloID, accionesID) VALUES (1,1,12),
(1,1,13), (1,1,14), (1,1,15), (1,1,16);


## Permisos para Lider de Proyecto

INSERT INTO permisos (rolID, moduloID, accionesID) VALUES (2,1,6);
INSERT INTO permisos (rolID, moduloID, accionesID) VALUES (2,1,7),
(2,1,8), (2,1,9), (2,1,10);


## Permisos para Miembro de Proyecto

INSERT INTO permisos (rolID, moduloID, accionesID) VALUES (3,1,7);


## Permisos para StakeHolder/Cliente

INSERT INTO permisos (rolID, moduloID, accionesID) VALUES (4,1,7);


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

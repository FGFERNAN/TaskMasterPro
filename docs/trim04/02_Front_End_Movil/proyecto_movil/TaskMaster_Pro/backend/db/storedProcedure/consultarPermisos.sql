CREATE DEFINER=`root`@`localhost` PROCEDURE `consultarPermisos`(
IN rolId INT,
IN modulo VARCHAR(255),
IN accion VARCHAR(255)
)
BEGIN
SELECT permisos.id FROM permisos
JOIN modulos ON permisos.moduloID = modulos.id
JOIN acciones ON permisos.accionesID = acciones.id
WHERE permisos.rolID = rolId AND modulos.nombre = modulo AND acciones.nombre = accion;
END
CREATE DEFINER=`root`@`localhost` PROCEDURE `insertTask`(
IN nombre VARCHAR(100),
IN descripcion TEXT,
IN fechaInicio DATE,
IN fechaFin DATE,
IN estado VARCHAR(50),
IN prioridad VARCHAR(50),
IN proyectoID INT
)
BEGIN
INSERT INTO tareas(nombre, descripcion, fechaInicio, fechaFin, estado, prioridad, proyectoID) VALUES (nombre, descripcion, fechaInicio, fechaFin, estado, prioridad, proyectoID);
END
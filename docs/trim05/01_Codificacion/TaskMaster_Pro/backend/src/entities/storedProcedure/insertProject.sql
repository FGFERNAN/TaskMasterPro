CREATE DEFINER=`root`@`localhost` PROCEDURE `insertProject`(
IN nombre VARCHAR(100),
IN descripcion TEXT,
IN fechaInicio DATE,
IN fechaFin DATE,
IN estado VARCHAR(50),
IN prioridad VARCHAR(50),
IN etiquetasID INT
)
BEGIN
INSERT INTO proyectos(nombre, descripcion, fechaInicio, fechaFin, estado, prioridad, etiquetasID) VALUES (nombre, descripcion, fechaInicio, fechaFin, estado, prioridad, etiquetasID);
END
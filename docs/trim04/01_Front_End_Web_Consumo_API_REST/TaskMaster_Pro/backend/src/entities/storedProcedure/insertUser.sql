CREATE DEFINER=`root`@`localhost` PROCEDURE `insertUser`(
IN id INT,
IN nombre VARCHAR(100),
IN apellidos VARCHAR(155),
IN email VARCHAR(200),
IN telefono VARCHAR(20),
IN password VARCHAR(256),
IN rolID INT,
IN tipo_documento TINYINT(3)
)
BEGIN
INSERT INTO usuarios(id, nombre, apellidos, email, telefono, password, rolID, tipo_documento) VALUES (id, nombre, apellidos, email, telefono, password, rolID, tipo_documento);
END
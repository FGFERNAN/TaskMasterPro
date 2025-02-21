const DBConnection = require('../config/dbConnection');

const verificarPermiso = (modulo, accion) => {
    return async (req, res, next) => {
        const db = new DBConnection();
        try {

            // Cambia el valor de "id" por el id del usuario que quieres probar segun su rol que tre sus repectivos permisos
            
            const usuarioId = req.session.userId;

            if(!usuarioId){
                return res.status(401).json({ mensaje: "Usuario no autenticado" });
            }

            if(!modulo || !accion){
                return res.status(400).json({ mensaje: "Parametros invalidos"});
            };
            
            // Obtener el rol del usuario
            const getUserRole = await db.query(`SELECT rolID FROM usuarios WHERE id = ?`, [usuarioId]);
            if (!getUserRole.length) {
                return res.status(403).json({ mensaje: "Usuario no encontrado" });
            }

            const rolId = getUserRole[0].rolID;

            // Llamada al procedimiento almacenado creado para la consulta de permisos
        
            const procedure = 'CALL consultarPermisos(?,?,?)';

            // Consultar si el rol tiene el permiso en el módulo y acción específicos
            const permiso = await db.query(procedure, [rolId, modulo, accion]
            ); 

            if (!permiso[0].length) {
                return res.status(403).json({ mensaje: "No tienes permisos para realizar esta acción." });
            }

            next(); // El usuario tiene permiso, proceder al siguiente middleware o controlador

        } catch (error) {
            console.error("Error en el middlaware verificarPermisos: ", error.message);
            res.status(500).json({ mensaje: "Error en la verificación de permisos" });
        }
    };
};

module.exports = verificarPermiso;

const DBConnection = require('../config/config');

class LoginService {
    constructor() {
        this.db = new DBConnection();
    }

    async findById(id) {
        try {
            const sql = `SELECT id, nombre, apellidos, email, telefono, password, rolID, tipo_documento FROM usuarios WHERE id = ?`;
            const results = await this.db.query(sql, [id]);

            if (results.length === 0) {
                throw new Error("Usuario no encontrado");
            }

            return results[0]; 
        } catch (err) {
            console.error('Error al consultar usuario por ID: ', err.message);
            throw err;
        }
    }

    async findByEmail(email) {
        try {
            const sql = `SELECT id, nombre, apellidos, email, telefono, password, rolID, tipo_documento FROM usuarios WHERE email = ?`;
            const results = await this.db.query(sql, [email]);

            if (results.length === 0) {
                throw new Error("El usuario no existe en la base de datos.");
            }

            return results[0]; 
        } catch (err) {
            console.error('Error al consultar usuario por Email: ', err.message);
            throw err;
        }
    }
}

module.exports = LoginService;

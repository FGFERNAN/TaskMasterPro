const DBConnection = require('../config/dbConnection');
const Role = require('../models/role');

class RoleService {
    constructor() {
        this.db = new DBConnection();
    }

    async getAllRoles() {
        try {
            const results = await this.db.query(`SELECT * FROM roles`);
            return results.map(role => new Role(...Object.values(role)));
        } catch (err) {
            console.error('Error fetching roles: ', err.message);
            throw err;
        }
    };

    async getRoleById(id) {
        try {
            const results = await this.db.query(`SELECT * FROM roles WHERE id = ?`, [id]);
            if (results.length === 0) throw new Error("Rol no encontrado");
            return new Role(...Object.values(results[0]));
        } catch (err) {
            console.error('Error fetching role: ', err.message);
            throw err;
        }
    };

    async createRole(data) {
        try {
            const verificarNombre = `SELECT id FROM roles WHERE nombre = ?;`;
            const nombreExiste = await this.db.query(verificarNombre, [data.nombre]);
            if (nombreExiste.length > 0) {
                throw new Error("El nombre ingresado, ya se encuentra registrado en la base de datos del sistema");
            }
            var dataQry = [data.nombre, data.descripcion];
            var qry = `INSERT INTO roles(nombre, descripcion) VALUES(?,?);`;
            const results = await this.db.query(qry, dataQry);
            if (results.length === 0) {
                throw new Error("Rol no creado");
            }
            return { message: "Rol creado con exito" };

        } catch (err) {
            console.error('Error creating role: ', err.message);
            throw err;
        }
    };

    async updateRole(id, data) {
        try {
            const getRole = await this.db.query(`SELECT * FROM roles WHERE id = ?`, [id]);
            const verificarNombre = `SELECT id FROM roles WHERE nombre = ? AND id != ?;`;
            const nombreExiste = await this.db.query(verificarNombre, [data.nombre, id]);
            if (nombreExiste.length > 0) {
                throw new Error("El nombre ingresado, ya se encuentra registrado en la base de datos del sistema");
            }
            if (getRole.length != 0) {
                var dataQry = [data.nombre, data.descripcion];
                const results = await this.db.query(`UPDATE roles SET nombre=?, descripcion=? WHERE id=?`, [...dataQry, id]);
                if (results.length != 0) {
                    return { message: "Rol actualizado con exito" };
                } else {
                    throw new Error("Rol no actualizado");
                }
            } else {
                return { message: "Unregistered role" };
            }

        } catch (err) {
            console.error('Error updating role: ', err.message);
            throw err;
        }
    };

    async deleteRole(id) {
        try {
            const getRole = await this.db.query(`SELECT * FROM roles WHERE id  = ?`, [id]);
            if (getRole.length != 0) {
                const results = await this.db.query(`DELETE FROM roles WHERE id = ?`, [id]);
                if (results.length != 0) {
                    return { message: "Rol eliminado con exito" };
                } else {
                    throw new Error("Rol no eliminado");
                }
            } else {
                throw new Error("Role not exists");
            }
        } catch (err) {
            if (err.code === 'ER_ROW_IS_REFERENCED_2') {
                throw {
                    code: 'ROLE_IN_USE',
                    message: "No se puede eliminar el rol porque está asignado a un usuario",
                };
            }
            console.error('Error deleting role: ', err.message);
            throw err;
        }
    };
};

module.exports = RoleService;
const db = require('../config/dbConnection');
const bcrypt = require('bcrypt');
const User = require('../models/user');

const saltRounds = 10;

class UserService {
    async getAllUsers() {
        try {
            const results = await db.query(`SELECT * FROM getAllUsers;`);
            return results.map(user => new User(...Object.values(user)));
        } catch (err) {
            console.error('Error fetching users: ', err.message);
            throw err;
        }
    };

    async getUserById(id) {
        try {
            const results = await db.query(`SELECT * FROM usuarios WHERE id = ?`, [id]);
            if (results.length === 0) throw new Error("Usuario no encontrado");
            return new User(...Object.values(results[0]));
        } catch (err) {
            console.error('Error fetching users: ', err.message);
            throw err;
        }
    }

    async createUser(data, rolId) {
        try {
            if (rolId === 1) {
                const verificarEmail = `SELECT id FROM usuarios WHERE email = ?;`;
                const emailExiste = await db.query(verificarEmail, [data.email]);
                const verificarId = `SELECT * FROM usuarios WHERE id = ?;`;
                const idExiste = await db.query(verificarId, [data.id]);
                if (emailExiste.length > 0) {
                    throw new Error("El correo electronico ingresado, ya se encuentra registrado en el sistema");
                } else if (idExiste.length > 0) {
                    throw new Error("El numero de documento ingresado, ya se encuentra registrado en el sistema");
                }
                const hashedPassword = await bcrypt.hash(data.password, saltRounds);
                var dataQry = [data.id, data.nombre, data.apellidos, data.email, data.telefono, hashedPassword, data.rolID, data.tipo_documento];
                var qry = `CALL insertUser(?,?,?,?,?,?,?,?);`;
                const results = await db.query(qry, dataQry);
                if (results.length === 0) {
                    throw new Error("Usuario no creado");
                }
                return { message: "Usuario creado con exito" };
            } else {
                if (data.rolID == 1) {
                    throw new Error("No tienes permisos para crear usuarios administradores");
                }
                const verificarEmail = `SELECT id FROM usuarios WHERE email = ?;`;
                const emailExiste = await db.query(verificarEmail, [data.email]);
                const verificarId = `SELECT * FROM usuarios WHERE id = ?;`;
                const idExiste = await db.query(verificarId, [data.id]);
                if (emailExiste.length > 0) {
                    throw new Error("El correo electronico ingresado, ya se encuentra registrado en el sistema");
                } else if (idExiste.length > 0) {
                    throw new Error("El numero de documento ingresado, ya se encuentra registrado en el sistema");
                }
                const hashedPassword = await bcrypt.hash(data.password, saltRounds);
                var dataQry = [data.id, data.nombre, data.apellidos, data.email, data.telefono, hashedPassword, data.rolID, data.tipo_documento];
                var qry = `CALL insertUser(?,?,?,?,?,?,?,?);`;
                const results = await db.query(qry, dataQry);
                if (results.length === 0) {
                    throw new Error("Usuario no creado");
                }
                return { message: "Usuario creado con exito" };
            }

        } catch (err) {
            console.error('Error creating users: ', err.message);
            throw err;
        }
    }

    async updateUser(id, data, rolId) {
        try {
            if (rolId === 1) {
                const getUser = await db.query(`SELECT * FROM usuarios WHERE id = ?`, [id]);
                const verificarEmail = `SELECT id FROM usuarios WHERE email = ? AND id != ?;`;
                const emailExiste = await db.query(verificarEmail, [data.email, id]);
                if (emailExiste.length > 0) {
                    throw new Error("El correo electronico ingresado, ya se encuentra registrado en el sistema");
                }
                if (getUser.length != 0) {
                    var dataQry = [data.nombre, data.apellidos, data.email, data.telefono, data.rolID, data.tipo_documento];
                    const results = await db.query(`UPDATE usuarios SET nombre=?, apellidos=?, email=?, telefono=?, rolID=?, tipo_documento=? WHERE id=?`, [...dataQry, id]);
                    if (results.length != 0) {
                        return { message: "Usuario actualizado con exito" };
                    } else {
                        throw new Error("Usuario no actualizado");
                    }
                } else {
                    return { message: "Unregistered user" };
                }
            } else {
                if (data.rolID == 1) {
                    throw new Error("No tienes permisos para asignar rol de administrador");
                }
                const getUser = await db.query(`SELECT * FROM usuarios WHERE id = ?`, [id]);
                const verificarEmail = `SELECT id FROM usuarios WHERE email = ? AND id != ?;`;
                const emailExiste = await db.query(verificarEmail, [data.email, id]);
                if (emailExiste.length > 0) {
                    throw new Error("El correo electronico ingresado, ya se encuentra registrado en el sistema");
                }
                if (getUser.length != 0) {
                    var dataQry = [data.nombre, data.apellidos, data.email, data.telefono, data.rolID, data.tipo_documento];
                    const results = await db.query(`UPDATE usuarios SET nombre=?, apellidos=?, email=?, telefono=?, rolID=?, tipo_documento=? WHERE id=?`, [...dataQry, id]);
                    if (results.length != 0) {
                        return { message: "Usuario actualizado con exito" };
                    } else {
                        throw new Error("Usuario no actualizado");
                    }
                } else {
                    return { message: "Unregistered user" };
                }
            }
        } catch (err) {
            console.error('Error updating user: ', err.message);
            throw err;
        }
    }

    async deleteUser(id) {
        try {
            const getUser = await db.query(`SELECT * FROM usuarios WHERE id  = ?`, [id]);
            if (getUser.length != 0) {
                const results = await db.query(`DELETE FROM usuarios WHERE id = ? AND rolID != 1`, [id]);
                if (results.affectedRows === 0) {
                    throw new Error("Usuario no eliminado");
                } else {
                    return { message: "Usuario eliminado con exito" };
                }
            } else {
                return { message: "User not exists" };
            }
        } catch (err) {
            console.error('Error deleting user: ', err.message);
            throw err;
        }
    }

}

module.exports = UserService;
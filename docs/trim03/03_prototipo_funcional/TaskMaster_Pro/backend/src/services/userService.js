const DBConnection = require('../config/dbConnection');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const Project = require('../models/project');

const saltRounds = 10;

class UserService {
    constructor() {
        this.db = new DBConnection();
    }

    async getAllUsers() {
        try {
            const results = await this.db.query(`SELECT * FROM getAllUsers;`);
            return results.map(user => new User(...Object.values(user)));
        } catch (err) {
            console.error('Error fetching users: ', err.message);
            throw err;
        }
    };

    async getUserById(id) {
        try {
            const results = await this.db.query(`SELECT * FROM usuarios WHERE id = ?`, [id]);
            if (results.length === 0) throw new Error("Proyecto no encontrado");
            return new Project(...Object.values(results[0]));
        } catch (err) {
            console.error('Error fetching users: ', err.message);
            throw err;
        }
    }

    async createUser(data) {
        try {
            const verificarEmail = `SELECT id FROM usuarios WHERE email = ?;`;
            const emailExiste = await this.db.query(verificarEmail, [data.email]);
            const verificarId = `SELECT * FROM usuarios WHERE id = ?;`;
            const idExiste = await this.db.query(verificarId, [data.id]);
            if(emailExiste.length > 0){
                throw new Error("El correo electronico ingresado, ya se encuentra registrado en el sistema");
            } else if(idExiste.length > 0){
                throw new Error("El numero de documento ingresado, ya se encuentra registrado en el sistema");
            }
            const hashedPassword = await bcrypt.hash(data.password, saltRounds);
            var dataQry = [data.id, data.nombre, data.apellidos, data.email, data.telefono, hashedPassword, data.rolID, data.tipo_documento];
            var qry = `CALL insertUser(?,?,?,?,?,?,?,?);`;
            const results = await this.db.query(qry, dataQry);
            if (results.length === 0) {
                throw new Error("Usuario no creado");
            }
            return { message: "Usuario creado con exito" };
            

        } catch (err) {
            console.error('Error creating users: ', err.message);
            throw err;
        }
    }

    async updateUser(id, data) {
        try {
            const getUser = await this.db.query(`SELECT * FROM usuarios WHERE id = ?`, [id]);
            const verificarEmail = `SELECT id FROM usuarios WHERE email = ? AND id != ?;`;
            const emailExiste = await this.db.query(verificarEmail, [data.email, id]);
            if(emailExiste.length > 0){
                throw new Error("El correo electronico ingresado, ya se encuentra registrado en el sistema");
            }
            if (getUser.length != 0) {
                var dataQry = [data.nombre, data.apellidos, data.email, data.telefono, data.rolID, data.tipo_documento];
                const results = await this.db.query(`UPDATE usuarios SET nombre=?, apellidos=?, email=?, telefono=?, rolID=?, tipo_documento=? WHERE id=?`, [...dataQry, id]);
                if (results.length != 0) {
                    return { message: "Usuario actualizado con exito" };
                } else {
                    throw new Error("Usuario no actualizado");
                }
            } else {
                return { message: "Unregistered user" };
            }

        } catch (err) {
            console.error('Error updating user: ', err.message);
            throw err;
        }
    }

    async deleteUser(id) {
        try {
            const getUser = await this.db.query(`SELECT * FROM usuarios WHERE id  = ?`, [id]);
            if (getUser.length != 0) {
                const results = await this.db.query(`DELETE FROM usuarios WHERE id = ?`, [id]);
                if (results.length != 0) {
                    return { message: "Usuario eliminado con exito" };
                } else {
                    throw new Error("Usuario no eliminado");
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
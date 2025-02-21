const DBConnection = require('../config/dbConnection');
const bcrypt = require('bcrypt');
const User = require('../models/user');

const saltRounds = 10;

class editProfileService{
    constructor(){
        this.db = new DBConnection();
    }
    async getData(id) {
        try {
            const results = await this.db.query(`SELECT * FROM usuarios WHERE id = ?`, [id]);
            if (results.length === 0) throw new Error("Usuario no encontrado");
            return new User(...Object.values(results[0]));
        } catch (err) {
            console.error('Error fetching data: ', err.message);
            throw err;
        }
    };
    async editProfile(id, data) {
        try {
            const getUser = await this.db.query(`SELECT * FROM usuarios WHERE id = ?`, [id]);
            if (getUser.length != 0) {
                const hashedPassword = await bcrypt.hash(data.password, saltRounds);
                var dataQry = [data.nombre, data.apellidos, data.email, data.telefono, hashedPassword, data.tipo_documento];
                const results = await this.db.query(`UPDATE usuarios SET nombre=?, apellidos=?, email=?, telefono=?, password=?, tipo_documento=? WHERE id=?`, [...dataQry, id]);
                if (results.length != 0) {
                    return { message: "Perfil actualizado con exito" };
                } else {
                    throw new Error("Perfil no actualizado");
                }
            } else {
                return { message: "Unregistered user" };
            }

        } catch (err) {
            console.error('Error updating profile: ', err.message);
            throw err;
        }
    }
    async cancelUser(id) {
        try {
            const getUser = await this.db.query(`SELECT * FROM usuarios WHERE id  = ?`, [id]);
            if (getUser.length != 0) {
                const results = await this.db.query(`DELETE FROM usuarios WHERE id = ?`, [id]);
                if (results.length != 0) {
                    return { message: "Cuenta cancelada con exito" };
                } else {
                    throw new Error("Cuenta no cancelada");
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

module.exports = editProfileService;
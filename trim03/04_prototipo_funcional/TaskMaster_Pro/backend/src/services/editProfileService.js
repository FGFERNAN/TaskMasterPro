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
                var dataQry = [data.nombre, data.apellidos, data.email, data.telefono, data.tipo_documento];
                const results = await this.db.query(`UPDATE usuarios SET nombre=?, apellidos=?, email=?, telefono=?, tipo_documento=? WHERE id=?`, [...dataQry, id]);
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
}

module.exports = editProfileService;
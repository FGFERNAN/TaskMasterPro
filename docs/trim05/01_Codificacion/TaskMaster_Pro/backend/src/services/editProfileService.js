const db = require('../config/dbConnection');
const bcrypt = require('bcrypt');
const User = require('../models/user');

const saltRounds = 10;

class editProfileService {
    async getData(id) {
        try {
            const results = await db.query(`SELECT * FROM usuarios WHERE id = ?`, [id]);
            if (results.length === 0) throw new Error("Usuario no encontrado");
            return new User(...Object.values(results[0]));
        } catch (err) {
            console.error('Error fetching data: ', err.message);
            throw err;
        }
    };
    async editProfile(id, data) {
        try {
            const getUser = await db.query(`SELECT * FROM usuarios WHERE id = ?`, [id]);
            const verificarEmail = `SELECT id FROM usuarios WHERE email = ? AND id != ?;`;
            const emailExiste = await db.query(verificarEmail, [data.email, id]);
            if(emailExiste.length > 0){
                throw new Error("El correo electronico ingresado, ya se encuentra registrado en el sistema");
            }
            if (getUser.length != 0) {
                var dataQry = [data.nombre, data.apellidos, data.email, data.telefono, data.tipo_documento];
                const results = await db.query(`UPDATE usuarios SET nombre=?, apellidos=?, email=?, telefono=?, tipo_documento=? WHERE id=?`, [...dataQry, id]);
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
    };
    async alterPassword(id, data) {
        try {
            const getPassword = await db.query(`SELECT password FROM usuarios WHERE id = ?`, [id]);
            if (getPassword.length != 0) {
                const hashedDBPassword = getPassword[0].password;
                const password = data.password;
                const newPassword = data.newPassword;
                const isMatch = await bcrypt.compare(password, hashedDBPassword);
                if (isMatch) {
                    const hashedPassword = await bcrypt.hash(newPassword, saltRounds);
                    var dataQry = [hashedPassword];
                    const results = await db.query(`UPDATE usuarios SET password=? WHERE id=?`, [...dataQry, id]);
                    if (results.length != 0) {
                        return { message: "Contraseña actualizada con exito" };
                    } else {
                        throw new Error("Contraseña no actualizada");
                    }
                } else {
                    throw new Error("Password Error");
                }
            } else {
                return { message: "Unregistered user" };
            }
        } catch (err) {
            console.error('Error updating password: ', err.message);
            throw err;
        }
    }
    async cancelUser(id) {
        try {
            const getUser = await db.query(`SELECT * FROM usuarios WHERE id  = ?`, [id]);
            if (getUser.length != 0) {
                const results = await db.query(`DELETE FROM usuarios WHERE id = ?`, [id]);
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
    };
}

module.exports = editProfileService;
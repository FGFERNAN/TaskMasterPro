const DBConnection = require('../config/dbConnection');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const crypto = require('crypto');

const saltRounds = 10;

class LoginService {
    constructor() {
        this.db = new DBConnection();
    }

    async login(data) {
        try {
            const email = data.email;
            const password = data.password;
            const getUser = await this.db.query(`SELECT * FROM usuarios WHERE email=?`, [email]);
            if (Object.keys(getUser).length != 0) {
                const isMatch = await bcrypt.compare(password, getUser[0].password);
                if (isMatch) {
                    return { id: getUser[0].id, nombre: getUser[0].nombre, apellidos: getUser[0].apellidos, message: "Inicio de sesión exitoso" };
                } else {
                    throw new Error("Password Error");
                }
            } else {
                throw new Error("The user not created");
            };
        } catch (err) {
            console.error('Error logging: ', err.message);
            throw err;
        };
    };
    async recoveryPassword(data) {
        try {
            const email = data.email;
            const getUser = await this.db.query(`SELECT * FROM usuarios WHERE email = ?`, [email]);
            if (getUser.length === 0) {
                throw new Error("El usuario no existe");
            }

            // Generación de token seguro y almacenamiento en la base de datos con expiración 
            const token = crypto.randomBytes(32).toString('hex');
            const expiresToken = new Date(Date.now() + 3600000); // 1 hora de validez

            await this.db.query(`UPDATE usuarios SET token = ?, expiresToken = ? WHERE email = ?`, [token, expiresToken, email]);

            // Configuración del transporte para envio de correos 
            let transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'fgfernan2508@gmail.com',
                    pass: 'cmyi qupv ukrw zewe'
                }
            });

            const resetLink = `http://localhost:8080/crear-clave/${token}`;

            // Configuración del correo electronico
            let mailOptions = {
                from: 'fgfernan2508@gmail.com',
                to: email,
                subject: 'Recuperación de Contraseña',
                html: `<p>Haz clic en el siguiente enlace para restablecer tu contraseña:</p>
                       <a href="${resetLink}">${resetLink}</a>
                       <p>Este enlace expirará en 1 hora.</p>`
            };

            await transporter.sendMail(mailOptions);
            return { message: "Correo de recuperación enviado" };
        } catch (err) {
            console.error('Error enviando correo: ', err.message);
            throw err;
        }
    };
    async resetPassword(token, data) {
        try {
            const password = data.password;
            const user = await this.db.query(`SELECT * FROM usuarios WHERE token = ? AND expiresToken > NOW()`, [token]);
            if (user.length === 0) {
                throw new Error("Token invalido o expirado");
            }
            const hashedPassword = await bcrypt.hash(password, saltRounds);

            // Actualizamos la contraseña en la base de datos y limpiamos el token
            await this.db.query(`UPDATE usuarios SET password = ?, token = NULL, expiresToken = NULL WHERE id = ?`, [hashedPassword, user[0].id]);

            return { message: "Contraseña restablecida exitosamente" };
        } catch (err) {
            console.error('Error restableciendo contraseña: ', err.message);
            throw err;
        }
    }
}

module.exports = LoginService;
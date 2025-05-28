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
                    return { id: getUser[0].id, nombre: getUser[0].nombre, apellidos: getUser[0].apellidos, rolID: getUser[0].rolID, message: "Inicio de sesión exitoso" };
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
            const expiresToken = new Date(Date.now() + 900000); // 15 minuto de validez

            await this.db.query(`UPDATE usuarios SET token = ?, expiresToken = ? WHERE email = ?`, [token, expiresToken, email]);

            // Configuración del transporte para envio de correos 
            const transporter = nodemailer.createTransport({
                pool: true,
                maxConnections: 5,
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
                html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
                        <h2 style="color: #2c3e50; text-align: center;">Restablece tu contraseña</h2>
                            <p style="font-size: 16px; color: #34495e;">Hola,</p>
                            <p style="font-size: 16px; color: #34495e;">Recibimos una solicitud para restablecer la contraseña de tu cuenta. Haz clic en el botón siguiente para continuar:</p>
      
                            <div style="text-align: center; margin: 25px 0;">
                                <a href="${resetLink}" 
                                style="background-color: #3498db; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold; display: inline-block;">
                                Restablecer contraseña
                                </a>
                            </div>

                            <p style="font-size: 14px; color: #7f8c8d; text-align: center;">
                                Si no solicitaste este cambio, ignora este correo. El enlace expirará en <strong>15 minutos</strong>.
                            </p>

                            <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;">

                            <p style="font-size: 12px; color: #95a5a6; text-align: center;">
                             © ${new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.
                            </p>
                            </div>`
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
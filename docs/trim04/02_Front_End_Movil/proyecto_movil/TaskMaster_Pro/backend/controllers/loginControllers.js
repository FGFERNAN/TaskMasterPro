const LoginService = require('../services/loginService');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');

class LoginController {
    constructor() {
        this.loginService = new LoginService();
    }

    login = async (req, res) => {
        try {
            const { email, password } = req.body;
            const user = await this.loginService.findByEmail(email);

            if (!user) {
                return res.status(401).json({
                    message: 'El email no existe en la base de datos',
                    status: 401
                });
            }

            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(401).json({
                    message: 'Contraseña Incorrecta',
                    status: 401
                });
            }

            const token = jwt.sign(
                { id: user.id, email: user.email }, 
                keys.secretOrKey, 
                {}
            );

            const data = {
                id: user.id,
                nombre: user.nombre,
                apellidos: user.apellidos,
                email: user.email,
                telefono: user.telefono,
                rolID: user.rolID,
                tipo_documento: user.tipo_documento,
                session_token: `JWT ${token}`
            };

            return res.status(201).json({
                success: true,
                message: 'Usuario Autenticado',
                data: data,
                status: 201
            });

        } catch (err) {
            return res.status(500).json({
                message: err.message,
                error: "Error al procesar la solicitud"
            });
        }
    };
}

module.exports = new LoginController();

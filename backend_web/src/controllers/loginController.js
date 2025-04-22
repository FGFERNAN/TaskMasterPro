const LoginService = require('../services/loginService');

class LoginController{
    constructor(){
        this.loginService = new LoginService();
    }

    login = async (req, res) => {
        try { 
            const { email, password } = req.body;
            if (!email || !password) {
                return res.status(400).json({ message: "Email and password are required" });
            }  
            const user = await this.loginService.login(req.body);
            req.session.userId = user.id;
            req.session.nombre = `${user.nombre} ${user.apellidos}`;
            res.status(200).json(user);
        } catch(err) {
            res.status(401).json({ message: err.message });
        };
    }

    session = async (req, res) => {
        if(req.session.nombre){
            return res.status(200).json({ nombre: req.session.nombre });
        } else {
            return res.status(401).json({ message: "Usuario no autenticado"});
        }
    }

    logout = async (req, res) => {
        req.session.destroy((err) => {
            if (err) {
                return res.status(500).json({ message: "Error al cerrar sesión" });
            }
            res.clearCookie('connect.sid'); // Limpia la cookie de sesión
            return res.status(200).json({ message: "Sesión cerrada exitosamente" });
        });
    }

    recoveryPassword = async (req, res) => {
        try {
            const execution = await this.loginService.recoveryPassword(req.body);
            res.status(200).json(execution);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    resetPassword = async (req, res) => {
        try {
            const execution = await this.loginService.resetPassword(req.params.token, req.body);
            res.status(200).json(execution);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }
}

module.exports = new LoginController();
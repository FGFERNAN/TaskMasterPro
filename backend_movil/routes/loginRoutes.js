const LoginController = require('../controllers/loginControllers');

module.exports = (app) => {
    app.post('/login', LoginController.login);
}
const { Router } = require("express");
const LoginController = require('../controllers/loginController');
const router = Router();

/**
 * @swagger
 * /logout:
 *   post:
 *     summary: Cerrar Sesión
 *     description: Cierra sesión en el sistema.
 *     tags:
 *       - Login
 *     responses:
 *       201:
 *         description: Cierre de sesión exitoso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Sesión cerrada exitosamente
 *       500:
 *         description: Error al cerrar sesión
 */
router.post('/', LoginController.logout);

module.exports = router;
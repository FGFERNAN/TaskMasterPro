const { Router } = require("express");
const loginController = require("../controllers/loginController");
const router = Router();

/**
 * @swagger
 * /recoveryPassword:
 *   post:
 *     summary: Solicitar correo de recuperación de contraseña.
 *     description: Solicita recuperación de contraseña.
 *     tags:
 *       - Recuperar Contraseña
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: fgfernan2508@gmail.com
 *     responses:
 *       200:
 *         description: Correo de recuperación enviado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Correo de recuperación enviado
 *       404:
 *         description: Usuario no existe.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                    message:
 *                     type: string
 *                     example: El usuario no existe
 *       500:
 *         description: Error interno del servidor
 */
router.post('/', loginController.recoveryPassword);

/**
 * @swagger
 * /recoveryPassword/{token}:
 *   post:
 *     summary: Cambiar contraseña por medio del correo de recuperación.
 *     description: Resetar contraseña del usuario en la base de datos del sistema.
 *     tags:
 *       - Recuperar Contraseña
 *     parameters:
 *       - in: path
 *         name: token
 *         required: true
 *         schema:
 *           type: string
 *         description: Token de validación.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               password:
 *                 type: string
 *                 example: Holamundo123*
 *     responses:
 *       200:
 *         description: Contraseña restablecida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Contraseña restablecida exitosamente
 *       400:
 *         description: Token invalido o expirado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                    message:
 *                     type: string
 *                     example: Token invalido o expirado.
 *       500:
 *         description: Error interno del servidor
 */
router.post('/:token', loginController.resetPassword);

module.exports = router;
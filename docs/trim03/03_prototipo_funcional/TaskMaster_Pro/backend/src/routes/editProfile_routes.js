const { Router } = require("express");
const verificarPermiso = require('../middlewares/verificarPermiso');
const editProfileController = require("../controllers/editProfileController");
const router = Router();

/**
 * @swagger
 * /editProfile:
 *   get:
 *     summary: Obtener información del usuario logueado
 *     description: Retorna toda la información del usuario logueado en el sistema.
 *     tags:
 *       - Editar Perfil
 *     responses:
 *       200:
 *         description: Informacion del usuario obtenida con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                   message:
 *                     type: string
 *                     example: Method Get User Found
 *                   data:
 *                     type: object
 *                     properties:
 *                         id:
 *                           type: integer
 *                           example: 1
 *                         nombre:
 *                           type: string
 *                           example: Johan
 *                         apellidos:
 *                           type: string
 *                           example: Garcia
 *                         email:
 *                           type: string
 *                           example: fgfernan2508@gmail.com
 *                         telefono:
 *                           type: string
 *                           example: 3107847573
 *                         password:
 *                           type: string
 *                           example: pipe1234
 *                         rolID:
 *                           type: integer
 *                           example: 1
 *                         tipo_documento:
 *                           type: integer
 *                           example: 2
 *                   status:
 *                     type: integer
 *                     example: 200
 *       500:
 *         description: Error interno del servidor
 */
router.get('/', verificarPermiso('Modulo Usuarios', 'Editar Perfil'), editProfileController.getData);

/**
 * @swagger
 * /editProfile:
 *   post:
 *     summary: Editar perfil del usuario logueado
 *     description: Edita la informacion registrada en la BD del usuario logueado.
 *     tags:
 *       - Editar Perfil
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: Johan
 *               apellidos:
 *                 type: string
 *                 example: Garcia
 *               email:
 *                 type: string
 *                 example: johan.garcia@gmail.com
 *               telefono:
 *                 type: string
 *                 example: 3107847573
 *               password:
 *                 type: string
 *                 example: pipe1234
 *               tipo_documento:
 *                 type: integer
 *                 example: 2
 *     responses:
 *       201:
 *         description: Perfil actualizado con exito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Perfil actualizado con exito
 *       404:
 *         description: Usuario sin registrar.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                    message:
 *                     type: string
 *                     example: Unregistered user
 *       500:
 *         description: Error interno del servidor
 */
router.post('/', verificarPermiso('Modulo Usuarios', 'Editar Perfil'), editProfileController.editProfile);

router.delete('/', verificarPermiso('Modulo Usuarios', 'Cancelar Cuenta'), editProfileController.cancelUser);

module.exports = router;
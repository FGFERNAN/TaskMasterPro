/* El fragmento de código importa los módulos necesarios y configura las variables para el administrador 
del controlador de ruta para los datos de inicio de sesión del usuario. A continuación, se muestra un 
desglose: */
const { Router } = require("express");
const LoginController = require('../controllers/loginController');
const router = Router();

/* Este fragmento de código define un controlador de ruta POST mediante Express.js. A continuación, 
se muestra un desglose de lo que hace: */

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Iniciar Sesión
 *     description: Inicia sesión en el sistema.
 *     tags:
 *       - Login
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: johan.garcia@gmail.com
 *               password:
 *                 type: string
 *                 example: pipe1234
 *     responses:
 *       201:
 *         description: Inicio de sesión exitoso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1030533364
 *                 nombre:
 *                   type: string
 *                   example: Johan
 *                 apellidos:
 *                   type: string
 *                   example: Garcia
 *                 message:
 *                   type: string
 *                   example: Inicio de sesión exitoso
 *       401:
 *         description: The user not created
 *       400:
 *         description: Email and password are required
 */
router.post('/', LoginController.login);

/**
 * @swagger
 * /login:
 *   get:
 *     summary: Obtener el nombre del usuario con la sesión activa.
 *     description: Retorna un mensaje especificando el nombre del usuario que se encuentra logueado en el sistema.
 *     tags:
 *       - Login
 *     responses:
 *       200:
 *         description: Nombre de usuario obtenido con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                   nombre:
 *                     type: string
 *                     example: Nikole Bernal
 *       401:
 *         description: Usuario no autenticado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                    message:
 *                     type: string
 *                     example: Usuario no autenticado
 */
router.get('/', LoginController.session);

module.exports = router;
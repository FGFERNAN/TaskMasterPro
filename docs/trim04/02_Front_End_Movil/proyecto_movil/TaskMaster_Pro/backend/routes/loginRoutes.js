const LoginController = require('../controllers/loginControllers');

module.exports = (app) => {
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
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Usuario Autenticado
 *                 data:
 *                   type: object
 *                   properties:
 *                      id:
 *                        type: integer
 *                        example: 1030533364
 *                      nombre:
 *                        type: string
 *                        example: Johan
 *                      apellidos:
 *                        type: string
 *                        example: Garcia
 *                      email:
 *                        type: string
 *                        example: johan.garcia@gmail.com
 *                      telefono: 
 *                        type: string
 *                        example: 3107847573
 *                      rolID:
 *                        type: integer
 *                        example: 1
 *                      tipo_documento:
 *                        type: integer
 *                        example: 2
 *                      session_token:
 *                        type: string
 *                        example: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAzMDUzMzM2NCwiZW1haWwiOiJmZ2Zlcm5hbjI1MDhAZ21haWwuY29tIiwiaWF0IjoxNzQ1NDM1Njk1fQ.7jVFlJxtomv2IzgVj71bltUQl9huQQdI1iCYLrl0IjI
 *                 status:
 *                    type: integer
 *                    example: 201
 *       401:
 *         description: Password Incorrect
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Contraseña Incorrecta.
 *                 status:
 *                   type: integer
 *                   example: 401.
 *       500:
 *         description: The user not created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: El usuario no existe en la base de datos.
 *                 error:
 *                   type: string
 *                   example: Error al procesar la solicitud.
 */
    app.post('/login', LoginController.login);
}
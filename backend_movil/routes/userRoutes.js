const UserController = require("../controllers/userControllers");

module.exports = (app) => {
/**
 * @swagger
 * /users:
 *   get:
 *     summary: Obtener todos los usuarios
 *     description: Retorna una lista con todos los usuarios registrados en la base de datos.
 *     tags:
 *       - Usuarios
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                   message:
 *                     type: string
 *                     example: Method Get
 *                   data:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
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
    app.get('/users', UserController.getAllUsers);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Obtener un usuario por ID
 *     description: Retorna la información de un usuario según su ID.
 *     tags:
 *       - Usuarios
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario a obtener.
 *     responses:
 *       200:
 *         description: Información del usuario obtenida con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                   message:
 *                     type: string
 *                     example: Method Get Id User Found
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
 *       404:
 *         description: Usuario no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                    message:
 *                     type: string
 *                     example: Usuario no encontrado.
 */
    app.get('/users/:id', UserController.getUserById);

    /**
 * @swagger
 * /users:
 *   post:
 *     summary: Crear un nuevo usuario
 *     description: Agrega un nuevo usuario a la base de datos.
 *     tags:
 *       - Usuarios
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 example: 1
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
 *               rolID:
 *                 type: integer
 *                 example: 1
 *               tipo_documento:
 *                 type: integer
 *                 example: 2
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Usuario creado con éxito
 *                 data: 
 *                   type: object
 *                   properties:
 *                      id:
 *                        type: integer
 *                        example: 1
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
 *                      password:
 *                        type: string
 *                        example: pipe1234
 *                      rolID:
 *                        type: integer
 *                        example: 1
 *                      tipo_documento:
 *                        type: integer
 *                        example: 2
 *       500:
 *         description: Error interno del servidor
 */
    app.post('/users', UserController.createUser);

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Actualizar un usuario por ID.
 *     description: Realizar cambios a un usuario existente en la base de datos según su ID.
 *     tags:
 *       - Usuarios
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario a actualizar.
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
 *               rolID:
 *                 type: integer
 *                 example: 1
 *               tipo_documento:
 *                 type: integer
 *                 example: 2
 *     responses:
 *       200:
 *         description: Usuario actualizado con exito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Usuario actualizado con exito
 *                 data: 
 *                   type: object
 *                   properties:
 *                      id:
 *                        type: integer
 *                        example: 1
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
 *                      password:
 *                        type: string
 *                        example: pipe1234
 *                      rolID:
 *                        type: integer
 *                        example: 1
 *                      tipo_documento:
 *                        type: integer
 *                        example: 2
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
 *         description: Error interno en el servidor.
 */
    app.put('/users/:id', UserController.updateUser);

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Eliminar un usuario por ID
 *     description: Elimina un usuario existente de la BD según su ID.
 *     tags:
 *       - Usuarios
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario a eliminar.
 *     responses:
 *       200:
 *         description: Usuario eliminado con exito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Usuario eliminado con exito
 *       404:
 *         description: Usuario no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                    message:
 *                     type: string
 *                     example: Usuario no encontrado.
 *       400: 
 *         description: ID inválido.
 *       
 */
    app.delete('/users/:id', UserController.deleteUser);
}


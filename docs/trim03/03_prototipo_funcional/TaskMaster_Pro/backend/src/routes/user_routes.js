/* Este fragmento de código importa los módulos necesarios y establece las configuraciones iniciales 
para el controlador de ruta. A continuación, se muestra un desglose: */
const { Router } = require("express");
const verificarPermiso = require('../middlewares/verificarPermiso');
const UserController = require("../controllers/userController");
const router = Router();

/* Este bloque de código específico define una ruta que maneja una solicitud GET para recuperar todos los 
registros de la tabla "usuario" en la base de datos. A continuación, se muestra un desglose de lo que hace 
el código:*/

/**
 * @swagger
 * /user:
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
router.get('/', UserController.getAllUsers);


/* Este bloque de código específico define una ruta que maneja una solicitud GET con un parámetro dinámico 
`:id`. Cuando se realiza una solicitud GET a esta ruta con un ID de usuario específico proporcionado en la 
URL, el código intenta recuperar información sobre ese usuario en particular de la base de datos. */

/**
 * @swagger
 * /user/{id}:
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
router.get('/:id', verificarPermiso('Modulo Usuarios', 'Consultar Usuario ID'), UserController.getUserById);


/* La función `router.post('/', async (req, res) => { ... }` está manejando una solicitud POST para insertar 
un nuevo registro de usuario en la base de datos. Aquí hay un desglose de lo que hace el código: */

/**
 * @swagger
 * /user:
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
 *       500:
 *         description: Error interno del servidor
 */
router.post('/', verificarPermiso('Modulo Usuarios', 'Crear Usuario'), UserController.createUser);


/* La función `router.put('/:id', async (req, res) => { ... }` maneja una solicitud PUT para actualizar la 
información de un usuario específico en función del ID de usuario proporcionado en el parámetro URL. 
A continuación, se muestra un desglose de lo que hace el código:*/

/**
 * @swagger
 * /user/{id}:
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
router.put('/:id', verificarPermiso('Modulo Usuarios', 'Actualizar Usuario'), UserController.updateUser);


/* Esta parte del código define una ruta para manejar solicitudes DELETE para eliminar un usuario específico
según su ID. A continuación, se muestra un desglose de lo que hace el código: */

/**
 * @swagger
 * /user/{id}:
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
router.delete('/:id', verificarPermiso('Modulo Usuarios', 'Eliminar Usuario'), UserController.deleteUser);

module.exports = router;
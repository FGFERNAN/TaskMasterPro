const { Router } = require("express");
const verificarPermiso = require('../middlewares/verificarPermiso');
const RoleController = require('../controllers/roleController');
const router = Router();

/**
 * @swagger
 * /role:
 *   get:
 *     summary: Obtener todos los roles
 *     description: Retorna una lista con todos los roles registrados en la base de datos.
 *     tags:
 *       - Roles
 *     responses:
 *       200:
 *         description: Lista de roles obtenida con éxito.
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
 *                           example: Administrador
 *                         descripcion:
 *                           type: string
 *                           example: Rol que tiene acceso a todas las funciones y modulos del sistema
 *                   status:
 *                     type: integer
 *                     example: 200
 *       500:
 *         description: Error interno del servidor
 */
router.get('/', verificarPermiso('Modulo Usuarios', 'Consultar Roles'), RoleController.getAllRoles);

/**
 * @swagger
 * /role/{id}:
 *   get:
 *     summary: Obtener un rol por ID
 *     description: Retorna la información de un rol según su ID.
 *     tags:
 *       - Roles
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del rol a obtener.
 *     responses:
 *       200:
 *         description: Información del rol obtenida con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                   message:
 *                     type: string
 *                     example: Method Get Id Role Found
 *                   data: 
 *                     type: object
 *                     properties:
 *                         id:
 *                           type: integer
 *                           example: 1
 *                         nombre:
 *                           type: string
 *                           example: Administrador
 *                         descripcion:
 *                           type: string
 *                           example: Rol que tiene acceso a todas las funciones y modulos del sistema
 *                   status:
 *                     type: integer
 *                     example: 200
 *       404:
 *         description: Rol no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                    message:
 *                     type: string
 *                     example: Rol no encontrado.
 */
router.get('/:id', verificarPermiso('Modulo Usuarios', 'Consultar Rol ID'), RoleController.getRoleById);

/**
 * @swagger
 * /role:
 *   post:
 *     summary: Crear un nuevo rol
 *     description: Agrega un nuevo rol a la base de datos.
 *     tags:
 *       - Roles
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: Administrador
 *               descripcion:
 *                 type: string
 *                 example: Rol que tiene acceso a todas las funciones y modulos del sistema
 *     responses:
 *       201:
 *         description: Rol creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Rol creado con éxito
 *       500:
 *         description: Error interno del servidor
 */
router.post('/', verificarPermiso('Modulo Usuarios', 'Crear Rol'), RoleController.createRole);

/**
 * @swagger
 * /role/{id}:
 *   put:
 *     summary: Actualizar un rol por ID.
 *     description: Realizar cambios a un rol existente en la base de datos según su ID.
 *     tags:
 *       - Roles
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del rol a actualizar.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: Administrador
 *               descripcion:
 *                 type: string
 *                 example: Rol que tiene acceso a todas las funciones y modulos del sistema
 *     responses:
 *       200:
 *         description: Rol actualizado con exito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Rol actualizado con exito
 *       404:
 *         description: Rol no registrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                    message:
 *                     type: string
 *                     example: Unregistered role
 *       500:
 *         description: Error interno en el servidor.
 */
router.put('/:id', verificarPermiso('Modulo Usuarios', 'Actualizar Rol'), RoleController.updateRole);

/**
 * @swagger
 * /role/{id}:
 *   delete:
 *     summary: Eliminar un rol por ID
 *     description: Elimina un rol existente de la BD según su ID.
 *     tags:
 *       - Roles
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del rol a eliminar.
 *     responses:
 *       200:
 *         description: Rol eliminado con exito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Rol eliminado con exito
 *       404:
 *         description: Rol no existe.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                    message:
 *                     type: string
 *                     example: Role not exists
 *       400: 
 *         description: ID inválido.
 *       
 */
router.delete('/:id', verificarPermiso('Modulo Usuarios', 'Eliminar Rol'), RoleController.deleteRole);

module.exports = router;
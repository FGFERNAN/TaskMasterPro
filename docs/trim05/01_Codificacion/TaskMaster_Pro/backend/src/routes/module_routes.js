const { Router } = require("express");
const ModuleController = require('../controllers/moduleController');
const verificarPermiso = require('../middlewares/verificarPermiso');
const router = Router();

/**
 * @swagger
 * /module:
 *   get:
 *     summary: Obtener todos los modulos del sistema
 *     description: Retorna una lista con todos los modulos registrados en la base de datos.
 *     tags:
 *       - Modulos
 *     responses:
 *       200:
 *         description: Lista de modulos obtenida con éxito.
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
 *                           example: Modulo Usuarios
 *                   status:
 *                     type: integer
 *                     example: 200
 *       500:
 *         description: Error interno del servidor
 */
router.get('/', verificarPermiso('Modulo Usuarios', 'Consultar Modulos'), ModuleController.getAllModules);

/**
 * @swagger
 * /module/{id}:
 *   get:
 *     summary: Obtener un modulo del sistema por ID
 *     description: Retorna la información de un modulo según su ID.
 *     tags:
 *       - Modulos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del modulo a obtener.
 *     responses:
 *       200:
 *         description: Información del modulo obtenida con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                   message:
 *                     type: string
 *                     example: Method Get Id Module Found
 *                   data: 
 *                     type: object
 *                     properties:
 *                         id:
 *                           type: integer
 *                           example: 1
 *                         nombre:
 *                           type: string
 *                           example: Modulo Usuarios
 *                   status:
 *                     type: integer
 *                     example: 200
 *       404:
 *         description: Modulo no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                    message:
 *                     type: string
 *                     example: Modulo no encontrado
 */
router.get('/:id', verificarPermiso('Modulo Usuarios', 'Consultar Modulo ID'), ModuleController.getModuleById);

/**
 * @swagger
 * /module:
 *   post:
 *     summary: Crear un nuevo modulo del sistema
 *     description: Agrega un nuevo modulo a la base de datos.
 *     tags:
 *       - Modulos
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: Modulo Usuarios
 *     responses:
 *       201:
 *         description: Modulo creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Modulo creado con éxito
 *       500:
 *         description: Error interno del servidor
 */
router.post('/', verificarPermiso('Modulo Usuarios', 'Crear Modulo'), ModuleController.createModule);

/**
 * @swagger
 * /module/{id}:
 *   put:
 *     summary: Actualizar un modulo del sistema por ID.
 *     description: Realizar cambios a un modulo existente en la base de datos según su ID.
 *     tags:
 *       - Modulos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del modulo a actualizar.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: Modulo Usuarios
 *     responses:
 *       200:
 *         description: Modulo actualizado con exito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Modulo actualizado con exito
 *       404:
 *         description: Modulo no creado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                    message:
 *                     type: string
 *                     example: Module not create
 *       500:
 *         description: Error interno en el servidor.
 */
router.put('/:id', verificarPermiso('Modulo Usuarios', 'Actualizar Modulo'), ModuleController.updateModule);

/**
 * @swagger
 * /module/{id}:
 *   delete:
 *     summary: Eliminar un modulo del sistema por ID
 *     description: Elimina un modulo existente de la BD según su ID.
 *     tags:
 *       - Modulos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del modulo a eliminar.
 *     responses:
 *       200:
 *         description: Modulo eliminado con exito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Modulo eliminado con exito
 *       404:
 *         description: Modulo no existe.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                    message:
 *                     type: string
 *                     example: Module not exists
 *       400: 
 *         description: ID inválido.
 *       500:
 *         description: Error interno del servidor.
 *       
 */
router.delete('/:id', verificarPermiso('Modulo Usuarios', 'Eliminar Modulo'), ModuleController.deleteModule);

module.exports = router;
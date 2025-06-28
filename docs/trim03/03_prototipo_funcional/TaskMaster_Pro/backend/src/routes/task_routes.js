const { Router } = require('express');
const verificarPermiso = require('../middlewares/verificarPermiso');
const TaskController = require('../controllers/taskController');
const router = Router();

/**
 * @swagger
 * /task:
 *   get:
 *     summary: Obtener todas las tareas del sistema.
 *     description: Retorna una lista con todas las tareas registradas en la base de datos del sistema.
 *     tags:
 *       - Tareas
 *     responses:
 *       200:
 *         description: Lista de tareas obtenida con éxito.
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
 *                           example: Tarea 1
 *                         descripcion:
 *                           type: string
 *                           example: Es una tarea de ejemplo
 *                         fechaInicio:
 *                           type: date
 *                           example: 2025-04-09
 *                         fechaFin:
 *                           type: date
 *                           example: 2025-04-10
 *                         estado:
 *                           type: string
 *                           example: Pendiente
 *                         prioridad:
 *                           type: string
 *                           example: Alta
 *                         usuarioID:
 *                           type: string
 *                           example: Johan Garcia
 *                         proyectoID:
 *                           type: string
 *                           example: Software
 *                   status:
 *                     type: integer
 *                     example: 200
 *       500:
 *         description: Error interno del servidor
 *       401:
 *         description: Usuario no autenticado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                    mensaje:
 *                     type: string
 *                     example: Usuario no autenticado.
 */
router.get('/', verificarPermiso('Modulo Gestion Tareas', 'Visualizar Tarea'), TaskController.getAllTasks);

router.get('/earring/:id', verificarPermiso('Modulo Gestion Tareas', 'Visualizar Tarea'), TaskController.getTaskEarring);
router.get('/inProgress/:id', verificarPermiso('Modulo Gestion Tareas', 'Visualizar Tarea'), TaskController.getTaskInProgress);
router.get('/finished/:id', verificarPermiso('Modulo Gestion Tareas', 'Visualizar Tarea'), TaskController.getTaskFinished);
router.get('/misTareas', verificarPermiso('Modulo Gestion Tareas', 'Visualizar Tarea'), TaskController.getMyTasks);

/**
 * @swagger
 * /task/{id}:
 *   get:
 *     summary: Obtener una tarea por ID
 *     description: Retorna la información de una tarea según su ID.
 *     tags:
 *       - Tareas
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la tarea a obtener.
 *     responses:
 *       200:
 *         description: Información de la tarea obtenida con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                   message:
 *                     type: string
 *                     example: Method Get Id Task Found
 *                   data: 
 *                     type: object
 *                     properties:
 *                         id:
 *                           type: integer
 *                           example: 1
 *                         nombre:
 *                           type: string
 *                           example: Tarea 2
 *                         descripcion:
 *                           type: string
 *                           example: Es una tarea de ejemplo
 *                         fechaInicio:
 *                           type: date
 *                           example: 2025-04-09
 *                         fechaFin:
 *                           type: date
 *                           example: 2025-04-10
 *                         estado:
 *                           type: string
 *                           example: Pendiente
 *                         prioridad:
 *                           type: string
 *                           example: Alta
 *                         usuarioID:
 *                           type: integer
 *                           example: 1030533364
 *                         proyectoID:
 *                           type: integer
 *                           example: 7
 *                   status:
 *                     type: integer
 *                     example: 200
 *       404:
 *         description: Proyecto no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                    message:
 *                     type: string
 *                     example: Proyecto no encontrado.
 *       401:
 *         description: Usuario no autenticado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                    mensaje:
 *                     type: string
 *                     example: Usuario no autenticado.
 *       500:
 *         description: Error interno del servidor
 */
router.get('/:id', verificarPermiso('Modulo Gestion Tareas', 'Visualizar Tarea'), TaskController.getTaskById);

/**
 * @swagger
 * /task:
 *   post:
 *     summary: Crear una nueva tarea
 *     description: Agrega una nueva tarea a la base de datos.
 *     tags:
 *       - Tareas
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: Tarea 3
 *               descripcion:
 *                 type: string
 *                 example: Esta es una tarea de ejemplo
 *               fechaInicio:
 *                 type: date
 *                 example: 2025-04-10
 *               fechaFin:
 *                 type: date
 *                 example: 2025-04-11
 *               estado:
 *                 type: string
 *                 example: Pendiente
 *               prioridad:
 *                 type: string
 *                 example: Alta
 *               proyectoID:
 *                 type: integer
 *                 example: 7
 *     responses:
 *       201:
 *         description: Tarea creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Tarea creada con éxito
 *       401:
 *         description: Usuario no autenticado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                    mensaje:
 *                     type: string
 *                     example: Usuario no autenticado.
 *       500:
 *         description: Error interno del servidor
 */
router.post('/:id', verificarPermiso('Modulo Gestion Tareas', 'Crear Tarea'), TaskController.createTask);

/**
 * @swagger
 * /task/{id}:
 *   put:
 *     summary: Actualizar una tarea por ID.
 *     description: Realizar cambios a una tarea existente en la base de datos según su ID.
 *     tags:
 *       - Tareas
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la tarea a actualizar.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: Tarea 4
 *               descripcion:
 *                 type: string
 *                 example: Esta es una tarea de ejemplo
 *               fechaInicio:
 *                 type: date
 *                 example: 2025-04-10
 *               fechaFin:
 *                 type: date
 *                 example: 2025-04-11
 *               estado:
 *                 type: string
 *                 example: Pendiente
 *               prioridad:
 *                 type: string
 *                 example: Alta
 *               usuarioID:
 *                 type: integer
 *                 example: 1030533364
 *     responses:
 *       200:
 *         description: Tarea actualizada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Tarea actualizado con exito
 *       404:
 *         description: Tarea sin registrar.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                    message:
 *                     type: string
 *                     example: Unregistered task
 *       401:
 *         description: Usuario no autenticado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                    mensaje:
 *                     type: string
 *                     example: Usuario no autenticado.
 *       500:
 *         description: Error interno en el servidor.
 */
router.put('/:id', verificarPermiso('Modulo Gestion Tareas', 'Editar Tarea'), TaskController.updateTask);

/**
 * @swagger
 * /task/{id}:
 *   delete:
 *     summary: Eliminar una tarea por ID
 *     description: Elimina una tarea existente de la BD según su ID.
 *     tags:
 *       - Tareas
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la tarea a eliminar.
 *     responses:
 *       200:
 *         description: Tarea eliminada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Tarea eliminada con exito
 *       404:
 *         description: Tarea no encontrada.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                    message:
 *                     type: string
 *                     example: Tarea no encontrada.
 *       401:
 *         description: Usuario no autenticado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                    mensaje:
 *                     type: string
 *                     example: Usuario no autenticado.
 *       400: 
 *         description: ID inválido.
 *       500:
 *         description: Error interno en el servidor.
 *       
 */
router.delete('/:id', verificarPermiso('Modulo Gestion Tareas', 'Eliminar Tarea'), TaskController.daleteTask);

module.exports = router;
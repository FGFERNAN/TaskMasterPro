const { Router } = require("express");
const verificarPermiso = require('../middlewares/verificarPermiso');
const ProjectController = require("../controllers/projectController");
const router = Router();

/**
 * @swagger
 * /project:
 *   get:
 *     summary: Obtener los proyectos de un usuario.
 *     description: Retorna una lista con todos los proyectos que tenga el usuario logueado registrados en la base de datos.
 *     tags:
 *       - Proyectos
 *     responses:
 *       200:
 *         description: Lista de proyectos obtenida con éxito.
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
 *                           example: Veterinaria
 *                         descripcion:
 *                           type: string
 *                           example: Es un proyecto para manejar el historial clinico de una veterinaria
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
 *                         etiquetasID:
 *                           type: string
 *                           example: null
 *                   status:
 *                     type: integer
 *                     example: 200
 *       500:
 *         description: Error interno del servidor
 */
router.get('/', verificarPermiso('Modulo Gestion Proyecto', 'Visualizar Proyecto'), ProjectController.getProjects);

/**
 * @swagger
 * /project/plantillas:
 *   get:
 *     summary: Obtener las plantillas de proyectos del sistema.
 *     description: Retorna una lista con todos las plantillas de proyectos registradas en la base de datos.
 *     tags:
 *       - Proyectos
 *     responses:
 *       200:
 *         description: Lista de proyectos obtenida con éxito.
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
 *                           example: Veterinaria
 *                         descripcion:
 *                           type: string
 *                           example: Es un proyecto para manejar el historial clinico de una veterinaria
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
 *                         etiquetasID:
 *                           type: string
 *                           example: null
 *                   status:
 *                     type: integer
 *                     example: 200
 *       500:
 *         description: Error interno del servidor
 */
router.get('/plantillas', verificarPermiso('Modulo Gestion Proyecto', 'Visualizar Proyecto'), ProjectController.getPlantillasProyecto);

/**
 * @swagger
 * /project/{id}:
 *   get:
 *     summary: Obtener un proyecto por ID
 *     description: Retorna la información de un proyecto según su ID.
 *     tags:
 *       - Proyectos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del proyecto a obtener.
 *     responses:
 *       200:
 *         description: Información del proyecto obtenida con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                   message:
 *                     type: string
 *                     example: Method Get Id Project Found
 *                   data: 
 *                     type: object
 *                     properties:
 *                         id:
 *                           type: integer
 *                           example: 1
 *                         nombre:
 *                           type: string
 *                           example: Veterinaria
 *                         descripcion:
 *                           type: string
 *                           example: Es un proyecto para manejar el historial clinico de una veterinaria
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
 *                         etiquetasID:
 *                           type: string
 *                           example: null
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
 */
router.get('/:id', verificarPermiso('Modulo Gestion Proyecto', 'Visualizar Proyecto'), ProjectController.getProjectById);

/**
 * @swagger
 * /project/miembros/{id}:
 *   get:
 *     summary: Obtener los miembros de un proyecto.
 *     description: Retorna una lista de usuarios que estan asignados a un proyecto especifico.
 *     tags:
 *       - Proyectos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del proyecto a obtener.
 *     responses:
 *       200:
 *         description: Información del proyecto obtenida con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                   message:
 *                     type: string
 *                     example: Method Get
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
 *                   status:
 *                     type: integer
 *                     example: 200
 *       500:
 *         description: Proyecto sin miembros.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                    message:
 *                     type: string
 *                     example: Este proyecto no tiene ningun miembro asignado.
 */
router.get('/miembros/:id', verificarPermiso('Modulo Gestion Proyecto', 'Visualizar Proyecto'), ProjectController.getProjectMembers);

/**
 * @swagger
 * /project:
 *   post:
 *     summary: Crear un nuevo proyecto
 *     description: Agrega un nuevo proyecto a la base de datos.
 *     tags:
 *       - Proyectos
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: Veterinaria
 *               descripcion:
 *                 type: string
 *                 example: Es un proyecto para manejar el historial clinico de una veterinaria
 *               fechaInicio:
 *                 type: date
 *                 example: 2025-04-10
 *               fechaFin:
 *                 type: date
 *                 example: 2025-04-11
 *               estado:
 *                 type: string
 *                 example: Pendiente
 *               Prioridad:
 *                 type: string
 *                 example: Alta
 *               etiquetasID:
 *                 type: string
 *                 example: null
 *     responses:
 *       201:
 *         description: Proyecto creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Proyecto creado con éxito
 *       500:
 *         description: Error interno del servidor
 */
router.post('/', verificarPermiso('Modulo Gestion Proyecto', 'Crear Proyecto'), ProjectController.createProject);

/**
 * @swagger
 * /project/plantillas:
 *   post:
 *     summary: Crear una nueva plantilla.
 *     description: Agrega una nueva plantilla de proyeccto a la base de datos.
 *     tags:
 *       - Proyectos
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: Veterinaria
 *               descripcion:
 *                 type: string
 *                 example: Es un proyecto para manejar el historial clinico de una veterinaria
 *               estado:
 *                 type: string
 *                 example: Pendiente
 *               Prioridad:
 *                 type: string
 *                 example: Alta
 *     responses:
 *       201:
 *         description: Proyecto creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Proyecto creado con éxito
 *       500:
 *         description: Error interno del servidor
 */
router.post('/plantillas', verificarPermiso('Modulo Gestion Proyecto', 'Crear Proyecto'), ProjectController.createProject);

/**
 * @swagger
 * /project/miembros/{id}:
 *   post:
 *     summary: Añadir miembros a un proyecto.
 *     description: Agrega un usuario creado a un proyecto creado en la base de datos.
 *     tags:
 *       - Proyectos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del proyecto al que quiere agregar el miembro.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               usuarioID:
 *                 type: integer
 *                 example: 1030533364
 *     responses:
 *       200:
 *         description: Usuario asignado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Usuario asignado con exito
 *       500:
 *         description: El usuario ya esta asignado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: El miembro que quieres agregar ya se encuentra asignado a este proyecto
 */
router.post('/miembros/:id', verificarPermiso('Modulo Gestion Proyecto', 'Agregar Miembros Proyecto'), ProjectController.addMembers);

/**
 * @swagger
 * /project/{id}:
 *   put:
 *     summary: Actualizar un proyecto por ID.
 *     description: Realizar cambios a un proyecto existente en la base de datos según su ID.
 *     tags:
 *       - Proyectos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del proyecto a actualizar.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: Veterinaria
 *               descripcion:
 *                 type: string
 *                 example: Es un proyecto para manejar el historial clinico de una veterinaria
 *               fechaInicio:
 *                 type: date
 *                 example: 2025-04-10
 *               fechaFin:
 *                 type: date
 *                 example: 2025-04-11
 *               estado:
 *                 type: string
 *                 example: Pendiente
 *               Prioridad:
 *                 type: string
 *                 example: Alta
 *     responses:
 *       200:
 *         description: Proyecto actualizado con exito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Proyecto actualizado con exito
 *       404:
 *         description: Proyecto sin registrar.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                    message:
 *                     type: string
 *                     example: Unregistered project
 *       500:
 *         description: Error interno en el servidor.
 */
router.put('/:id', verificarPermiso('Modulo Gestion Proyecto', 'Editar Proyecto'), ProjectController.updateProject);

/**
 * @swagger
 * /project/{id}:
 *   delete:
 *     summary: Eliminar un proyecto por ID
 *     description: Elimina un proyecto existente de la BD según su ID.
 *     tags:
 *       - Proyectos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del proyecto a eliminar.
 *     responses:
 *       200:
 *         description: Proyecto eliminado con exito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Proyecto eliminado con exito
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
 *       400: 
 *         description: ID inválido.
 *       
 */
router.delete('/:id', verificarPermiso('Modulo Gestion Proyecto', 'Eliminar Proyecto'), ProjectController.deleteProject);

/**
 * @swagger
 * /project/miembros/{id}:
 *   delete:
 *     summary: Eliminar miembros a un proyecto.
 *     description: Elimina un miembro de un proyecto creado en la base de datos.
 *     tags:
 *       - Proyectos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del proyecto al que quieres eliminar el miembro.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               usuarioID:
 *                 type: integer
 *                 example: 1030533364
 *     responses:
 *       200:
 *         description: Usuario eliminado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Miembro eliminado con exito
 *       400:
 *         description: Usuario no asignado al proyecto
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: El miembro que quieres eliminar no se encuentra asignado a este proyecto
 *       500:
 *         description: Error interno en el servidor.
 */
router.delete('/miembros/:id', verificarPermiso('Modulo Gestion Proyecto', 'Eliminar Miembros Proyecto'), ProjectController.deleteMembers);

module.exports = router;
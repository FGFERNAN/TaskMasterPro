const { Router } = require('express');
const verificarPermiso = require('../middlewares/verificarPermiso');
const TaskController = require('../controllers/taskController');
const router = Router();

router.get('/', TaskController.getAllTasks);

module.exports = router;
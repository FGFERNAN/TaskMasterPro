const { Router } = require("express");
// const verificarPermiso = require('../middlewares/verificarPermiso');
const ProjectController = require("../controllers/projectController");
const router = Router();

router.get('/', ProjectController.getAllProjects);
router.get('/:id', ProjectController.getProjectById);
router.post('/', ProjectController.createProject);
router.put('/:id', ProjectController.updateProject);
router.delete('/:id', ProjectController.deleteProject);

module.exports = router;
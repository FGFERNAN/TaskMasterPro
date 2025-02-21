const { Router } = require("express");
const verificarPermiso = require('../middlewares/verificarPermiso');
const editProfileController = require("../controllers/editProfileController");
const router = Router();

router.get('/', verificarPermiso('Modulo Usuarios', 'Editar Perfil'), editProfileController.getData);

router.post('/', verificarPermiso('Modulo Usuarios', 'Editar Perfil'), editProfileController.editProfile);

router.delete('/', verificarPermiso('Modulo Usuarios', 'Cancelar Cuenta'), editProfileController.cancelUser);

module.exports = router;
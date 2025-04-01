const { Router } = require("express");
const loginController = require("../controllers/loginController");
const router = Router();

router.post('/', loginController.recoveryPassword);

router.post('/:token', loginController.resetPassword);

module.exports = router;
const { Router } = require("express");
const editProfileController = require("../controllers/editProfileController");
const router = Router();

router.get('/', editProfileController.getData);

router.post('/', editProfileController.editProfile);

module.exports = router;
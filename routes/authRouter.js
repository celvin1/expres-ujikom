const router = require("express").Router();
const authController = require("../controllers/authController");

router.post("/api/v1/Login", authController.login);
router.post("/api/v1/register", authController.register);
router.post("/api/v1/logout", authController.logout);

module.exports = router;
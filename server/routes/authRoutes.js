const express = require("express");

const router = express.Router();

const authController = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/test", (req, res) => {
    res.json({
        message: "Auth route is working!"
    });
});

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/me", authMiddleware.verifyToken, authController.getMe);
router.patch("/me/username", authMiddleware.verifyToken, authController.updateUsername);
router.patch("/me/password", authMiddleware.verifyToken, authController.updatePassword);
router.patch("/me/avatar", authMiddleware.verifyToken, authController.updateAvatar);
router.post("/me/experience", authMiddleware.verifyToken, authController.addExperience);

module.exports = router;

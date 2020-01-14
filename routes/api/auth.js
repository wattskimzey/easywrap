const router = require("express").Router();
const authController = require("../../controllers/authController");

router.route("/signup")
  .post(authController.newUser);

router.route("/login")
  .post(authController.login);

router.route("/logout")
  .post(authController.logout);

router.route("/getAuthStatus")
  .get(authController.getAuthStatus);

module.exports = router;
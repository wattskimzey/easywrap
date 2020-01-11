const router = require("express").Router();
const authController = require("../../controllers/authController");

router.route("/signup")
  .post(authController.newUser);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(authController.findById)
//   .put(authController.update)
//   .delete(authController.remove);

// router
//   .route("/saved")
//   .get(authController.findAll)

module.exports = router;
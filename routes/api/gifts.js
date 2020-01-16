const router = require("express").Router();
const giftController = require("../../controllers/giftController");

router.route("/home")
  .get(giftController.home);

router.route("/search")
  .get(giftController.search);

module.exports = router;
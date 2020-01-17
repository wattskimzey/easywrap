const router = require("express").Router();
const giftController = require("../../controllers/giftController");

router.route("/home")
  .get(giftController.home);

router.route("/search")
  .get(giftController.search);

router.route("/save")
  .post(giftController.save);

router.route("/saved")
  .get(giftController.getSavedGifts);

router.route("/delete/:id")
  .delete(giftController.deleteGift);

module.exports = router;
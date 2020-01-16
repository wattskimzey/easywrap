const router = require("express").Router();
const authRoutes = require("./auth");
const giftRoutes = require("./gifts");

// Book routes
router.use("/auth", authRoutes);
router.use("/gifts", giftRoutes);

module.exports = router;
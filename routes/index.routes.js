const express = require("express");
const router = express.Router();
const cors = require("cors");
router.use(cors());

const userRoute = require("./users.js");
const restaurantRoute = require("./restaurant.js");
const restaurantProfileRoute = require("./restaurantProfile.js");
const addressRoute = require("./address.js");

router.use("/api/user", userRoute);
router.use("/api/restaurantUser", restaurantRoute);
router.use("/api/restaurantProfile", restaurantProfileRoute);
router.use("/api/user/address", addressRoute);

router.get("/api", (req, res, next) => {
  res.status(200).json({ message: "Shit Happens 💩" });
});

module.exports = router;
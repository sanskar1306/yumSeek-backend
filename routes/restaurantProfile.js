const express = require("express");
const router = express.Router();
const restaurantProfileController = require("../controllers/restaurantProfile.controller.js");

router.get('/', restaurantProfileController.getAllRestaurantProfile);
router.get('/restaurant/:id', restaurantProfileController.getRestaurantProfileById);
router.post('/createProfile', restaurantProfileController.createRestaurantProfile);
router.post('/updateProfile', restaurantProfileController.updateRestaurantProfile);

module.exports = router;

const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const restaurantProfileController = require("../controllers/restaurantProfile.controller.js");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/uploads/restaurantProfile");
    },
    filename: function (req, file, cb) {
        cb(
          null,
          new Date().getTime().toString() +
            "-" +
            file.fieldname +
            path.extname(file.originalname)
        );
    }
});

const upload = multer({ dest: "uploads/" });
router.get('/', restaurantProfileController.getAllRestaurantProfile);
router.get('/restaurant/:id', restaurantProfileController.getRestaurantProfileById);
router.post('/createProfile', restaurantProfileController.createRestaurantProfile);
router.post('/updateProfile', restaurantProfileController.updateRestaurantProfile);

module.exports = router;

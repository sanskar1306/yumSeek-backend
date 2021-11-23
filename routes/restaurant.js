const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth.js");
const { getAllRestaurants,login,register,getRestaurantUser,deleteRestaurantUser } =require("../controllers/restaurant.controller.js");


router.get('/', getAllRestaurants);
router.post('/login', login);
router.post('/register', register);
router.get('/user', auth.verifyToken, getRestaurantUser);
router.delete('/user/account', auth.verifyToken, deleteRestaurantUser);


module.exports = router;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth = require("../middlewares/auth.js");
const restaurant = require("../models/restaurant.model.js");
const restaurantProfile = require("../models/restaurantProfile.model.js");
const Joi = require("@hapi/joi");

const getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await restaurantProfile.find();
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json(error);
  }
};

const createProfile = async (req, res) => {
  try {
  } catch (error) {}
};

const updateProfile = async (req, res) => {
  try {
  } catch (error) {}
};

const getRestaurantProfileById = async (req, res) => {};

module.exports = { getAllRestaurants, createProfile, updateProfile };

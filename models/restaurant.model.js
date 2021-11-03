const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  vegClass: { type: String, enum: ["Veg", "Non-veg"], required: true },
  createdAt: { type: Date, default: Date.now },
  reviews: [
    {
      user: { type: Schema.Types.ObjectId, ref: "User" },
      rating: { type: Number, default: 0 },
      description: { type: String },
    },
  ],
  rating: { type: Number, default: 0 },
  openTime: { type: String, required: true },
  closeTime: { type: String, required: true },
  cuisines: [
    {
      type: String,
    },
  ],
  deliverytime: {
    type: String,
  },
  phone: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Restaurant", RestaurantSchema);

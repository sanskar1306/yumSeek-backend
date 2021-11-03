const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  restaurant_id: {
    type: Schema.Types.ObjectId,
    ref: "Restaurant",
    required: true,
  },
  item: [
    {
      name: String,
      description: String,
      price: Number,
      picture: String,
      deliverytime: String,
      extras: [
        {
          itemname: String,
          itemprice: Number,
        },
      ],
    },
  ],
  creation_date: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    default: "pending",
  },
  paymenttype: {
    type: String,
  },
  paymentstatus: {
    type: String,
  },
  delivery_date: {
    type: Date,
  },
  deliveryarea: {
    type: String,
  },
  deliveryaddress: {
    type: String,
  },
});



module.exports = mongoose.model("Order", OrderSchema);

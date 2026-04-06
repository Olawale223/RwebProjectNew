import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  customer: {
    name: String,
    email: String,
  },
  cart: [
    {
      productId: String,
      name: String,
      qty: Number,
      price: Number,
    },
  ],
  payment: Object,
  status: { type: String, default: "pending" },
});

const Order = mongoose.model("Order", orderSchema);
export default Order;

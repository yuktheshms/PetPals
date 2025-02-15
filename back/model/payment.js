const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PaymentSchema = new Schema({
  name: {
    type: String,
  },
  amount: {
    type: String,
  },
});

module.exports = mongoose.model("donate", PaymentSchema);

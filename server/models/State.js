const mongoose = require("mongoose");

const stateSchema = new mongoose.Schema({
  state: String,
  timestamp: String,
});

module.exports = mongoose.model("State", stateSchema);

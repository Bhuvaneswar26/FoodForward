const mongoose = require("mongoose");

// Define the schema and model
const DecomposeSchema = new mongoose.Schema({
  organizerName: { type: String, required: true },
  email: { type: String, required: true },
  contact: { type: String, required: true },
  eventAddress: { type: String, required: true },
  desc: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  foodType: { type: String, required: true }, // 'veg' or 'nonveg'
});

const decomposelargeschema = mongoose.model("Decompose", DecomposeSchema);

module.exports = decomposelargeschema;

const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String }, // optional field for images
});

module.exports = mongoose.model("Project", projectSchema);

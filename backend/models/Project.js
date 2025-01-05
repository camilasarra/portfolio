const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  technologies: [String],
  image: { type: String }, // URL de la imagen
  link: { type: String },  // Enlace al proyecto
});

module.exports = mongoose.model("Project", ProjectSchema);

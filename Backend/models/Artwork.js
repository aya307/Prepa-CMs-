const mongoose = require('mongoose');

const ArtworkSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  category: { type: String },
  imageUrl: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Artwork', ArtworkSchema);

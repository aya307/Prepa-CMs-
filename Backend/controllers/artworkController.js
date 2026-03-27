const Artwork = require('../models/Artwork');

exports.getArtworks = async (req, res) => {
  try {
    const { category } = req.query;
    const filter = {};
    if (category) filter.category = category;
    const artworks = await Artwork.find(filter).sort({ createdAt: -1 });
    res.json(artworks);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getArtwork = async (req, res) => {
  try {
    const art = await Artwork.findById(req.params.id);
    if (!art) return res.status(404).json({ message: 'Not found' });
    res.json(art);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.createArtwork = async (req, res) => {
  try {
    const newArt = new Artwork(req.body);
    const saved = await newArt.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateArtwork = async (req, res) => {
  try {
    const updated = await Artwork.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteArtwork = async (req, res) => {
  try {
    const deleted = await Artwork.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

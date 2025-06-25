const mongoose = require('mongoose')

const answerSchema = new mongoose.Schema({
  id: Number,
  fen: String, // Add FEN field for the starting position
  answer: [String], // Store moves in SAN (e.g., ["Nxe5", "Nxe5", "Qh5#"])
  text: String, // Keep problem description
  difficulty: String, // Optional: add difficulty rating
  theme: String // Optional: add tactical theme (fork, pin, etc.)
}, { collection: 'chessproblems' });

const Answer = mongoose.model('Answer', answerSchema);

module.exports = Answer;
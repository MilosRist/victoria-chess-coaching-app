const mongoose = require('mongoose')

const answerSchema = new mongoose.Schema({
  id: Number,
  answer: [String], 
  opponent: [String],      
  image: String,
  text: String
  }, { collection: 'chessproblems' });  
            
const Answer = mongoose.model('Answer', answerSchema);

module.exports = Answer;
const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

require('dotenv').config( { path: '../.env' } );


const url = process.env.MONGODB_URI;

mongoose.set('strictQuery',false)

mongoose.connect(url)

const answerSchema = new mongoose.Schema({
  id: Number,
  answer: [String], 
  opponent: [String],      
  image: String,
  text: String
  }, { collection: 'chessproblems' });  
            
const Answer = mongoose.model('Answer', answerSchema);

const answer = new Answer({
  id: 0, 
  answer: ["qg7#"], 
  opponent: [""], 
  image: "set1problem1", 
  text: "1. White to move. Mate in 1"
})

answer.save().then(result => {
  console.log('answer saved!')
  mongoose.connection.close()
})
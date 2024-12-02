const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.env.DB_PASSWORD || 'Misa862124';

const url = `mongodb+srv://ristovicmilos123:${password}@restaurantdata.okhorf4.mongodb.net/?retryWrites=true&w=majority&appName=restaurantData`

mongoose.set('strictQuery',false)

mongoose.connect(url)

const answerSchema = new mongoose.Schema({
  id: Number,
  answer: [String], 
  opponent: [String],      // add any additional fields here
  image: String,
  text: String
  }, { collection: 'chessproblems' });  // explicitly set the collection name
            
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
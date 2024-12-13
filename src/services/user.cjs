const mongoose = require('mongoose')
const path = require('path');
const baseUrl = '/api/users'

require('dotenv').config();
console.log('MongoDB URI:', process.env.MONGODB_URI);

const url = process.env.MONGODB_URI;

mongoose.set('strictQuery',false)

mongoose
  .connect(url)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });

const userSchema = new mongoose.Schema({
  username: {    
    type: String,    
    required: true,    
    unique: true // this ensures the uniqueness of username  
    },
  name: String,
  passwordHash: String,
  questions_answered: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Question'
    }
  ],
})

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    // the passwordHash should not be revealed
    delete returnedObject.passwordHash
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User
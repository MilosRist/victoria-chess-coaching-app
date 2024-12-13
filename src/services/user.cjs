const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {    
    type: String,    
    required: true,    
    unique: true // ensures the uniqueness of username  
  },
  name: String,
  passwordHash: String,
  questions_answered: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'chessproblems' // Ensure this matches your related collection name
    }
  ],
}, 
{ 
  collection: 'users' // Ensure it uses your "users" collection in MongoDB
});

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    // the passwordHash should not be revealed
    delete returnedObject.passwordHash;
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User; // Export the User model

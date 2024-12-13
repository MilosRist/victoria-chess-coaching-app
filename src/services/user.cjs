const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  _id: String,
  id: Number,
  username: {    
    type: String,    
    required: true,    
    unique: true 
  },
  passwordHash: String,
  questions_answered: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Answer' 
    }
  ],
}, 
{ 
  collection: 'users' 
});

 userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.passwordHash;
  }
}); 

const User = mongoose.model('User', userSchema);

module.exports = User; // Export the User model

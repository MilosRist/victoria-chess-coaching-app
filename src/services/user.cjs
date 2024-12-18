const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {    
    type: String,    
    required: true,    
    unique: true, 
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 
  },
  passwordHash: {
    type: String,
    required: true,
  },
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
    returnedObject.id = returnedObject._id.toString(); // Convert _id to string
    delete returnedObject._id; // Remove the original _id field
    delete returnedObject.__v; // Remove the __v field
    delete returnedObject.passwordHash; // Exclude hashed password from output
  }
}); 

const User = mongoose.model('User', userSchema);

module.exports = User; // Export the User model

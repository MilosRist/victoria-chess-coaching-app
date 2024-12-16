const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const User = require('./src/services/user.cjs'); // Adjust the path if needed

require('dotenv').config();

const createUser = async () => {
  try {
    // Connect to MongoDB
    const mongoUrl = "mongodb+srv://ristovicmilos123:Misa862124@restaurantdata.okhorf4.mongodb.net/chesssite?retryWrites=true&w=majority&appName=chesssite";
    await mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');

    // Delete all existing users (optional, for testing purposes)
    await User.deleteMany({});
    console.log('All users deleted');

    // Hash the password
    const password = 'sekret'; // Replace with your desired password
    const passwordHash = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      username: 'root', // Replace with your desired username
      name: 'Admin User', // Optional, replace with a name
      passwordHash,
    });

    // Save the user to the database
    await newUser.save();
    console.log('User created:', newUser);

    // Close the database connection
    mongoose.connection.close();
    console.log('MongoDB connection closed');
  } catch (error) {
    console.error('Error creating user:', error.message);
    mongoose.connection.close();
  }
};

createUser();

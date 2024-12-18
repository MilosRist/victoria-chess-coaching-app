const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const User = require('./src/services/user.cjs'); // Adjust the path if needed

require('dotenv').config();

const createUser = async () => {
  try {

    const mongoUrl = process.env.MONGODB_URI;
    await mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');

    const password = 'sekret'; // Replace with your desired password
    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = new User({
      username: 'root', // Replace with your desired username
      name: 'Admin User', // Optional, replace with a name
      passwordHash,
    });

    await newUser.save();
    console.log('User created:', newUser);

    mongoose.connection.close();
    console.log('MongoDB connection closed');
  } catch (error) {
    console.error('Error creating user:', error.message);
    mongoose.connection.close();
  }
};

createUser();

const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../services/user.cjs'); // Adjust path to where your User model is located
const Answer = require('../services/chessproblems.cjs')

const usersRouter = express.Router();

usersRouter.post('/', async (request, response) => {
  try {
    const { username, name, password } = request.body;

    if (!username || !password) {
      return response.status(400).json({ error: 'Username and password are required' });
    }

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return response.status(400).json({ error: 'Username already exists' });
    }

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const user = new User({
      username,
      name,
      passwordHash,
    });

    const savedUser = await user.save();
    response.status(201).json(savedUser);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: 'Internal server error' });
  }
});

usersRouter.get('/', async (request, response) => {
  try {
    const users = await User.find({}).populate('questions_answered');
    response.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    response.status(500).json({ error: 'Failed to retrieve users' });
  }
});


module.exports = usersRouter;

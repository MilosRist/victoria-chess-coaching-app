const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const baseUrl = '/api/answers'
const usersRouter = require('../controllers/users.cjs'); // Adjust path if needed
const User = require('./user.cjs');

require('dotenv').config({ path: '../.env' });

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors()); 
app.use(express.json());

const url = process.env.MONGODB_URI;
console.log('MongoDB URI:', process.env.MONGODB_URI);

mongoose.set('strictQuery', false);
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.error('Error connecting to MongoDB:', error));

const answerSchema = new mongoose.Schema({
    id: Number,
    answer: [String], 
    opponent: [String],     
    image: String,
    text: String
    }, { collection: 'chessproblems' });                     
const Answer = mongoose.model('Answer', answerSchema);

app.use('/api/users', usersRouter); // Add the user route

const buildPath = path.join('dist'); 
app.use(express.static(buildPath));

app.get('/api/answers', async (req, res) => {
    try {
        const answers = await Answer.find().sort({ id: 1 });
        console.log(answers)
        res.json(answers);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve answers' });
    }
});

app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find(); 
        console.log(users); 
        res.json(users); 
    } catch (error) {
        console.error('Error fetching users:', error); // Log any errors
        res.status(500).json({ error: 'Failed to retrieve users' }); // Return error response if something goes wrong
    }
  });

app.get('*', (req, res) => {
  res.sendFile(path.join('dist', 'index.html'));
});

console.log(users)

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
});



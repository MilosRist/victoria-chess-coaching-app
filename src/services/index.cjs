const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const baseUrl = '/api/answers'

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors()); // Allows cross-origin requests
app.use(express.json());

const password = process.env.DB_PASSWORD || 'Misa862124';
const url = `mongodb+srv://ristovicmilos123:${password}@restaurantdata.okhorf4.mongodb.net/chesssite?retryWrites=true&w=majority&appName=chesssite`;

// Define an API endpoint to get answers
app.get('/api/answers', async (req, res) => {
    try {
        const answers = await Answer.find().sort({ id: 1 });
        console.log(answers)
        res.json(answers);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve answers' });
    }
});

// Serve static files from the React app build folder
app.use(express.static(path.join(__dirname, 'build')));

// Catch-all route to serve React's index.html for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

mongoose.set('strictQuery', false);
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.error('Error connecting to MongoDB:', error));

    const answerSchema = new mongoose.Schema({
        id: Number,
        answer: [String], 
        opponent: [String],      // add any additional fields here
        image: String,
        text: String
        }, { collection: 'chessproblems' });  // explicitly set the collection name
                
const Answer = mongoose.model('Answer', answerSchema);

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
});



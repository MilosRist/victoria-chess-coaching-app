const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const baseUrl = '/api/answers'
const helmet = require('helmet');

const app = express();
app.use(cors()); // Allows cross-origin requests
app.use(express.json());

app.use(
    helmet.contentSecurityPolicy({
      directives: {
        defaultSrc: ["'self'"],
        imgSrc: ["'self'", "https://victoria-chess-coaching-app.onrender.com"],
        scriptSrc: ["'self'"],
        styleSrc: ["'self'"],
      },
    })
  );
  
app.use(express.static('public'));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Catch-all handler to return React's index.html for unknown routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const password = process.env.DB_PASSWORD || 'Misa862124';
const url = `mongodb+srv://ristovicmilos123:${password}@restaurantdata.okhorf4.mongodb.net/chesssite?retryWrites=true&w=majority&appName=chesssite`;

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

const PORT = process.env.PORT || 3001;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
});

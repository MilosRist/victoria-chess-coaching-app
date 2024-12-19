const mongoose = require('mongoose');
const express = require('express');
const addQuestionRouter = express.Router();
const User = require('../services/user.cjs'); 
const Answer = require('../services/chessproblems.cjs');

addQuestionRouter.post('/add-question', async (req, res) => {
    try {
        const { userId, questionId } = req.body;

        if (!userId || !questionId) {
            return res.status(400).json({ message: 'Missing required fields.' });
        }

        const answer = await Answer.findById(questionId);
        if (!answer) {
            return res.status(404).json({ message: 'Answer not found.' });
        }

        const user = await User.findById(mongoose.Types.ObjectId(userId));
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        if (!user.questions_answered.includes(questionId)) {
            user.questions_answered.push(questionId);
            await user.save();
        }

        res.status(200).json({ message: 'Answer added successfully.' });
    } catch (error) {
        console.error('Error in add-question route:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = addQuestionRouter;

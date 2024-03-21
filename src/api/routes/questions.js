const express = require('express');
const { getAllQuestions, getQuestionById, createQuestion, updateQuestion, deleteQuestion } = require('../airtableClient');

const router = express.Router();

router.get('/test-airtable', async (req, res) => {
    try {
        const records = await getAllQuestions();
        res.json(records);
    } catch (error) {
        console.error('Error fetching from Airtable:', error);
        res.status(500).json({ error: 'Failed to fetch data from Airtable' });
    }
});


module.exports = router;

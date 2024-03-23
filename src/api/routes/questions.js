const express = require('express');
const { getAllQuestions, getQuestionById, createQuestion, updateQuestion, deleteQuestion, searchQuestions } = require('../airtableClient');

const router = express.Router();

// Get all questions
router.get('/', async (req, res) => {
    console.log(req.headers);
    const questions = await getAllQuestions();
    res.json(questions);
});


router.get('/search', async (req, res) => {
    try {
        const searchQuery = req.query.q;
        const results = await searchQuestions(searchQuery);
        res.json(results);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Get a single question by id
router.get('/:id', async (req, res) => {
    const question = await getQuestionById(req.params.id);
    res.json(question);
});

// Create a new question
router.post('/', async (req, res) => {
    try {
        const newQuestion = await createQuestion(req.body);
        res.status(201).json(newQuestion);
    } catch (error) {
        console.error('Error creating new question:', error);
        res.status(500).json({ error: 'Internal server error' }); 
    }
});

// Update a question
router.put('/:id', async (req, res) => {
    const updatedQuestion = await updateQuestion(req.params.id, req.body);
    res.json(updatedQuestion);
});

// Delete a question
router.delete('/:id', async (req, res) => {
    await deleteQuestion(req.params.id);
    res.status(204).end();
});

module.exports = router;

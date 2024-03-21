//table id: tblFCiWJkpdqOpkrv

// src/api/airtableClient.js
const Airtable = require('airtable');
const { airtable } = require('../config'); // Adjust the path as necessary

Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: airtable.accessToken,
});

const base = Airtable.base(airtable.baseId);

const table = base('tblFCiWJkpdqOpkrv'); // Replace 'Questions' with your actual table name

// Fetch all questions
async function getAllQuestions() {
    const records = await table.select().all();
    return records.map(record => ({ id: record.id, ...record.fields }));
}

// Fetch a question by ID
async function getQuestionById(id) {
    const record = await table.find(id);
    return { id: record.id, ...record.fields };
}

// Add a new question
async function createQuestion(fields) {
    const createdRecord = await table.create(fields);
    return { id: createdRecord.id, ...createdRecord.fields };
}

// Update a question
async function updateQuestion(id, fields) {
    const updatedRecord = await table.update(id, fields);
    return { id: updatedRecord.id, ...updatedRecord.fields };
}

// Delete a question
async function deleteQuestion(id) {
    await table.destroy(id);
    return { success: true, id };
}

module.exports = {
    getAllQuestions,
    getQuestionById,
    createQuestion,
    updateQuestion,
    deleteQuestion,
};




//table id: tblFCiWJkpdqOpkrv
const Airtable = require('airtable');
const { airtable } = require('../config');

Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: airtable.accessToken,
});

const base = Airtable.base(airtable.baseId);

const table = base('tblFCiWJkpdqOpkrv');

// Fetch all questions
async function getAllQuestions() {
    const records = await table.select().all();
    return records.map(record => ({ id: record.id, ...record.fields }));
}

// Fuzzy Search
async function searchQuestions(searchQuery) {
    const sanitizedQuery = searchQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // Sanitize the search string
    const regex = new RegExp(sanitizedQuery, 'i'); // 'i' for case-insensitive search
    const records = await table.select().all();
    return records
        .map(record => ({ id: record.id, ...record.fields }))
        .filter(record => regex.test(record.Question) || regex.test(record.Answer));
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
    searchQuestions,
};




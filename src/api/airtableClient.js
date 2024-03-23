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
    const sanitizedQuery = searchQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
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

// Create a question 
async function createQuestion(fields) {
    try {
        const createdRecord = await table.create(fields); 
        return { id: createdRecord.id, ...createdRecord.fields };
    } catch (error) {
        console.error('Error creating new question:', error);
        throw error;
    }
}

// Update a question
async function updateQuestion(recordId, fields) {
    try {
        const updatedRecord = await table.update(recordId, fields);
        return { id: updatedRecord.id, ...updatedRecord.fields };
    } catch (error) {
        console.error('Error updating question:', error);
        throw error;
    }
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




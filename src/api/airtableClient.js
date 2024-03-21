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


module.exports = {
    getAllQuestions,
};




// src/config/index.js
require('dotenv').config();

// Enhanced error handling for missing environment variables
if (!process.env.AIRTABLE_PERSONAL_ACCESS_TOKEN || !process.env.AIRTABLE_BASE_ID) {
    throw new Error('Missing necessary environment variables - check your .env file.');
}

const config = {
    airtable: {
        accessToken: process.env.AIRTABLE_PERSONAL_ACCESS_TOKEN,
        baseId: process.env.AIRTABLE_BASE_ID,
    },
};

module.exports = config;

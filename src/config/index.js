require('dotenv').config();

if (!process.env.AIRTABLE_PERSONAL_ACCESS_TOKEN || !process.env.AIRTABLE_BASE_ID) {
    throw new Error('Missing necessary environment variables');
}

const config = {
    airtable: {
        accessToken: process.env.AIRTABLE_PERSONAL_ACCESS_TOKEN,
        baseId: process.env.AIRTABLE_BASE_ID,
    },
};

module.exports = config;

'use strict';

const { GoogleAuth } = require('google-auth-library');
const { google } = require('googleapis');

// Initialize Google Gemini API client
const auth = new GoogleAuth({
    scopes: ['https://www.googleapis.com/auth/gemini']
});

const gemini = google.gemini({ version: 'v1', auth });

async function getGeminiData(query) {
    const response = await gemini.data.query({
        requestBody: {
            query: query
        }
    });
    return response.data;
}

module.exports = { getGeminiData };
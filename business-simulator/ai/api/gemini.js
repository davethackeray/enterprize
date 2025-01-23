const axios = require('axios');

const GEMINI_API_URL = 'https://api.gemini.com/v1/feedback';

async function getFeedback(scenario) {
  try {
    const response = await axios.post(GEMINI_API_URL, { scenario });
    return response.data;
  } catch (error) {
    console.error('Error fetching feedback from Gemini API:', error.message);
    throw error;
  }
}

module.exports = { getFeedback };
const { Configuration, OpenAIApi } = require('openai');
const config = require('../../server/config');

const configuration = new Configuration({
  apiKey: config.GEMINI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const generateScenario = async (prompt) => {
  const response = await openai.createCompletion({
    model: 'gemini-2.0-flash-exp',
    prompt: prompt,
    max_tokens: 150,
  });
  return response.data.choices[0].text.trim();
};

module.exports = { generateScenario };
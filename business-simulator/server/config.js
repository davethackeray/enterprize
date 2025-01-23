require('dotenv').config();

module.exports = {
  PORT: process.env.PORT,
  DB_PATH: process.env.DB_PATH,
  GEMINI_API_KEY: process.env.GEMINI_API_KEY,
};
const dotenv = require('dotenv');
dotenv.config();

// Exporting env variable
module.exports = {
  Authorization: process.env.TOKEN,
};
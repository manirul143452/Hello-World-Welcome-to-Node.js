require('dotenv').config();

const config = {
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  // MongoDB URI can be uncommented when needed
  // mongodbUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/your_database',
  // jwtSecret: process.env.JWT_SECRET || 'default_secret_key'
};

module.exports = config; 
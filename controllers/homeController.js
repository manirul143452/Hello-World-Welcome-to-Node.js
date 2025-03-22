const getWelcomeMessage = (req, res) => {
  res.json({ message: 'Welcome to Node.js API!' });
};

const getHealthCheck = (req, res) => {
  res.json({ status: 'OK', timestamp: new Date() });
};

module.exports = {
  getWelcomeMessage,
  getHealthCheck
}; 
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const config = require('./config/config');
const homeRoutes = require('./routes/homeRoutes');
const { errorHandler, notFound } = require('./middlewares/errorHandler');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Routes
app.use('/', homeRoutes);

// Error handling
app.use(notFound);
app.use(errorHandler);

module.exports = app; 
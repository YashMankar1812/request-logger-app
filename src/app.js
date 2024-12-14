const express = require('express');
const { requestLogger } = require('./middleware/requestLogger');
const routes = require('./routes');

// Initialize the app
const app = express();

// Use the requestLogger middleware globally (you can change 'info' to 'debug', 'warn', etc.)
app.use(requestLogger('info')); // Change 'info' to another level if you prefer

// Middleware to parse JSON request body
app.use(express.json());

// Include the routes
app.use('/', routes);

module.exports = app;

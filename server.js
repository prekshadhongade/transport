// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Initialize the express app
const app = express();
const port = 3000;

// Middleware to parse incoming requests with form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (CSS, JS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Handle ride request submission
app.post('/submit-ride-request', (req, res) => {
    const { pickup, dropoff, ecoFriendly } = req.body;
    console.log(`Ride Request: Pickup - ${pickup}, Dropoff - ${dropoff}, Eco-Friendly - ${ecoFriendly || 'No'}`);
    res.send(`Ride request submitted! Pickup: ${pickup}, Dropoff: ${dropoff}, Eco-Friendly: ${ecoFriendly ? 'Yes' : 'No'}`);
});

// Handle support form submission
app.post('/submit-support', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Support Request: Name - ${name}, Email - ${email}, Message - ${message}`);
    res.send(`Support request submitted! Name: ${name}, Email: ${email}, Message: ${message}`);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

const express = require('express');
const app = express();
const path = require('path');
// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set static folder for HTML files
app.use(express.static(path.join(__dirname, 'public')));

// Server setup
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

// Render form page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.get('/user-data', (req, res) => {
  console.log(req.body); 
  res.send('Form data received successfully!');
});
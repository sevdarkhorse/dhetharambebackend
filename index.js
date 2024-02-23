// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware
const routes = require('./routes/usersRoutes');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Enable CORS for all routes
app.use(cors());

mongoose.connect('mongodb+srv://sevdarkhorse:1QRydq0kPZiaL3qf@cluster0.ve51wu0.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/', routes);

const PORT = process.env.PORT || 4500;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

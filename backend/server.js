const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ridesharenepal', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Routes
app.use('/api/users', userRoutes);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});

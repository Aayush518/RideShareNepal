const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes'); // Assuming you have user routes defined in a separate file

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Allow cross-origin requests (useful for development)
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ridesharenepal', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to RideShareNepal API!');
});

app.use('/api/users', userRoutes); // User-related routes

// Catch 404 errors
app.use((req, res, next) => {
    res.status(404).send('Page not found');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});

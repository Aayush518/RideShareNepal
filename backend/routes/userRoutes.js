const express = require('express');
const router = express.Router();

router.post('/register', (req, res, next) => {
    const { name, email, password, userType } = req.body;

    // Basic validation
    if (!name || !email || !password || !userType) {
        return res.status(400).send('All fields are required');
    }

    // TODO: Hash the password before saving to the database

    // TODO: Save the user to the database

    res.send('User registered successfully');
});

module.exports = router;

const express = require('express');
const router = express.Router();

router.post('/register', (req, res) => {
    const { name, email, password, userType } = req.body;
    // TODO: Add validation, hashing, and database insertion logic here
    res.send('User registered successfully');
});

module.exports = router;

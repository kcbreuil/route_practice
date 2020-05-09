const express = require('express');
const githubRoutes = require('./routes/github');
const authMiddleware = require('./auth/auth');

const app = express();

const PORT = process.env.PORT || 5000;

app.use('/github', authMiddleware.log, githubRoutes);

app.get('/', (req, res) => {
    res.send('hello world');
});

app.get('/about', (req, res) => {
    res.send('This is the about page');
});

// reaching out to the github port and requesting information 

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
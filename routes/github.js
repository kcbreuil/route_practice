const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/user/:username', async (req, res) => {
    let { data } = await axios.get(`https://api.github.com/users/${req.params.username}`);
    
    res.send(data);
});


module.exports = router;
const express = require('express'),
    router = express.Router();

router.get('/read/:id', (req, res) => {
    let genre;
    res.render('genre', {
        genre
    });
})

module.exports = router;

const express = require('express'),
    router = express.Router();

router.get('/read/:id', (req, res) => {
    let author;
    res.render('author', {
        author
    });
})

module.exports = router;

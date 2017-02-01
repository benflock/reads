const express = require('express'),
    router = express.Router();

router.get('/read/:id', (req, res) => {
    let book;
    res.render('book', {
        book
    });
})

module.exports = router;

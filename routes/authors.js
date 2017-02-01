const express = require('express'),
    router = express.Router();

router.get('/', (req, res) => {
    res.render('authors', {
        authors
    });
})

module.exports = router;

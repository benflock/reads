const express = require('express'),
    router = express.Router();

router.get('/', (req, res) => {
    res.render('gernres', {
        genres
    });
})

module.exports = router;

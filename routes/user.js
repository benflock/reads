const express = require('express'),
    router = express.Router();

router.get('/read/:id', (req, res) => {
    let user;
    res.render('user', {
        user
    });
})

module.exports = router;

const express = require('express'),
    router = express.Router();

router.get('/', (req, res) => {
    let users;
    res.render('users', {
        users
    });
})

module.exports = router;

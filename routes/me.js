const express = require('express'),
    router = express.Router();

router.get('/', (req, res) => {
    let me;
    res.render('me', {
        me
    });
})

module.exports = router;

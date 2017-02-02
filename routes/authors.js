const express = require('express'),
    router = express.Router(),
    query = require('../queries');

router.get('/', (req, res) => {
  query.get_authors()
  .then(authors => {
    res.render('authors', {
      authors
    });
  })
})

module.exports = router;

const express = require('express'),
    router = express.Router(),
    query = require('../queries');

router.get('/', (req, res) => {
    query.get_books()
        .then(books => {
            query.get_books_authors()
                .then(books_authors => {
                    books.forEach(book => {
                        let authors = books_authors.filter(book_author => {
                            return book_author.book === book.id;
                        });
                        book.authors = [];
                        authors.forEach(author => {
                            book.authors.push({
                                id: author.id,
                                firstname: author.firstname,
                                lastname: author.lastname,
                                bio: author.bio,
                                portrait: author.portrait,
                                principal: author.principal
                            })
                        })
                    })
                    res.render('books', {
                        books
                    });
                })
                .catch(err => {
                    console.error(err);
                })
        })
        .catch(err => {
            console.error(err);
            res.render('error', {
                err
            })
        })
})

module.exports = router;

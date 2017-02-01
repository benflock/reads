//modules
const express = require('express'),
    path = require('path'),
    cookie_parser = require('cookie-parser'),
    body_parser = require('body-parser');

//methods
const app = express(),
    json_parser = body_parser.json();

//routes
const routes = require('./routes/index'),
    author = require('./routes/author'),
    authors = require('./routes/authors'),
    book = require('./routes/book'),
    books = require('./routes/books'),
    genre = require('./routes/genre'),
    genres = require('./routes/genres');

//middleware
app.use(body_parser.urlencoded({
    extended: false
}));
app.use(json_parser);
app.use(cookie_parser);
app.use(express.static(path.join(__dirname, 'public')));

//view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//routing
app.use((req, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
})
app.use('/', routes);
app.use('/author', author);
app.use('/authors', authors);
app.use('/book', book);
app.use('/books', books);
app.use('/genre', genre);
app.use('/genres', genres);

module.exports = app;

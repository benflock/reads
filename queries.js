const environment = process.env.NODE_ENV || 'development',
    knex = require('knex'),
    config = require('./knexfile'),
    query = knex(config[environment]);

module.exports = {
    get_author(id) {
        return query.select('*').from('author').where('id', id);
    },
    get_authors() {
        return query.select('*').from('author').orderBy('lastname', 'ASC');
    },
    get_authors_by_ids(ids) {
        return query.select('*').from('author').whereIn('id', ids);
    },
    get_book(id) {
        return query.select('*').from('book').where('id', id);
    },
    get_books() {
        return query.select('*').from('book').orderBy('title', 'ASC');
    },
    get_books_authors() {
        return query.select(
          'author_book.id',
          'author_book.author',
          'author_book.book',
          'author_book.principal',
          'author.firstname',
          'author.lastname',
          'author.bio',
          'author.portrait'
        )
        .from('author_book')
        .innerJoin('author', 'author_book.author', 'author.id');
    },
    get_books_by_ids(ids) {
        return query.select('*').from('book').whereIn('id', ids);
    },
    get_books_genres() {
        return query.select('*').from('book_genre');
    },
    get_book_users(book) {
        return query.select('*').from('book_user').where('book', book);
    },
    get_genre(id) {
        return query.select('*').from('genre').where('id', id);
    },
    get_genres() {
        return query.select('*').from('genre').orderBy('title', 'ASC')
    },
    get_genres_by_ids(ids) {
        return query.select('*').from('genre').whereIn('id', ids);
    },
    get_user(id) {
        return query.select('*').from('user').where('id', id);
    },
    get_users() {
      return query.select('*').from('user').orderBy('lastname', 'ASC');
    },
    get_users_by_ids(ids) {
      return query.select('*').from('user').whereIn('id', ids);
    }
}

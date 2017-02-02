exports.up = function(knex, Promise) {
    return knex.schema.createTable('book_genre', function(book_genre) {
      book_genre.integer('book').notNullable().references('book.id').onDelete('cascade');
      book_genre.integer('genre').notNullable().references('genre.id').onDelete('cascade');
      book_genre.unique(['book', 'genre']);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('book_genre');
};

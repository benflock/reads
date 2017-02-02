
exports.up = function(knex, Promise) {
  return knex.schema.createTable('book', function(book) {
    book.increments('id');
    book.string('title').notNullable();
    book.text('description');
    book.string('cover');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('book');
};

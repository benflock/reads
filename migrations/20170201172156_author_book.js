exports.up = function(knex, Promise) {
    return knex.schema.createTable('author_book', function(author_book) {
        author_book.increments('id');
        author_book.integer('author').references('author.id').notNullable().onDelete('cascade');
        author_book.integer('book').references('book.id').notNullable().onDelete('cascade');
        author_book.boolean('principal').notNullable().defaultTo(true);
        author_book.unique(['author', 'book']);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('author_book');
};

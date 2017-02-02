exports.up = function(knex, Promise) {
    return knex.schema.createTable('book_user', function(book_user) {
        book_user.integer('book').notNullable().references('book.id').onDelete('cascade');
        book_user.integer('user').notNullable().references('user.id').onDelete('cascade');
        book_user.unique(['book', 'user']);
    })
};

exports.down = function(knex, Promise) {

};

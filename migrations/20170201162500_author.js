exports.up = function(knex, Promise) {
    return knex.schema.createTable('author', function(author) {
        author.increments('id');
        author.string('firstname', 255);
        author.string('lastname', 255);
        author.text('bio');
        author.string('portrait', 255);
        author.unique(['firstname', 'lastname', 'bio']);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('author');
};

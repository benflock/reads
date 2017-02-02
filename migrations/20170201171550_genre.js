exports.up = function(knex, Promise) {
    return knex.schema.createTable('genre', function(genre) {
        genre.increments('id');
        genre.string('title', 255).notNullable();
        genre.unique('title');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('genre');
};

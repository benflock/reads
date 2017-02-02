exports.up = function(knex, Promise) {
    return knex.schema.createTable('user_user', function(user_user) {
        user_user.integer('leader').notNullable().references('user.id').onDelete('cascade');
        user_user.integer('follower').notNullable().references('user.id').onDelete('cascade');
        user_user.primary(['leader', 'follower']);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('user_user');
};

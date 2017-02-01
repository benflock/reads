
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', function(user) {
    user.increments('id');
    user.string('email', 255).notNullable();
    user.string('password').notNullable();
    user.string('firstname', 255).notNullable();
    user.string('lastname', 255).notNullable();
    user.string('avatar');
    user.string('twitter');
    user.string('slack');
    user.string('github');
    user.string('facebook');
    user.string('behance');
    user.string('dribbble');
    user.string('linkedin');
    user.unique('email');
  })
};

exports.down = function(knex, Promise) {

};

exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('user_user').del()
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('user_user').insert({
                    leader: 1,
                    follower: 2
                }),
                knex('user_user').insert({
                    leader: 1,
                    follower: 3
                }),
                knex('user_user').insert({
                    leader: 1,
                    follower: 4
                }),
                knex('user_user').insert({
                    leader: 1,
                    follower: 5
                }),
                knex('user_user').insert({
                    leader: 1,
                    follower: 6
                }),
                knex('user_user').insert({
                    leader: 3,
                    follower: 4
                }),
                knex('user_user').insert({
                    leader: 3,
                    follower: 1
                }),
                knex('user_user').insert({
                    leader: 3,
                    follower: 6
                }),
                knex('user_user').insert({
                    leader: 3,
                    follower: 2
                }),
                knex('user_user').insert({
                    leader: 5,
                    follower: 4
                }),
                knex('user_user').insert({
                    leader: 5,
                    follower: 2
                }),
                knex('user_user').insert({
                    leader: 6,
                    follower: 5
                }),
            ]);
        });
};

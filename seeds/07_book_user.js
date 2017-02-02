exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('book_user').del()
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('book_user').insert({
                    book: 1,
                    user: 1
                }),
                knex('book_user').insert({
                    book: 2,
                    user: 1
                }),
                knex('book_user').insert({
                    book: 1,
                    user: 2
                }),
                knex('book_user').insert({
                    book: 2,
                    user: 2
                }),
                knex('book_user').insert({
                    book: 3,
                    user: 2
                }),
                knex('book_user').insert({
                    book: 4,
                    user: 2
                }),
                knex('book_user').insert({
                    book: 3,
                    user: 1
                }),
                knex('book_user').insert({
                    book: 3,
                    user: 5
                }),
                knex('book_user').insert({
                    book: 6,
                    user: 6
                }),
                knex('book_user').insert({
                    book: 6,
                    user: 2
                }),
                knex('book_user').insert({
                    book: 3,
                    user: 3
                })
            ]);
        });
};

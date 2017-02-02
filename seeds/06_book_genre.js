exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('book_genre').del()
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('book_genre').insert({
                    book: 1,
                    genre: 1
                }),
                knex('book_genre').insert({
                    book: 2,
                    genre: 1
                }),
                knex('book_genre').insert({
                    book: 3,
                    genre: 2
                }),
                knex('book_genre').insert({
                    book: 4,
                    genre: 2
                }),
                knex('book_genre').insert({
                    book: 5,
                    genre: 2
                }),
                knex('book_genre').insert({
                    book: 6,
                    genre: 2
                })
            ]);
        });
};

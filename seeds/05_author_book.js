exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('author_book').del()
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('author_book').insert({
                    author: 1,
                    book: 1,
                    principal: true
                }),
                knex('author_book').insert({
                    author: 2,
                    book: 2,
                    principal: true
                }),
                knex('author_book').insert({
                    author: 3,
                    book: 3,
                    principal: true
                }),
                knex('author_book').insert({
                    author: 4,
                    book: 4,
                    principal: true
                }),
                knex('author_book').insert({
                    author: 4,
                    book: 5,
                    principal: true
                }),
                knex('author_book').insert({
                    author: 4,
                    book: 6,
                    principal: true
                }),
                knex('author_book').insert({
                    author: 5,
                    book: 1,
                    principal: false
                }),
                knex('author_book').insert({
                    author: 6,
                    book: 1,
                    principal: false
                })
            ]);
        });
};

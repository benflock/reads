exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('genre').del()
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('genre').insert({
                    id: 1,
                    title: 'Python'
                }),
                knex('genre').insert({
                    id: 2,
                    title: 'JavaScript'
                })
            ]);
        });
};

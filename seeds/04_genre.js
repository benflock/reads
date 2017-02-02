exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('genre').truncate()
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('genre').insert({
                    title: 'Python'
                }),
                knex('genre').insert({
                    title: 'JavaScript'
                })
            ]);
        });
};

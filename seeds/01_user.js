exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('user').del()
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('user').insert({
                    email: 'patrauls@gmail.com',
                    password: 'cute',
                    firstname: 'Patrick',
                    lastname: 'Rauls',
                    avatar: '/img/user/1/patty.jpg',
                    github: 'benflock',
                    slack: 'patrick',
                    facebook: 'prauls',
                    linkedin: 'prauls',
                    dribbble: 'prauls',
                    behance: 'prauls',
                    twitter: 'ben_flock'
                }),
                knex('user').insert({
                    email: 'caruso@ebeiej.com',
                    password: 'babababa',
                    firstname: 'Chris',
                    lastname: 'Catchings',
                    avatar: '/img/user/1/patty.jpg',
                    github: 'ccatchings',
                    slack: 'ccatchings',
                    facebook: 'ccatchings',
                    linkedin: 'ccatchings',
                    dribbble: 'ccatchings',
                    behance: 'ccatchings',
                    twitter: 'ccatchings'
                }),
                knex('user').insert({
                    email: 'julietrauls@gmail.com',
                    password: 'julietrauls@gmail.com',
                    firstname: 'Juliet',
                    lastname: 'Rauls',
                    avatar: '/img/user/1/patty.jpg',
                    github: 'jrauls',
                    slack: 'jrauls',
                    facebook: 'jrauls',
                    linkedin: 'jrauls',
                    dribbble: 'jrauls',
                    behance: 'jrauls',
                    twitter: 'jrauls'
                })
            ]);
        });
};

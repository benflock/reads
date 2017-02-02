exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('user').del()
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('user').insert({
                  id: 1,
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
                  id: 2,
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
                  id: 3,
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
                }),
                knex('user').insert({
                  id: 4,
                    email: 'angelrauls@gmail.com',
                    password: 'julietrauls@gmail.com',
                    firstname: 'Angel',
                    lastname: 'Rauls',
                    avatar: '/img/user/1/patty.jpg',
                    github: 'arauls',
                    slack: 'arauls',
                    facebook: 'arauls',
                    linkedin: 'arauls',
                    dribbble: 'arauls',
                    behance: 'arauls',
                    twitter: 'arauls'
                }),
                knex('user').insert({
                  id: 5,
                    email: 'chrisrauls@gmail.com',
                    password: 'julietrauls@gmail.com',
                    firstname: 'Chris',
                    lastname: 'Rauls',
                    avatar: '/img/user/1/patty.jpg',
                    github: 'crauls',
                    slack: 'crauls',
                    facebook: 'crauls',
                    linkedin: 'crauls',
                    dribbble: 'crauls',
                    behance: 'crauls',
                    twitter: 'crauls'
                }),
                knex('user').insert({
                  id: 6,
                    email: 'maerauls@gmail.com',
                    password: 'julietrauls@gmail.com',
                    firstname: 'Mae',
                    lastname: 'Rauls',
                    avatar: '/img/user/1/patty.jpg',
                    github: 'maerauls',
                    slack: 'maerauls',
                    facebook: 'maerauls',
                    linkedin: 'maerauls',
                    dribbble: 'maerauls',
                    behance: 'maerauls',
                    twitter: 'maerauls'
                }),
            ]);
        });
};

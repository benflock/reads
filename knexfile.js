require("dotenv").load();

module.exports = {
    development: {
        client: "pg",
        connection: {
            host: process.env.HOST,
            user: process.env.USER,
            password: process.env.PASSWORD,
            database: process.env.DATABASE
        }
    },
    staging: {
        client: "pg",
        connection: {
            host: process.env.HOST,
            user: process.env.USER,
            password: process.env.PASSWORD,
            database: process.env.DATABASE
        }
    },
    production: {
        client: "pg",
        connection: process.env.DATABASE_URL
    }
};

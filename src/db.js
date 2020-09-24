const { Pool } = require('pg');
require('dotenv').config();

const dev = {
    user: "postgres",
    password: "1234",
    host: "localhost",
    port: 5432,
    database: "posts_app"
};

const prod = {
    connectionString: process.env.DATABASE_URL,
}

const pool = new Pool(process.env.NODE_ENV === 'production' ? prod : dev);
pool.on('error', (err, client) => {
    console.error('Unexpected error on idle client', err)
    process.exit(-1)
})

module.exports = pool;
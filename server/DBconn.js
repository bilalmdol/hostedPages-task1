const Pool = require('pg').Pool
const dotenv = require("dotenv").config()

// exporting connection object
const conn = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT
});

module.exports = conn;



























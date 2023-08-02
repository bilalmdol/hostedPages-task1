// for Database connection

// const mysql =  require("mysql2");

// const conn = mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"drowssap@321",
//     database : 'demo_db'
// });

const { Client } = require("pg")

const conn = new Client({
    user: "thisisbillall",
    host: "localhost",
    database: "demo_db",
    // password: process.env.PGPASSWORD,
    port: 5432
})
module.exports = conn;





// CREATE TABLE users (
//             uid SERIAL,
//             firstName VARCHAR(255) NOT NULL,
//             lastName VARCHAR(255),
//             email VARCHAR(255) NOT NULL UNIQUE,
//             password VARCHAR(255) NOT NULL,
//             gender VARCHAR(255),
//             dob DATE, 
//             phone VARCHAR(255),
//             address TEXT, 
//             city VARCHAR(255),
//             zip VARCHAR(255),
//             country VARCHAR(255),
//             PRIMARY KEY(uid)
//     );

// INSERT INTO users(firstName, lastName, email, password, gender, dob, phone, address, city, zip, country) VALUES ('psql','psql','ps@gnail.com','pass@123','male','01-03-2005','8769745','street 1','goa','444001','india');
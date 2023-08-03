const express = require('express')
const app = express()
const bcrypt = require("bcrypt")

//PORT to be used by server
const PORT = 5001

// to CORS error
const cors = require('cors');
const conn = require('./DBconn');

// used * so resources can be accessed by any origin.
app.use(cors({
    origin: "*"
}));

// middleware func used to parse the incoming requests with JSON payloads
app.use(express.json({ extended: false }));

// homepage route
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname })
});

// signup data POST route
app.post('/signup', async(req, res) => {

    console.log(req.body)

    // objct destructuring
    const { firstName, lastName, email, password, gender, dob, phone, address, city, zip, country } = req.body;

    const encrypted_password = await bcrypt.hash(password, 10);
    conn.query('INSERT INTO users (firstName, lastName, email, password, gender, dob, phone, address, city, zip, country) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *', [firstName, lastName, email, encrypted_password, gender, dob, phone, address, city, zip, country],
        (error, results) => {
            if (error) {
                throw error
            }
            console.log("Results:")
            console.log(results)
            res.send(`Hello ${results.rows[0].firstname}`)
        })

        conn.end()

});


// get all registered users
app.post('/getusers', (req, res) => {
    console.log(req.body)
    res.send(req.body)

    conn.query('SELECT * FROM "users"', (error, results) => {
        if (error) {
            throw error
        }
        console.log("Result:")
        console.log(results)
    })

});


// Server Port listening
app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`)

    //connecting to database
    console.log("connecting to Database..")
    console.log("Connected!")

});



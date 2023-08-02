const express = require('express')
const app = express()
const mysql = require("mysql2");

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
app.post('/signup', (req, res) => {
    console.log(req.body)
    res.send(req.body)

    // objct destructuring
    const { firstName, lastName, email, password, gender, dob, phone, address, city, zip, country } = req.body;

    const sqlInsert = "INSERT INTO users VALUES (0,?,?,?,?,?,?,?,?,?,?,?)"
    const formattedDob = new Date(dob);

    //formatting inputs
    const insert_query = mysql.format(sqlInsert, [firstName, lastName, email, password, gender, formattedDob, phone, address, city, zip, country])
    
    console.log("insert query", insert_query)
    // pushing request data in database
    conn.query(insert_query, function (err, result) {
        if (err) return res.status(500);
        console.log("Added!");
        console.log(result);
        return res.status(201);
    });
    
});


// get all registered users
app.post('/getusers', (req, res) => {
    console.log(req.body)
    res.send(req.body)

    const sql = 'SELECT * FROM users';
    // pushing request data in database
    conn.query(sql, function (err, result) {
        if (err){
            console.log(err)
             throw err;
        }
        console.log("Result:");
        console.log(result);
        res.sendStatus(200)
    });

});

// Server Port listening
app.listen(PORT, async() => {
    console.log(`Server is running on port ${PORT}`)

    //connecting to database
    console.log("connecting to database...")
    conn.connect(function (err) {
        if (err) throw err;
        console.log("Connected!")
        const res =  conn.query('SELECT * FROM users')
        console.log(res)

    });

    
});



// ----------------- EXPRESS SERVER -----------------
// const express = require('express')
import express, { json } from "express";
const app = express()
const port = 3003
app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`)
})

// const cors = require('cors')
import cors from "cors";
app.use(cors())
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json());


// ----------------- MY SQL CONNECT -----------------
// const mysql = require('mysql')
import mysql from "mysql";

const con = mysql.createConnection({
    host: "localhost",
    user: "zoo",
    password: "Laikinas1",
    database: "zoo",
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});
// -------------------------------------------------




// ----------------- ROUTING -----------------
// app.get('/', (req, res) => {
//     res.send('veikia')
// })
// app.get('/labas/:id', (req, res) => {
//     res.send(`Labas 2 - ${req.params.id}`)
// })
// app.get('/test', (req, res) => {
//     res.send(JSON.stringify({test: 'ok'}))
// })


// GET ALL RECORDS FROM TABLE
app.get('/animals/', (req, res) => {
    const sql = `
        select * from zverys
    `
    con.query(sql, (err, results) => {
        if (err) throw err;
        // console.log(results);
        res.send(results)
    });
})


// INSERT NEW RECORD IN TABLE
app.post('/animals', (req, res) => {
    const sql = `
        insert into zverys
        (name, type, weight, born)
        values (?, ?, ?, ?)
    `
    con.query(sql, [req.body.name, req.body.type, req.body.weight, req.body.born], (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send(results)
    });
})


// EDIT RECORD 
app.put('/animals/:id', (req, res) => {
    console.log(req.body.born)
    const sql = `
        UPDATE zverys
        SET name = ?, type = ?, weight = ?, born = ?
        WHERE id = ?
    `;
    con.query(sql, [
        req.body.name,
        req.body.type,
        req.body.weight,
        req.body.born,
        req.params.id
    ], (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    })
})


// DELETE RECORD 
app.delete('/animals/:id', (req, res) => {
    const sql = `
        DELETE FROM zverys
        WHERE id = ?
        `;
    con.query(sql, [req.params.id], (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
    })
})
// -------------------------------------------------




// GET DISTINCT TYPES
app.get('/animal-types', (req, res) => {
    const sql = `
        SELECT DISTINCT type
        FROM zverys
    `;
    con.query(sql, (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    })
})

// GET DATA BY TYPE
app.get('/animal-filter/:t', (req, res) => {
    const sql = `
        SELECT *
        FROM zverys
        WHERE type = ?
    `;
    con.query(sql, [req.params.t], (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    })
})

// SEARCH DATA
app.get('/animal-search', (req, res) => {
    const sql = `
        SELECT *
        FROM zverys
        WHERE name LIKE ?
    `;
    con.query(sql, ['%' + req.query.s + '%'], (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    })
})
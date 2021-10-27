// const express = require('express')
import express, { json } from "express";
const app = express()
const port = 3003

// const mysql = require('mysql')
import mysql from "mysql";

// const cors = require('cors')
import cors from "cors";

app.use(cors())
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json());

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

// import { connect, end, query, start, rollback, commit } from './db.js';

app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`)
})



// ROUTING
app.get('/', (req, res) => {
    res.send('veikia')
})

app.get('/labas/:id', (req, res) => {
    res.send(`Labas 2 - ${req.params.id}`)
})


app.get('/animals/', async (req, res) => {
    const sql = `
        select * from zverys
    `
    con.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send(results)
    });
      


        // conn = await connect();
        // const { results: zmones } = await query(
        //     conn,
        //     `
        //     select * from zverys`,
        // );
        // console.log(zmones);

})

app.get('/test', (req, res) => {
    res.send(JSON.stringify({test: 'ok'}))
})
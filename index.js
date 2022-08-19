const express = require('express');
const server = express();
const cors = require('cors');
const filmes = require ('./src/data/filmes.json');
const port = process.env.PORT || 3000;


server.use((req, res, next) => {
	
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    server.use(cors());
    next();
});

server.get ('/', (req,res) => {
    return res.json({filmes})
    });

server.listen(port, () => {
    console.log ('O servidor está online!')
});
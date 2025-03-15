const express = require('express');
const server = express();

server.get ('/', (req,res) => {
    return res.json({usuario: 'Dados para o Gráfico do PlugDash'})
    });

server.listen(80, () => {
    console.log ('O servidor está online!')
});
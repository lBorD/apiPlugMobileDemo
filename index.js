const express = require('express');
const server = express();
const filmes = require ('./src/data/filmes.json')

/*server.get ('/usuario', (req,res) => {
return res.json({usuario: 'PlugBot admin'})
});
*/
server.get ('/', (req,res) => {
    return res.json({usuario: 'Dados para o Gráfico do PlugDash'})
    });


/*server.get ('/', (req,res) => {
    return res.json({filmes})
    });
*/
server.listen(80, () => {
    console.log ('O servidor está online!')
});
/*const http = require('http');
const { getCharById } = require('./controllers/getCharById');

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.url.includes('/rickandmorty/character')) {
        let id = '';
        for (let i=req.url.length-1; i>0; i--) {
            if (req.url.charCodeAt(i) !== 47) {
                id = req.url[i] + id;
            } else {
                break;
            }
        }
        id = parseInt(id);
        getCharById(res,id);
    }
}).listen(3001, 'localhost');*/

const express = require('express');
const { routeGetCharById, routePostFav, routeDeleteFav, routeLogin, routeCreateLogin } = require('./routes/index');
const server = express();

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

 server.use(express.json());

 server.use('/rickandmorty', routeGetCharById);
 server.use('/rickandmorty', routePostFav);
 server.use('/rickandmorty', routeDeleteFav);
 server.use('/rickandmorty', routeLogin);
 server.use('/rickandmorty', routeCreateLogin);

 module.exports = server;
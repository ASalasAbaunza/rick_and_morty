const http = require('http');
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
}).listen(3001, 'localhost');
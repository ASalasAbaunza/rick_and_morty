const http = require('http');
const data = require('./utils/data');

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
        let character = {};
        for (let i=0; i<data.length; i++) {
            if (data[i].id === id) {
                character = data[i];
                break;
            }
        }
        res.writeHead(200, { 'Content-Type':'application/json' })
        res.end(JSON.stringify(character));
    }
}).listen(3001, 'localhost');
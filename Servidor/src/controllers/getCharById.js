/*const axios = require('axios');

function getCharById(res,id) {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => {
        let character = {
            id: id,
            name: response.data.name,
            gender: response.data.gender,
            species: response.data.species,
            origin: response.data.origin,
            image: response.data.image,
            status: response.data.status,
        };
        res.writeHead(200, { 'Content-Type':'application/json' })
        res.end(JSON.stringify(character));
    })
    .catch((error) => {
        res.writeHead(500, { 'Content-Type':'text/plain' })
        res.end(error.message);
    });
}

module.exports = { getCharById };*/

const axios = require('axios');

/*function getCharById(req, res) {
    const { id } = req.params;
    const URL = `https://rickandmortyapi.com/api/character/${id}`;
    axios.get(URL)
        .then(
            (response) => {
                if (response.data) {
                    let character = {
                        id: id,
                        name: response.data.name,
                        gender: response.data.gender,
                        species: response.data.species,
                        origin: response.data.origin,
                        image: response.data.image,
                        status: response.data.status,
                    };
                    res.json(character);
                } else {
                    res.status(404).send('Not Found');
                }
            },
            (error) => {
                res.status(500).send(error.message);
            }
        )
}*/

async function getCharById(id) {
    const URL = `https://rickandmortyapi.com/api/character/${id}`;
    try {
        let response = await axios.get(URL);
        if (response.data) {
            let character = {
                id: id,
                name: response.data.name,
                gender: response.data.gender,
                species: response.data.species,
                origin: response.data.origin,
                image: response.data.image,
                status: response.data.status,
            };
            return character;
        }
    } catch (error) {
        throw Error(error.message);
    }
}

module.exports = { getCharById };
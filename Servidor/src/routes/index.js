const { getCharById } = require('../controllers/getCharById');
const { postFav, deleteFav } = require('../controllers/handleFavorites');
const { login } = require('../controllers/login');
const { postUser } = require('../controllers/postUser');
const { Router } = require('express');

const routeGetCharById = Router();
const routePostFav = Router();
const routeDeleteFav = Router();
const routeLogin = Router();
const routeCreateLogin = Router();

routeGetCharById.get('/character/:id', async (req, res) => {
    let { id } = req.params;
    try {
        const response = await getCharById(id);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: 'Personaje no existente'});
    }
});

routePostFav.post('/fav', async (req, res) => {
    let { id, name, gender, species, origin, image, status } = req.body;
    let newFav = {id, name, gender, species, origin, image, status};
    try {
        const response = await postFav(newFav);
        if (response.error) {
            if (response.error === 'Faltan datos') {
                res.status(401).json({error: response.error});
            } else {
                throw Error(response.error);
            }
        } else {
            res.status(200).json(response);
        }
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

routeDeleteFav.delete('/fav/:id', async (req, res) => {
    let { id } = req.params;
    try {
        const response = await deleteFav(id);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

routeLogin.get('/login', async (req, res) => {
    let { email, password } = req.query
    try {
        let response = await login(email, password);
        if (response.error) {
            if (response.error === 'Faltan datos') {
                res.status(400).json({error: response.error});
            } else if (response.error === 'Usuario no encontrado') {
                res.status(404).json({error: response.error});
            } else if (response.error === 'Contraseña incorrecta') {
                res.status(403).json({error: response.error})
            } else {
                throw Error(response.error);
            }
        } else {
            res.status(200).json({access: true});
        }
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

routeCreateLogin.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const response = await postUser(email, password);
        if (response.error) {
            if (response.error === 'Faltan datos') {
                res.status(400).json({error: response.error});
            } else {
                throw Error(response.error);
            }
        } else {
            res.status(200).json(response);
        }
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

module.exports = {
    routeGetCharById,
    routePostFav,
    routeDeleteFav,
    routeLogin,
    routeCreateLogin,
};
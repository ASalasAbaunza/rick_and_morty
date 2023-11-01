const { getCharById } = require('../controllers/getCharById');
const { postFav, deleteFav } = require('../controllers/handleFavorites');
const { login } = require('../controllers/login');
const { Router } = require('express');

const routeGetCharById = Router();
const routePostFav = Router();
const routeDeleteFav = Router();
const routeLogin = Router();

routeGetCharById.get('/character/:id', async (req, res) => {
    let { id } = req.params;
    try {
        const response = await getCharById(id);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: 'Personaje no existente'});
    }
});

routePostFav.post('/fav', (req, res) => {
    let { id, name, gender, species, origin, image, status } = req.body;
    let newFav = {id, name, gender, species, origin, image, status};
    const favorites = postFav(newFav);
    res.status(200).json(favorites);
});

routeDeleteFav.delete('/fav/:id', (req, res) => {
    let { id } = req.params;
    const favorites = deleteFav(id);
    res.status(200).json(favorites);
});

routeLogin.get('/login', (req, res) => {
    let { email, password } = req.query
    let response = login(email, password);
    res.status(200).json(response);
});

module.exports = {
    routeGetCharById,
    routePostFav,
    routeDeleteFav,
    routeLogin,
};
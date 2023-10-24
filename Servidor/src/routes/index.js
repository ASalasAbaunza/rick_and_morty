const { getCharById } = require('../controllers/getCharById');
const { postFav, deleteFav } = require('../controllers/handleFavorites');
const { login } = require('../controllers/login');
const { Router } = require('express');

const routeGetCharById = Router();
const routePostFav = Router();
const routeDeleteFav = Router();
const routeLogin = Router();

routeGetCharById.get('/character/:id', (req, res) => {
    getCharById(req, res);
});

routePostFav.post('/fav', (req, res) => {
    postFav(req, res);
});

routeDeleteFav.delete('/fav/:id', (req, res) => {
    deleteFav(req, res);
});

routeLogin.get('/login', (req, res) => {
    login(req, res);
});

module.exports = {
    routeGetCharById,
    routePostFav,
    routeDeleteFav,
    routeLogin,
};
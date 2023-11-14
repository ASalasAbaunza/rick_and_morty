/*let myFavorites = [];

function postFav(newFav) {
    myFavorites.push(newFav);
    return myFavorites;
}

function deleteFav(id) {
    myFavorites = myFavorites.filter((favorite) => {
        return favorite.id !== id;
    });
    return myFavorites;
}

module.exports = {
    postFav,
    deleteFav,
};*/

const { Favorite } = require('../DB_connection');

async function postFav(newFav) {
    const {id, name, gender, species, origin, image, status} = newFav;
    if (!id || !name || !gender || !species || !origin || !image || !status) {
        return {error: 'Faltan datos'};
    } else {
        try {
            await Favorite.findOrCreate({where: {id, name, gender, species, origin, image, status}});
            const favs = await Favorite.findAll();
            return favs;
        } catch (error) {
            return {error: error.message}
        }
    }
}

async function deleteFav(id) {
    try {
        await Favorite.destroy({where: {id: id}});
        const favs = await Favorite.findAll();
        return favs;
    } catch (error) {
        return {error: error.message};
    }
}

module.exports = {
    postFav,
    deleteFav,
}
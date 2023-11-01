let myFavorites = [];

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
};
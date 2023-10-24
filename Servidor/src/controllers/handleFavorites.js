let myFavorites = [];

function postFav(req, res) {
    myFavorites.push(req.body);
    res.status(200).json(myFavorites);
}

function deleteFav(req, res) {
    let { id } = req.params;
    myFavorites = myFavorites.filter((favorite) => {
        return favorite.id !== id;
    });
    res.status(200).json(myFavorites);
}

module.exports = {
    postFav,
    deleteFav,
};
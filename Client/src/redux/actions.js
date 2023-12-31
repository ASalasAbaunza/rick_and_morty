import axios from 'axios';

export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';

/*export const addFav = (character) => {
    return {
        type: ADD_FAV,
        payload: character,
    }
};*/

/*export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
       axios.post(endpoint, character).then(({ data }) => {
          return dispatch({
             type: ADD_FAV,
             payload: data,
          });
       });
    };
 };*/

 export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
        try {
            let response = await axios.post(endpoint, character);
            if (response.data.error) {
                window.alert(response.data.error.message);
            } else {
                return dispatch({
                    type: ADD_FAV,
                    payload: response.data,
                });
            }
        } catch (error) {
            window.alert(error.message);
        }
    }
 }

/*export const removeFav = (id) => {
    return {
        type: REMOVE_FAV,
        payload: id,
    }
};*/

/*export const removeFav = (id) => {
    const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
    return (dispatch) => {
       axios.delete(endpoint).then(({ data }) => {
          return dispatch({
             type: REMOVE_FAV,
             payload: data,
            });
       });
    };
 };*/

 export const removeFav = (id) => {
    const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
    return async (dispatch) => {
        try {
            let response = await axios.delete(endpoint);
            if (response.data.error) {
                window.alert(response.data.error.message);
            } else {
                return dispatch({
                    type: REMOVE_FAV,
                    payload: response.data,
                });
            }
        } catch (error) {
            window.alert(error.message);
        }
    }
 }

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender,
    }
};

export const orderCards = (order) => {
    return {
        type: ORDER,
        payload: order,
    }
};
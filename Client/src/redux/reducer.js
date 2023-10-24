import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";

const initialState = {
    myFavorites: [],
    allCharacters: [],
};

const rootReducer = (state = initialState, actions) => {
    switch (actions.type) {
        /*case ADD_FAV:
            return {...state, myFavorites: [...state.myFavorites, actions.payload], allCharacters: [...state.allCharacters, actions.payload]};*/
        case ADD_FAV:
            return { ...state, myFavorites: actions.payload, allCharacters: actions.payload };
        /*case REMOVE_FAV:
            return {...state, 
                myFavorites: state.myFavorites.filter(function(favorite) {
                    return favorite.id !== parseInt(actions.payload);
                }),
                allCharacters: state.allCharacters.filter(function(favorite) {
                    return favorite.id !== parseInt(actions.payload);
                }),
            };*/
        case REMOVE_FAV:
            return { ...state, myFavorites: actions.payload, allCharacters: actions.payload };
        case FILTER:
            if (actions.payload === 'All') {
                return {...state, myFavorites: state.allCharacters}
            } else {
                return {...state, myFavorites: state.allCharacters.filter(function(favorite) {
                    return favorite.gender === actions.payload;
                })};
            }
        case ORDER:
            if (actions.payload === 'A') {
                return {...state, myFavorites: state.myFavorites.sort((a,b) => a.id - b.id)};
            } else if (actions.payload === 'D') {
                return {...state, myFavorites: state.myFavorites.sort((a,b) => b.id - a.id)};
            } else {
                return {...state};
            }
        default:
            return {...state};
    }
};

export default rootReducer;
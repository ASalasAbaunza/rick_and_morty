import { ADD_FAV, REMOVE_FAV } from "./actions";

const initialState = {
    myFavorites: [],
};

const rootReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case ADD_FAV:
            return {...state, myFavorites: [...state.myFavorites, actions.payload]};
        case REMOVE_FAV:
            return {...state, myFavorites: state.myFavorites.filter(function(favorite) {
                return favorite.id !== parseInt(actions.payload);
            })};
        default:
            return {...state};
    }
};

export default rootReducer;
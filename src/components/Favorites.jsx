import React from "react";
import { connect } from "react-redux";
import styles from './ComponentStyles.module.css'
import Card from "./Card";
import { useSelector, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../redux/actions";
import { useState, useEffect } from "react";

function Favorites(props) {
    const myFavorites = useSelector((state) => state.myFavorites);
    const dispatch = useDispatch();
    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value));
        if (aux === true) {
            setAux(false);
        } else {
            setAux(true);
        }
    };
    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value));
    };
    const [aux, setAux] = useState(false);
    
    useEffect(() => {
        dispatch(filterCards('All'));
    }, []);
    
    const cartas = myFavorites.map(function (character) {
        return (
            <Card
                key={character.id}
                name={character.name}
                status={character.status}
                species={character.species}
                gender={character.gender}
                origin={character.origin}
                image={character.image}
                id={character.id}
                favorite={true}
            />
        );
     });

     return (
        <>
        <div className={styles.divFavDrop}>
            <div className={styles.divSelector}>
                <label className={styles.favLabel} for='sort'>Sort</label>
                <select style={{borderRadius:'5px'}} id="sort" name="sort" onChange={handleOrder}>
                    <option value='--'>--</option>
                    <option value='A'>Ascending</option>
                    <option value='D'>Descending</option>
                </select>
            </div>
            <div className={styles.divSelector}>
                <label className={styles.favLabel} for='filter'>Filter by</label>
                <select style={{borderRadius:'5px'}} id="filter" name="filter" onChange={handleFilter}>
                    <option value='All'>All</option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                    <option value='Genderless'>Genderless</option>
                    <option value='unknown'>Unknown</option>
                </select>
            </div>
        </div>
        <div className={styles.divCards}>
           {cartas}
        </div>
        </>
     );
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites,
    }
};

export default connect(mapStateToProps, null)(Favorites);
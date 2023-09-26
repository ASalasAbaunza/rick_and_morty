import React from "react";
import { connect } from "react-redux";
import styles from './ComponentStyles.module.css'
import Card from "./Card";
import { useSelector } from "react-redux";

function Favorites(props) {
    const myFavorites = useSelector((state) => state.myFavorites);
    const cartas = myFavorites.map(function (character) {
        return (
            <Card
                key={character.id}
                name={character.name}
                status={character.status}
                species={character.species}
                gender={character.gender}
                origin={character.origin.name}
                image={character.image}
                id={character.id}
                onClose={props.onClose} 
                favorite={true}
            />
        );
     });
     return (
        <div className={styles.divCards}>
           {cartas}
        </div>
     );
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites,
    }
};

export default connect(mapStateToProps, null)(Favorites);
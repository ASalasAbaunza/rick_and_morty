import React from "react";
import styles from "./ComponentStyles.module.css"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../redux/actions";
import { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";

function Card(props) {
   const myFavorites = useSelector((state) => state.allCharacters);
   const dispatch = useDispatch();

   let [isFav, setIsFav] = useState(false);
   
   const handleFavorite = () => {
      if (isFav === true) {
         setIsFav(false);
         dispatch(removeFav(props.id));
      } else {
         setIsFav(true);
         dispatch(addFav(props));
      }
   };

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (props.id === fav.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div style={{maxWidth: '15%', display: 'flex', flexDirection: 'column', margin: '0px'}}>
         <div style={{position: 'relative'}}>
            <img className={styles.imgCard} src={props.image} alt={props.name} />
            {
               isFav ? (
                  <button className={styles.botonFav} onClick={handleFavorite}>❤️</button>
               ) : (
                  <button className={styles.botonFav} onClick={handleFavorite}>🤍</button>
               )
            }
            {
               props.favorite ? (
                  <button style={{display: 'none'}} className={styles.botonCard}>X</button>
               ) : (
                  <button className={styles.botonCard} onClick={() => props.onClose(props.id)}>X</button>
               )
            }
            <Link to={`/detail/${props.id}`}>
               <h2 className={styles.nameImg}>{props.name}</h2>
            </Link>
         </div>
         <div className={styles.divDataImage}>
            <h2 className={styles.dataImage}>{props.status}</h2>
            <h2 className={styles.dataImage}>{props.species}</h2>
            <h2 className={styles.dataImage}>{props.gender}</h2>
            <h2 className={styles.dataImage}>{props.origin}</h2>
         </div>
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      allCharacters: state.allCharacters,
   }
};

/*const mapDispatchToProps = (dispatch) => {
   return {
      addFav: () => {
         dispatch(addFav());
      },
      removeFav: () => {
         dispatch(removeFav());
      }
   }
}*/

const mapDispatchToProps = (dispatch) => {
   return {
     addFav: (props) => { // Pass the props argument here
       dispatch(addFav(props));
     },
     removeFav: (id) => { // Pass the ID as an argument here
       dispatch(removeFav(id));
     }
   };
 };

export default connect(mapStateToProps, mapDispatchToProps)(Card);
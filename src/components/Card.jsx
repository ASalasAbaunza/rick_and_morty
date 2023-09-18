import React from "react";
import styles from "./ComponentStyles.module.css"
import { Link } from "react-router-dom";

export default function Card(props) {
   return (
      <div style={{maxWidth: '15%', display: 'flex', flexDirection: 'column', margin: '0px'}}>
         <div style={{position: 'relative'}}>
            <img className={styles.imgCard} src={props.image} alt={props.name} />
            <button className={styles.botonCard} onClick={() => props.onClose(props.id)}>X</button>
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

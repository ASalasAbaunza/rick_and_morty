import React from "react";
import styles from "./ComponentStyles.module.css"

export default function Card(props) {
   return (
      <div style={{maxWidth: '15%', display: 'flex', flexDirection: 'column'}}>
         <div style={{position: 'relative'}}>
            <img className={styles.imgCard} src={props.image} alt='Rick' />
            <button className={styles.botonCard} onClick={props.onClose}>X</button>
            <h2 className={styles.nameImg}>{props.name}</h2>
         </div>
         <div className={styles.divDataImage}>
            <h2 className={styles.dataImage}>{props.status}</h2>
            <h2 className={styles.dataImage}>{props.species}</h2>
            <h2 className={styles.dataImage}>{props.gender}</h2>
         </div>
      </div>
   );
}

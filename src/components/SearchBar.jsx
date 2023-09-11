import React from "react";
import styles from "./ComponentStyles.module.css"

export default function SearchBar(props) {
   return (
      <div className={styles.divSearch}>
         <input className={styles.inputSearch} type='search' />
         <button className={styles.botonSearch} onClick={props.onSearch}>Agregar</button>
      </div>
   );
}

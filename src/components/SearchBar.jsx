import React from "react";
import styles from "./ComponentStyles.module.css"
import { useState } from "react";

export default function SearchBar(props) {

   const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value);
   };

   return (
         <div className={styles.divSearch}>
            <input className={styles.inputSearch} type='text' onChange={handleChange}/>
            <button className={styles.botonNav} onClick={() => props.onSearch(id)}>Agregar</button>
         </div>
   );
}

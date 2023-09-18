import React from "react";
import styles from "./ComponentStyles.module.css"
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function SearchBar(props) {

   const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value);
   };

   return (
      <div style={{display: "flex", justifyContent: "space-evenly", flexDirection: "row", alignItems: "center"}}>
         <button className={styles.botonNav} >
            <NavLink to='/about'>About</NavLink>
         </button>
         <button className={styles.botonNav} >
            <NavLink to='/home'>Home</NavLink>
         </button>
         <div className={styles.divSearch}>
            <input className={styles.inputSearch} type='text' onChange={handleChange}/>
            <button className={styles.botonNav} onClick={() => props.onSearch(id)}>Agregar</button>
         </div>
      </div>
   );
}

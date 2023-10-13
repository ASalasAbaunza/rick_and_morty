import React from "react";
import styles from "./ComponentStyles.module.css";
import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";

export default function Nav(props) {
   return (
      <div style={{display: "flex", justifyContent: "space-evenly", flexDirection: "row", alignItems: "center"}}>
        <button className={styles.botonNav} >
            <NavLink to='/about'>About</NavLink>
        </button>
        <button className={styles.botonNav} >
            <NavLink to='/home'>Home</NavLink>
        </button>
        <button className={styles.botonNav} >
            <NavLink to='/favorites'>Favorites</NavLink>
        </button>
        <SearchBar onSearch={props.onSearch}/>
        <button className={styles.botonNav} onClick={props.logout}>Log Out</button>
      </div>
   );
}

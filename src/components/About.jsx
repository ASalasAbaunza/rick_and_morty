import React from "react";
import styles from "./ComponentStyles.module.css"

export default function About () {
    return (
        <div className={styles.divAbout}>
            <h1 className={styles.textAbout}>This site was created by Alejandro Salas 
            as his first project for the Full-Stack program offered by Henry.</h1>
        </div>
    );
}
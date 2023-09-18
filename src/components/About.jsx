import React from "react";
import styles from "./ComponentStyles.module.css"

export default function About () {
    return (
        <div className={styles.divAbout}>
            <h1 className={styles.textAbout}>Texto de página About</h1>
        </div>
    );
}
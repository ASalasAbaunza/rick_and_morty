import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./ComponentStyles.module.css"

export default function Detail() {
    let [character, setCharacter] = useState([]);
    let {id} = useParams();

    useEffect(() => {
        fetch(`http://localhost:3001/rickandmorty/character/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setCharacter(data);
            });
    }, [id]);

    return (
        <div className={styles.divDetail}>
            <div className={styles.divDetailData}>
                <div>
                    <h1 className={styles.detailName}>{character.name}</h1>
                </div>
                <div>
                    <h2 className={styles.detailData}>STATUS | {character.status}</h2>
                    <h2 className={styles.detailData}>SPECIES | {character.species}</h2>
                    <h2 className={styles.detailData}>GENDER | {character.gender}</h2>
                    <h2 className={styles.detailData}>ORIGIN | {character.origin?.name}</h2>
                </div>
            </div>
            <div style={{width: "50%", display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>
                <div className={styles.divDetailImg}>
                    {character.image ? (
                        <div
                            style={{width: "100%", height: "100%", backgroundImage: `url(${character.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
                        />
                    ) : (
                        <p>Cargando...</p>
                    )}      
                </div>
            </div>
        </div>
    );
}
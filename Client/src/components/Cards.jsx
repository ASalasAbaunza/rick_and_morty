import React from 'react';
import Card from './Card';
import styles from './ComponentStyles.module.css'

export default function Cards(props) {
   const cartas = props.characters.map(function (character) {
      return (
      <Card
         key={character.id}
         name={character.name}
         status={character.status}
         species={character.species}
         gender={character.gender}
         origin={character.origin.name}
         image={character.image}
         id={character.id}
         onClose={props.onClose} 
      />);
   });
   return (
      <div className={styles.divCards}>
         {cartas}
      </div>
   );
}

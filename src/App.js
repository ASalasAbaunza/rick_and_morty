import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
//import {Routes, Route} from 'react-router-dom';
import { useState } from 'react';

function App() {

let [characters, setCharacters] = useState([]);
//Estamos creando un estado y una función para modificar el estado

const onSearch = (id) => {
   fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => {
         let printed = false;
         for (let i=0; i<characters.length;i++) {
            if (characters[i].id === data.id) {
               printed = true;
            }
         }
         if (printed) {
            window.alert("Character is already there!");
         } else {
            setCharacters([...characters,data])
         }
      });
};

const onClose = (id) => {
   let newCharacters = [];
   for (let i=0; i<characters.length; i++) {
      if (characters[i].id !== id) {
         newCharacters.push(characters[i]);
      }
   }
   characters = newCharacters;
   setCharacters(characters);
}

   return (
      <div>
         <div style={{display: "flex", justifyContent: 'flex-end'}}>
            <SearchBar onSearch={onSearch} />
         </div>
         <Cards characters={characters} onClose={onClose}/>
      </div>
   );
}

export default App;

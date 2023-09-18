import React from 'react';
import SearchBar from './components/SearchBar.jsx';
import Home from './components/Home.jsx'
import About from './components/About.jsx';
import Detail from './components/Detail.jsx';
import {Routes, Route} from 'react-router-dom';
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
         <div style={{backgroundColor: 'darkgray'}}>
            <SearchBar onSearch={onSearch} />
         </div>
         <Routes>
            <Route path='/home' element={<Home characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About/>} />
            <Route path='/detail/:id' element={<Detail/>} />
         </Routes>
      </div>
   );
}

export default App;

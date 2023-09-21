import React from 'react';
import Home from './components/Home.jsx'
import About from './components/About.jsx';
import Detail from './components/Detail.jsx';
import Form from './components/Form.jsx';
import Nav from './components/Nav.jsx';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
   let [characters, setCharacters] = useState([]);
    //Estamos creando un estado y una función para modificar el estado
   const location = useLocation();

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const email = 'alex.aba2409@gmail.com';
   const password = 'morgenial1';

   const login = (form) => {
      if (form.email === email && form.password === password) {
         setAccess(true);
         navigate('/home');
      } else {
         alert('Check your login details!')
      }
   };

   const logout = () => {
      setAccess(false);
   };

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

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
   };

   return (
      <div>
         {location.pathname!=='/' && (
            <div style={{backgroundColor: 'darkgray'}}>
               <Nav onSearch={onSearch} logout={logout}/>
            </div>
         )}
         <Routes>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/home' element={<Home characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About/>} />
            <Route path='/detail/:id' element={<Detail/>} />
         </Routes>
      </div>
   );
}

export default App;

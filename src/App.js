import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import characters from './data.js';

function App() {
   return (
      <div>
         <div style={{display: "flex", justifyContent: 'flex-end'}}>
            <SearchBar onSearch={(characterID) => window.alert(characterID)} />
         </div>
         <Cards characters={characters} />
      </div>
   );
}

export default App;

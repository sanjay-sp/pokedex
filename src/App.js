import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import SearchBar from './components/SearchBar/SearchBar';
import {fetchPokemon, fetchEveryPokemon} from './api/api';
import Cards from './components/Cards/Cards';

function App() {
  const [pokemon,setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  var filteredArray;

  const getResults = async () => {
    const pokemons = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=20");
    const data = await pokemons.json();
    getEveryPokemon(data.results);
  }

  const getEveryPokemon = async (array) => {
    array.forEach(async (element) => {
      const rawData = await fetch(element.url);
      const individual = await rawData.json();
      setPokemon(prevState => [...prevState, individual]);

  });
  }

  useEffect(()=>{
    console.log('in use effect');
    getResults();
    setIsLoading(false);
  },[]);
  return (
    <div className="App">
      <NavBar/>
      {isLoading ? <div>Loading...</div>: <div>
      <SearchBar/>
      <Cards state={pokemon}/>
      </div>
      }
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import SearchBar from './components/SearchBar/SearchBar';
import Cards from './components/Cards/Cards';

function App() {
  const [pokemon,setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getResults = async () => {
    const pokemons = await fetch("https://pokeapi.co/api/v2/pokemon/");
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

  const filterCards = (inp) => {
    const filteredData = pokemon.filter((item)=> {
      if(item.name.toLowerCase().includes(inp.toLowerCase())) {
        return item
      }
    });

    setPokemon(filteredData);
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
      <SearchBar filter={filterCards}/>
      <Cards state={pokemon}/>
      </div>
      }
    </div>
  );
}

export default App;

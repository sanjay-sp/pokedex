import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import SearchBar from './components/SearchBar/SearchBar';
import Cards from './components/Cards/Cards';
import Main from './components/Main';

function App() {
  const [pokemon,setPokemon] = useState([]);
  const [dummy,setDummy] = useState(pokemon);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(10);

  const getResults = async () => {
    const pokemons = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
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

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const perPageHandler = (number) => {
    setPostPerPage(number)
  }

  useEffect(()=>{
    console.log('in use effect');
    getResults();
    setIsLoading(false);
  },[]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = pokemon.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="App">
      <NavBar/>
      {isLoading ? <div>Loading...</div>: <div>
      <Main state={currentPosts} 
            paginate={paginate} 
            postsPerPage={postsPerPage}
            perPageHandler={perPageHandler}/>
      </div>
      }
    </div>
  );
}

export default App;

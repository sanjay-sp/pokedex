import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import Main from './components/Main';

function App() {
  const [pokemon,setPokemon] = useState([]);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(100);

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
      setData(prevState => [...prevState, individual]);

  });
  }

  const filterAllState = (value) => {
    if(value=="empty") {
      setCurrentPage(1);
      setPostPerPage(10);
    } else if(postsPerPage!==100) {
      setCurrentPage(1)
      setPostPerPage(100);
    }
  }

  const filterByType = (type) => {
    if (type==='ALL') {
      setCurrentPage(1)
      setPostPerPage(10);
      setData(pokemon);
    } else {
      setCurrentPage(1)
    setPostPerPage(100);
    const filterData =[] 
    pokemon.map((item)=>{
         item.types.filter((data)=>{
          if (data.type.name === type.toLowerCase()) {
            filterData.push(item)
          }
        })
    });
    setData(filterData)
    }
    
  }

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  const perPageHandler = (number) => {
    setCurrentPage(1)
    setPostPerPage(number);
  }

  useEffect(()=>{
    console.log('in use effect');
    getResults();
    setData(pokemon)
    setIsLoading(false);
  },[]);
  console.log(pokemon);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
  return (
    <div className="App">
      <NavBar/>
      {isLoading ? <div>Loading...</div>: <div>
      <Main currState={currentPosts}
            data={data}
            state={pokemon}
            paginate={paginate} 
            postsPerPage={postsPerPage}
            perPageHandler={perPageHandler}
            filterAllState={filterAllState}
            filterByType={filterByType}/>
      </div>
      }
    </div>
  );
}

export default App;

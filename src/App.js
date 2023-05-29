import './App.css';
import axios, { all } from 'axios';
import { useEffect, useState } from 'react';
import PokemonModal from './components/modal/Modal';


function App() {

  const [pokemonState, setPokemonState] = useState([]);
  const [pokemonData, setPokemonData] = useState([]);
  const [searchPokemon, setSearchPokemon] = useState('');
  const [searchPokemonResults, setSearchPokemonResults] = useState([]);
  const [selectedPokemonType, setSelectedPokemonType] = useState('');
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?offset=0&limit=100")
  const [modal, setModal] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState();




  useEffect(() => {
    /*  const url = 'https://pokeapi.co/api/v2/pokemon/' */
    axios.get(url)
      .then((response) => {
        setPokemonState(response.data.results);
        setNextUrl(response.data.next);
        setPrevUrl(response.data.previous);
        console.log(response.data, 'respoooosta')
      })
      .catch((error) => {
        console.log(error);
      })
  }, [url]);

  useEffect(() => {

    const fetchUrlData = async () => {
      const pokemonDataUnit = await Promise.all(
        pokemonState.map(async (pokemonStateUnit) => {
          try {
            const getResponse = await axios.get(pokemonStateUnit.url);
            return getResponse.data;
          } catch (error) {
            console.log(`Erro ao obter os dados do Pokémon ${pokemonStateUnit}:`, error);
            return null;
          }
        })

      )
      setPokemonData(pokemonDataUnit);

    }
    fetchUrlData();
  }, [pokemonData]);

  const handleTypeChange = (event) => {
    setSelectedPokemonType(event.target.value);
  };

  const handlePokemonSearchChange = (event) => {
    setSearchPokemon(event.target.value);
  };
  const handleSearch = (event) => {
    event.preventDefault();
    const filteredPokemonData = pokemonData.filter((pokemonFilterUnit) => {
      const isMatchingType = selectedPokemonType === '' || pokemonFilterUnit.types.some(type => type.type.name === selectedPokemonType);
      const isMatchingName = pokemonFilterUnit.name.toLowerCase().includes(searchPokemon.toLowerCase());
      return isMatchingType && isMatchingName;
    });
    setSearchPokemonResults(filteredPokemonData);
  };

  const handlePokemonClick = (currentPokemon) => {
    setSelectedPokemon(currentPokemon);
    setModal(true)
  };
  
  const closeModal = () => {
    setModal(false);
  };


  useEffect(() => { console.log(pokemonData, 'pokemonData aqui') }, []);

  return (
    <>

       {modal && <PokemonModal selectedPokemon={selectedPokemon} closeModal={closeModal} />}
      
      <form onSubmit={handleSearch} style={{ width: '100vw', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <input type="text" value={searchPokemon} onChange={handlePokemonSearchChange} placeholder="Digite para buscar" />
        <select value={selectedPokemonType} onChange={handleTypeChange}>
          <option value="">Todos os tipos</option>
          <option value="fire">Fogo</option>
          <option value="water">Água</option>
          <option value="grass">Planta</option>
          <option value="poison">Veneno</option>
          <option value="electric">Elétrico</option>
          <option value="rock">Pedra</option>
          <option value="ice">Gelo</option>
          <option value="ghost">Fantasma</option>
          <option value="psychic">Psíquico</option>
          <option value="steel">Ferro</option>
          <option value="ground">terrestre</option>
          <option value="fighting">Lutador</option>
          <option value="bug">Inseto</option>
          <option value="fairy">Fada</option>
          <option value="flying">Voador</option>
          <option value="normal">Normal</option>
        </select>
        <button type="submit">Buscar</button>
      </form>
      <div className="App" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridGap: '20px' }}>

        {(searchPokemonResults.length > 0 ? searchPokemonResults : pokemonData).map((pokemonUnit) => (
          <button style={{ borderRadius: '20px' }}   key={pokemonUnit.name} onClick={() => handlePokemonClick(pokemonUnit)} >


            <div style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '20px' }}>
              <img src={pokemonUnit.sprites.front_default} style={{ backgroundColor: 'white', margin: '0px', width: '200px', height: '200px' }} />
              <div key={pokemonUnit.id}>{pokemonUnit.name} #{pokemonUnit.order}</div>
              <div style={{ margin: '0px', display: 'flex', flexDirection: 'row', width: '50%', alignItems: 'center', justifyContent: 'center' }}>
                <p style={{ margin: '0px' }}>
                  TIPO:
                </p>

                {pokemonUnit.types.map((typeUnit) => {
                  return (
                    <div style={{ display: 'flex', flexDirection: 'row', margin: '10px' }} >
                      {typeUnit.type.name}
                    </div>
                  )
                })}
              </div>

              {/* {pokemonUnit.stats.map((allStatsUnit) => {
                return (
                  <ul style={{ listStyleType: 'none', padding: '0px', margin: '0px' }}>
                    <li >{allStatsUnit.stat.name}: {allStatsUnit.base_stat}</li>
                  </ul>
                )
              })}
 */}

            </div>
          </button>
        ))}

      </div >
      <>
        {prevUrl && <button onClick={() => {
          setPokemonData([])
          setUrl(prevUrl)
        }}>Previous</button>}

        {nextUrl && <button onClick={() => {
          setPokemonData([])
          setUrl(nextUrl)
        }}>Next</button>}

      </>
    </>
  );
}

export default App;

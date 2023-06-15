
import axios from 'axios';
import { useEffect, useState } from 'react';
import PokemonModal from './components/modal/Modal';
import { AppStyleBody, AppStyleHeader, AppStyleMain, SearchPokemonTextStyle } from './AppStyle.jsx';
import searchIcon from "../src/assets/lupapng.png"
import psyduckImage from "./assets/psyducktransparent.webp"

function App() {

  const [pokemonState, setPokemonState] = useState([]);
  const [pokemonData, setPokemonData] = useState([]);
  const [searchPokemon, setSearchPokemon] = useState('');
  const [searchPokemonResults, setSearchPokemonResults] = useState([]);
  const [selectedPokemonType, setSelectedPokemonType] = useState('');
  const [url] = useState("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1280");
  const [modal, setModal] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState();
  const [searchPerformed, setSearchPerformed] = useState(false);


  useEffect(() => {
    axios.get(url)
      .then((response) => {
        setPokemonState(response.data.results);
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
  }, [pokemonState]);

  const handleTypeChange = (event) => {

    setSelectedPokemonType(event.target.value);


  };

  const handlePokemonSearchChange = (event) => {
    setSearchPokemon(event.target.value);
  };


  const handleSearch = (event) => {

    event.preventDefault();
    let filteredPokemonData = pokemonData.filter((pokemonFilterUnit) => {
      let isMatchingType = selectedPokemonType === "" || pokemonFilterUnit.types.some(
        (type) => type.type.name === selectedPokemonType
      );
      let isMatchingName = pokemonFilterUnit.name.toLowerCase().includes(searchPokemon.toLowerCase());
      return isMatchingType && isMatchingName;
    });
    if (selectedPokemonType !== "" || searchPokemon !== "") {
      setSearchPokemonResults(filteredPokemonData);
      setSearchPerformed(true);

    } else {
      setSearchPokemonResults([]);
      
    }


  };

  const handlePokemonClick = (currentPokemon) => {
    setSelectedPokemon(currentPokemon);
    setModal(true)
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <AppStyleMain>
      {modal && <PokemonModal selectedPokemon={selectedPokemon} closeModal={closeModal} />}
      <AppStyleHeader>
        <form onSubmit={handleSearch}>
          <input type="text" value={searchPokemon} onChange={handlePokemonSearchChange} placeholder="Digite para buscar" />
          <select value={selectedPokemonType} onChange={handleTypeChange}>
            <option value="">Selecione um tipo</option>
            <option value="normal">Normal</option>
            <option value="fire">Fogo</option>
            <option value="water">Água</option>
            <option value="grass">Planta</option>
            <option value="poison">Veneno</option>
            <option value="electric">Elétrico</option>
            <option value="rock">Pedra</option>
            <option value="ice">Gelo</option>
            <option value="dark">Sombrio</option>
            <option value="ghost">Fantasma</option>
            <option value="psychic">Psíquico</option>
            <option value="steel">Ferro</option>
            <option value="ground">terrestre</option>
            <option value="fighting">Lutador</option>
            <option value="bug">Inseto</option>
            <option value="fairy">Fada</option>
            <option value="flying">Voador</option>
            <option value="dragon">Dragão</option>
          </select>
          <button type="submit">Buscar</button>
        </form>
      </AppStyleHeader>
      <AppStyleBody >
        {searchPokemonResults.length > 0 ? (
          searchPokemonResults.map((pokemonUnit) => (
            <button key={pokemonUnit.index} onClick={() => handlePokemonClick(pokemonUnit)}>
              <div id="pokemonDataBoxStyle" key={pokemonUnit.index}>
                <img src={pokemonUnit.sprites?.front_default} alt={pokemonUnit.name} />
                <div>{pokemonUnit.name} #{pokemonUnit.id}</div>
                <div id="typeDiv">
                  <p>TIPO:</p>
                  {pokemonUnit.types.map((typeUnit) => (
                    <div id="typeName" key={typeUnit.type.name}>
                      {typeUnit.type.name}
                    </div>
                  ))}
                </div>
              </div>
            </button>
          ))
        ) : (
          <div>
            {searchPerformed && searchPokemonResults.length >= 0 ? (
              <SearchPokemonTextStyle>
                <div className="noPokemonFoundDiv">
                  <h2 className="noPokemonFoundText">
                    Nenhum Pokémon encontrado com o tipo e nome informados.
                  </h2>
                  <img id="notFoundImage" src={psyduckImage} alt="psyduck not found"/>
                </div>
              </SearchPokemonTextStyle>
            ) : (
              <SearchPokemonTextStyle>
                <div className="noPokemonFoundDiv">
                  <h2 className="noPokemonFoundText">
                    Selecione um tipo de Pokémon ou digite um nome para fazer a busca.
                  </h2>
                  <img src={searchIcon} alt="Icone de pesquisa" />
                </div>
              </SearchPokemonTextStyle>
            )}
          </div>
        )}
      </AppStyleBody  >
    </AppStyleMain>
  );
}

export default App;

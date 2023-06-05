import React from "react";
import { ModalSonStyled, ModalStyled, PokemonCard } from "./ModalStyle";

export default function PokemonModal({ selectedPokemon, closeModal }) {
  /* 
    if (!selectedPokemon) {
      return null; // Renderiza o modal vazio se nenhum Pokémon for selecionado
    } */

const pokemonTypes = selectedPokemon.types.map((type) => type.type.name);
  return (
    <ModalStyled>
      <button onClick={closeModal}>X</button>
      <ModalSonStyled>
        <PokemonCard pokemonTypes={pokemonTypes} >
          <img src={selectedPokemon.sprites.front_default} alt="pokemon" />
          <p>Nome: {selectedPokemon.name}</p>
        </PokemonCard>
        <div id="modalPokemonStats">
          <p>Atributos:</p>
          <ul>
            {selectedPokemon.stats.map((statUnit) => (
              <li key={statUnit.stat.name}>
                {statUnit.stat.name}: {statUnit.base_stat}
              </li>
            ))}
          </ul>
        </div>
      </ModalSonStyled>
    </ModalStyled>
  );
}
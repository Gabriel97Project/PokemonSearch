import React from "react";
import { ModalSonStyled, ModalStyled } from "./ModalStyle";

export default function PokemonModal({ selectedPokemon, closeModal }) {

  if (!selectedPokemon) {
    return null; // Renderiza o modal vazio se nenhum Pokémon for selecionado
  }

  return (
    <ModalStyled>
      <ModalSonStyled>
      <button onClick={closeModal}>X</button>
        <div id="modalPokemonName">

          <img src={selectedPokemon.sprites.front_default} alt="pokemon" />

          <p>Nome: {selectedPokemon.name}</p>
        </div>
          
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

import styled from "styled-components"


export const ModalStyled = styled.div`

  width:100vw;
  height:100vh;
  position:fixed;
  top:0px;
  background-color:rgba(0,0,0,0.8);

  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`

export const ModalSonStyled = styled.div`

  width:50%;
  height:400px;
  background-color:white;
  display:flex;
  flex-direction:row;
  align-items:Center;
  font-family:'Kalam', cursive;
  border-radius:20px;
  @media (max-width: 1200px){
    width:80%;
    height:500px;
  }
  #modalPokemonName{
  /*   background-color:red; */
    height:100%;
    font-size:20px;
    width:40%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    
    
  }
  #modalPokemonStats{

     font-size:25px;
     width:50%;
     display:flex;
     flex-direction:column;
     align-items:center;
     justify-content:center;
   }
 
  
`
const typeColors = {
  fire: '#fa7837',
  water: '#61cfed',
  grass: '#35de51',
  fairy: '#fcd4ee',
  normal: '#f2ede4',
  dragon: '#e35f6a',
  poison: '#ab6bb5',
  bug: '#4ca660',
  steel: '#d6d4d6',
  ground: '#bf9852',
  rock: '#999894',
  electric: '#f5df38',
  dark: '#9460a8',
  flying: '#e8cc7d',
  psychic: '#eb88e2',
  ice: '#b0eff5',
  ghost: '#ebeded',
  fighting: '#edae8e',

};
export const PokemonCard = styled.div`
  /* Estilos padrão da carta */
  

  background: ${({ pokemonTypes }) =>
    pokemonTypes.length === 1
        ? typeColors[pokemonTypes[0]]
        : pokemonTypes && Array.isArray(pokemonTypes) && pokemonTypes.length === 2
        ? `linear-gradient(to right, ${typeColors[pokemonTypes[0]]}, ${typeColors[pokemonTypes[1]]})`
        : 'gray'};
  margin-left:10px;   
  font-size:25px;
    width:50%;
    height:95%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    border-radius:20px;
  /* Outros estilos da carta */
  img{
    width:200px;
    height:200px;
    }
`;


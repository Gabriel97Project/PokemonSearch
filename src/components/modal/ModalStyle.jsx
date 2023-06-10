
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
  height:500px;
  background-color:white;
  display:flex;
  flex-direction:row;
  align-items:Center;
  font-family:'Kalam', cursive;
  border-radius:20px;
  position:relative;
  button{

    width:35px;
    height:35px;
    border-radius:30%;
    position:absolute;
    top:10px;
    right:10px;
  }
 
  #modalPokemonName{
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
    ul{
      list-style:circle;
    }    
  }
  @media (min-width: 1300px){
    max-width: 900px; 
    height: 600px; 
    width: 60%; 
  }
   @media (max-width: 1200px){
    width:70%;
  }
  @media (max-width: 800px){ 
    width:95%;
  }
  @media (max-width: 600px){
    width:90%;
    height:500px;
    background-color:white;
    display:flex;
    flex-direction:column;
    border-radius:0px;
    display:flex;
    justify-content:Center;
    align-items:Center;
    button{
      
      top:-80px;
    }
      #modalPokemonStats{
        font-size:25px;
        width:100%;
        background-color:black;
        color:white;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
      }
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

  background: ${({ pokemonTypes }) =>
    pokemonTypes.length === 1 ? typeColors[pokemonTypes[0]] : pokemonTypes && Array.isArray(pokemonTypes)
    && pokemonTypes.length === 2 ? `linear-gradient(to right, ${typeColors[pokemonTypes[0]]}, ${typeColors[pokemonTypes[1]]})`: 'none'};
    /* acime fiz um estilo que vai mudar de acordo com o tipo do pokemom, caso o pokemom tenha dois tipos, a carta vai ter duas cores */
  margin-left:10px;   
  font-size:25px;
  width:50%;
  height:95%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  border-radius:20px;
  color:black;
  font-weight:bold;
  img{
    width:200px;
    height:200px;
    }   
  @media (max-width: 600px){
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    margin:0px;
    border-radius:0px;
    
    }
`;


import styled from "styled-components";
import pokeImage from "../src/assets/pokemongif.gif"



export const AppStyleMain = styled.div`
  width:100%;
/*   background-color:#edc524;  */
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
/*   justify-content:center;
  align-items:center; */
  @media (max-width: 1920px){
    background-color: red ;
  }


`

export const AppStyleHeader = styled.div`
  width:100%;
  height:170px;
   background-color:blue; 
  background-image:url(${pokeImage});
  background-repeat:no-repeat;
  display:flex;
  align-items:center;
  justify-content:Center;
  form{
    /* background-color:yellow; */
    width:50%;
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    align-items:center;
    height:40px;
   
    input{
      height:90%;
    }
    select{
      height:90%;
    }
    button{
      height:90%;
      
    
    }
  }


`

export const AppStyleBody = styled.div`
  width:80%;
  height:100%;
  background-color:yellow; 

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;

  @media (min-width: 1300px){
    background-color: yellowgreen ;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    max-width: 1500px; /* Define o tamanho máximo do container */
    width: 100%; /* Define a largura do container como 100% */
    margin: 0 auto; 
  }
  @media (max-width: 1030px){
    width:100%;
  }
  @media (max-width: 800px){

    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 600px){

    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 400px){
    width:90%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
   button{
    background-color:transparent;
    border-color:transparent;
    cursor: pointer;
    
   }

   #pokemonDataBoxStyle{
    height:180px;
    width:100%;
    border: solid 3px;
    border-color:black;
    background-color: white;
     display: flex;
      flex-direction: column;
       align-items: center;
       border-radius: 10px;
   }
   

`



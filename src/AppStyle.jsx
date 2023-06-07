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
  width:80%;
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
      width:35%;
    }
    select{
      height:90%;
      width:35%;
    }
    button{
      height:90%;
      
    
    }
  }

  
  @media (min-width: 1300px){
    background-color: yellow ;
    max-width: 1500px; /* Define o tamanho máximo do container */
    width: 100%; /* Define a largura do container como 100% */
    margin: 0 auto; 
    form{
    /* background-color:yellow; */
    width:50%;
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    align-items:center;
    height:40px;
    background-color:red;
   
      input{
        height:90%;
        width:35%;
      }
      select{
        height:90%;
        width:35%;
      }
      button{
        height:90%;
        width:15%;
        
      
      }
    }
  }
  @media (max-width: 1030px){
    width:100%;
  }
  @media (max-width: 738px){
      display:flex;
      justify-content:flex-end;
      align-items:center;
      background-size:150px;
      background-position: left bottom;

    form{
      display:flex;
      flex-direction:column;
      justify-content:space-evenly;
      align-items:center;
      background-color:red;
      height:100%;
/*       margin-left:100px; */
      input{
      height:20%;
      width:70%;
      }
      select{
        height:20%;
        width:72%;
      }
      button{
        height:20%;
        
      
      }
    }
  }
  @media (max-width: 400px){
    background-size:100px;
    height:130px;
    form{
      width: 70%;
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
    grid-gap: 5px;
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



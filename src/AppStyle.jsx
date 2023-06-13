import styled from "styled-components";
import pokeImage from "../src/assets/pokemongif.gif"



export const AppStyleMain = styled.div`

  width:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  background-color:#f7b881;
  
`
export const AppStyleHeader = styled.div`
  
  width:100%;
  height:170px;
  background-image:url(${pokeImage});
  background-repeat:no-repeat;
  background-color:orange;
  display:flex;
  align-items:center;
  justify-content:Center;
  form{
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
    max-width: 1500px;
    width: 100%;
    margin: 0 auto; 
    form{
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
      height:100%;
      padding-left:10%;
      input{
        height:20%;
        width:80%;
      }
      select{
        height:20%;
        width:82%;
      }
      button{
        height:20%;
      }
    }
  }
  @media (max-width: 400px){
    background-size:150px;
    height:200px;
    form{
      width: 70%;
    }
  }

`

export const AppStyleBody = styled.div`

  width:100%;
  height:100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;

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
    img{
      background-color: white;
      margin: 0px;
      width:  100px;
      height: 100px;
    }
    #typeDiv{
      margin: 0px;
      display: flex;
      flex-direction:  row;
      width: 50%;
      align-items: center;
      justify-content: center;
      p{
        margin: 0px;
      }
      #typeName{
        display: flex;
        flex-direction: row;
         margin: 10px;
      }
    }
  }
  @media (min-width: 1300px){
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    max-width: 1500px;
    width: 100%;
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

`


export const SearchPokemonTextStyle = styled.div`
  width: 100%;
  
  height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  position:absolute;
  right:0px;
  overflow:hidden;
  background-color:#f7b881;
  .noPokemonFoundDiv{
  /*   width:80%; */
    height:35%;
    margin-bottom:250px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding:30px;
    border-radius:2%;
    background-color:#f7b881;
      font-size:30px;
    }
    img{
      width:80px;
      height:80px;
    }
  
  @media (max-width: 600px){
    .noPokemonFoundDiv{
      .noPokemonFoundText{
        font-size:25px;
      }
    }
    
  }
 


`
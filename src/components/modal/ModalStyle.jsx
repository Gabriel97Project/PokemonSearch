
import styled from "styled-components"


export const ModalStyled = styled.div`

  width:100vw;
  height:100vh;
  position:fixed;
  top:0px;
  background-color:rgba(0,0,0,0.8);
  
  display:flex;
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

  #modalPokemonName{
  /*   background-color:red; */
    height:400px;
    font-size:20px;
    width:40%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    
    img{
    width:250px;
    height:250px;
    }
  }
  #modalPokemonStats{
 /*    background-color:yellow; */
    font-size:25px;
    width:60%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
  }
  
`
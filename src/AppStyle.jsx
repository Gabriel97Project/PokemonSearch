import styled from "styled-components";
import pokeImage from "../src/assets/pokemongif.gif"



export const AppStyleMain = styled.div`
  width:100vw;
 /*  background-color:green; */
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;



`

export const AppStyleHeader = styled.div`
  width:70vw;
  height:170px;
  /* background-color:blue; */
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
  width:70vw;
  height:100%;
  /* background-color:red ; */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
   
   
   button{
    background-color:transparent;
    cursor: pointer;
   }
   

`
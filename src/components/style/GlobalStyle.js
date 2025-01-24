import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";


const GlobalStyles = createGlobalStyle`
  ${reset}
  @import url('');

  html{
  
  width:100%;
  height:100%;
  font-size: 62.5%;
  &::-webkit-scrollbar {
    width: 0.5rem; }
  
}
  
  body{
    background-color: #FFFAEC;
    overflow: hidden;
    cursor: none; 
   
  }
  *{
      box-sizing: border-box;
      font-family: 'Spoqa Han Sans', 'Spoqa Han Sans JP', 'Sans-serif';
  }
 

`;

export { GlobalStyles };

import styled, { createGlobalStyle } from 'styled-components';
export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto',sans-serif;

  
}
html {
  /*font-size: 10px; */
  font-size: 62.5%;
  background-color: #f0f2f5;
 
  
}
img{
  width: 100%;
}

:focus {
  outline: none;
}

a{
  text-decoration: none;
}`;

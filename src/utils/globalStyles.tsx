import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'Poppins';
    src: local('Poppins'), url(../../../fonts/Poppins/Poppins-Regular.ttf) format('truetype');
  }

  @font-face {
    font-family: 'Poppins';
    font-weight: 900;
    src: local('Poppins'), url(../../../fonts/Poppins/Poppins-Black.ttf) format('truetype');
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    background: -webkit-linear-gradient(left, #25c481, #25b7c4);
    background: linear-gradient(to right, #25c481, #25b7c4);
  }

  input, button, textarea{
    font: 400 18px Roboto, sans-serif;
  }

  form input{
    width: 100%;
    height: 40px;
    color: #333;
    border: 1px solid #dcdce6;
    border-radius: 8px;
    padding: 0 24px;
    margin: 8px 0;
  }

  button {
    cursor: pointer;
  }

  &::-webkit-scrollbar-track {
    background-color: #eae7e7;
    height: 6px;
  }

  &::-webkit-scrollbar {
    width: 12px;
    height: 6px;
  }

`;

export default GlobalStyle;

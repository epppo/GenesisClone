import React from "react";
import reset from "./public/reset.css"
import  styled, {createGlobalStyle} from "styled-components";
import Router from "./public/Router";
import Header from "./component/Header";


function App() {
  return (
    <Wrap>
      <Header/>
      <GlobalStyle/>
      <Router/>
    </Wrap>

  )
}

export default App;

const GlobalStyle = createGlobalStyle`
${reset}; 
`;

const Wrap = styled.div`
max-width: 1919px;
min-width: 420px;
width: 100%;
`;
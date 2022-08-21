import React from "react";
import reset from "./public/reset.css"
import  styled, {createGlobalStyle} from "styled-components";
import Header from "./component/Header";


function App() {
  return (
    <Wrap>
      <Header/>
      <GlobalStyle/>
    </Wrap>

  )
}

export default App;

const GlobalStyle = createGlobalStyle`
${reset}; 
`;

const Wrap = styled.div`
max-width: 1919px;
min-width: 450px;
width: 100%;
`;
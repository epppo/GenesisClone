import React from "react";
import reset from "./public/reset.css"
import  {createGlobalStyle} from "styled-components";
import Router from "./public/Router";

function App() {
  return (
    <>
      <GlobalStyle/>
      <Router/>
    </>

  )
}

export default App;

const GlobalStyle = createGlobalStyle`
${reset}; 
`;

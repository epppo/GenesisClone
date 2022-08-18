import { BrowserRouter, Routes, Route } from "react-router-dom";

import {HighLights, Main, OverView} from "../page"

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} /> 
        <Route path="/highlights" element={<HighLights />} /> 
        <Route path="/overview" element={<OverView />} />         
      </Routes >
    </BrowserRouter >
  );
}

export default Router;
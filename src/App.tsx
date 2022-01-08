import React from "react";
import {Home} from "./pages/Home/Home.component";
import {Portfolio} from "./pages/Portfolio/Portfolio.component";
import { GlobalStyles } from "./styles";


const App: React.FC = function() {
  return (
    <>
      <GlobalStyles />
      <Home />
      {/* <Portfolio id="Portfolio"/> */}
    </>
  );
};

export default App;

import React from "react";
import Drink from "./Drink";
import Header from "./Header";

function App() {
  return (
    <React.Fragment>
      <div>
      <Header />
      <hr/>
      </div>
      <div>
      <Drink />
      </div>
    </React.Fragment>
  );
}

export default App;

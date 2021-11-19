import React from "react";
import DrinkControl from "./DrinkControl";
import Header from "./Header";

function App() {
  return (
    <React.Fragment>
      <div>
      <Header />
      <hr/>
      </div>
      <div>
      <DrinkControl />
      </div>
    </React.Fragment>
  );
}

export default App;

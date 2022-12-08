import React from "react";
import "./App.css";
import { Container } from "./components/Container";

function App() {
  return (
    <div className="App">
      <Container
        containerTitle="Maanil"
        handleDrag={() => console.log("m")}
        handleDrop={() => console.log("m")}
      />
    </div>
  );
}

export default App;

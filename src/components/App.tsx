import { Component } from "solid-js";
import "./App.scss";
import blockadeImg from "../images/blockade.png";

const App: Component = () => {
  return (
    <section class="App">
      <img src={blockadeImg} alt="Blockade" class="App__image" />
      <h1 class="App__message">Under Construction</h1>
    </section>
  );
};

export default App;

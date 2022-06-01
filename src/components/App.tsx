import { Component } from "solid-js";
import "./App.scss";

import Intro from "./Intro";
import AboutMe from "./AboutMe";

const App: Component = () => {
  return (
    <>
      <Intro />
      <AboutMe />
    </>
  );
};

export default App;

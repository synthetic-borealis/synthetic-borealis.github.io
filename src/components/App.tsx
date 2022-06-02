import { Component } from "solid-js";
import "./App.scss";

import Intro from "./Intro";
import AboutMe from "./AboutMe";
import Projects from "./Projects";

const App: Component = () => {
  return (
    <>
      {/* <Intro />
      <AboutMe /> */}
      <Projects>
      </Projects>
    </>
  );
};

export default App;

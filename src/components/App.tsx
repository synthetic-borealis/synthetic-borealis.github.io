import { Component, For } from "solid-js";
import "./App.scss";

import Intro from "./Intro";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import ProjectCard from "./ProjectCard";

import projectsList from "../utils/projects-list";

const App: Component = () => {
  return (
    <>
      <Intro />
      <AboutMe />
      <Projects>
        <For each={projectsList}>
          {(project) => <li>{ProjectCard(project)}</li>}
        </For>
      </Projects>
    </>
  );
};

export default App;
